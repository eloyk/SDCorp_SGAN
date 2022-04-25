
resource "oci_containerengine_cluster" "sdcorpOKECluster" {
  compartment_id     = oci_identity_compartment.sdcorpCompartment.id
    endpoint_config {
    is_public_ip_enabled = "true"
    nsg_ids = [
    ]
    subnet_id = oci_core_subnet.sdcorpEndpointSubnet.id
  }
  image_policy_config {
    is_policy_enabled = "false"
  }
  kubernetes_version = var.kubernetes_version
  name               = var.ClusterName
   options {
    add_ons {
      is_kubernetes_dashboard_enabled = "false"
      is_tiller_enabled               = "false"
    }
    admission_controller_options {
      is_pod_security_policy_enabled = "false"
    }

    service_lb_subnet_ids = [
      oci_core_subnet.sdcorpClusterLB1Subnet.id, 
      oci_core_subnet.sdcorpClusterLB2Subnet.id
    ]
  }
  vcn_id             = oci_core_vcn.sdcorpVCN.id
}

locals {
  all_sources = data.oci_containerengine_node_pool_option.sdcorpOKEClusterNodePoolOption.sources
  oracle_linux_images = [for source in local.all_sources : source.image_id if length(regexall("Oracle-Linux-[0-9]*.[0-9]*-20[0-9]*",source.source_name)) > 0]
}

resource "oci_containerengine_node_pool" "sdcorpOKENodePool" {
  cluster_id         = oci_containerengine_cluster.sdcorpOKECluster.id
  compartment_id     = oci_identity_compartment.sdcorpCompartment.id
  kubernetes_version = var.kubernetes_version
  name               = "sdcorpOKENodePool"
  node_shape         = var.Shape
  
  node_source_details {
    image_id = local.oracle_linux_images.0
    source_type = "IMAGE"
  }

  node_shape_config {
    ocpus = 2
    memory_in_gbs = 8
  }

  node_config_details {
    size      = var.node_pool_size
    nsg_ids = [
    ]
    placement_configs {
      availability_domain = lookup(data.oci_identity_availability_domains.ADs.availability_domains[0], "name")
      subnet_id           = oci_core_subnet.sdcorpNodePoolSubnet.id
    }  
    placement_configs {
      availability_domain = lookup(data.oci_identity_availability_domains.ADs.availability_domains[1], "name")
      subnet_id           = oci_core_subnet.sdcorpNodePoolSubnet.id
    }  
    placement_configs {
      availability_domain = lookup(data.oci_identity_availability_domains.ADs.availability_domains[2], "name")
      subnet_id           = oci_core_subnet.sdcorpNodePoolSubnet.id
    }  
  }

  initial_node_labels {
    key   = "key"
    value = "value"
  }

  ssh_public_key      = file(var.ssh_public_key_file)
}

