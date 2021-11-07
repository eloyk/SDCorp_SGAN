resource "oci_core_vcn" "sdcorpVCN" {
  cidr_block     = var.VCN-CIDR
  compartment_id = oci_identity_compartment.sdcorpCompartment.id
  display_name   = "sdcorpVCN"
}

resource "oci_core_internet_gateway" "sdcorpInternetGateway" {
  compartment_id = oci_identity_compartment.sdcorpCompartment.id
  display_name   = "sdcorpInternetGateway"
  enabled      = "true"
  vcn_id         = oci_core_vcn.sdcorpVCN.id
}

resource "oci_core_route_table" "sdcorpRouteTableViaIGW" {
  compartment_id = oci_identity_compartment.sdcorpCompartment.id
  vcn_id         = oci_core_vcn.sdcorpVCN.id
  display_name   = "sdcorpRouteTableViaIGW"

  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id =  oci_core_internet_gateway.sdcorpInternetGateway.id
  }
}

resource "oci_core_security_list" "sdcorpNodePoolSecurityList" {
  compartment_id = var.compartment_ocid
  display_name = "sdcorpOKESecurityList"
  egress_security_rules {
    description      = "Allow pods on one worker node to communicate with pods on other worker nodes"
    destination      = var.sdcorpNodePoolSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    protocol  = "all"
    stateless = "false"
  }
  egress_security_rules {
    description      = "Access to Kubernetes API Endpoint"
    destination      = var.sdcorpEndpointSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    protocol  = "6"
    stateless = "false"
    tcp_options {
      max = "6443"
      min = "6443"
    }
  }
  egress_security_rules {
    description      = "Kubernetes worker to control plane communication"
    destination      = var.sdcorpEndpointSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    protocol  = "6"
    stateless = "false"
    tcp_options {
      max = "12250"
      min = "12250"
    }
  }
  egress_security_rules {
    description      = "Path discovery"
    destination      = var.sdcorpEndpointSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    icmp_options {
      code = "4"
      type = "3"
    }
    protocol  = "1"
    stateless = "false"
  }
  egress_security_rules {
    description      = "Allow nodes to communicate with OKE to ensure correct start-up and continued functioning"
    destination      = "all-iad-services-in-oracle-services-network"
    destination_type = "SERVICE_CIDR_BLOCK"
    protocol  = "6"
    stateless = "false"
    tcp_options {
      max = "443"
      min = "443"
    }
  }
  egress_security_rules {
    description      = "ICMP Access from Kubernetes Control Plane"
    destination      = "0.0.0.0/0"
    destination_type = "CIDR_BLOCK"
    icmp_options {
      code = "4"
      type = "3"
    }
    protocol  = "1"
    stateless = "false"
  }
  egress_security_rules {
    description      = "Worker Nodes access to Internet"
    destination      = "0.0.0.0/0"
    destination_type = "CIDR_BLOCK"
    protocol  = "all"
    stateless = "false"
  }
  freeform_tags = {
  }
  ingress_security_rules {
    description = "Allow pods on one worker node to communicate with pods on other worker nodes"
    protocol    = "all"
    source      = var.sdcorpNodePoolSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
  }
  ingress_security_rules {
    description = "Path discovery"
    icmp_options {
      code = "4"
      type = "3"
    }
    protocol    = "1"
    source      = var.sdcorpEndpointSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
  }
  ingress_security_rules {
    description = "TCP access from Kubernetes Control Plane"
    protocol    = "6"
    source      = var.sdcorpEndpointSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
  }
  ingress_security_rules {
    description = "Inbound SSH traffic to worker nodes"
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"
    stateless   = "false"
    tcp_options {
      max = "22"
      min = "22"
    }
  }
  ingress_security_rules {
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"
    stateless   = "false"
    tcp_options {
      max = "32000"
      min = "32000"
    }
  }
  vcn_id = oci_core_vcn.sdcorpVCN.id
}

resource "oci_core_security_list" "sdcorpEndpointSecurityList" {
  compartment_id = var.compartment_ocid
  display_name = "sdcorpEndpointSecurityList"
  egress_security_rules {
    description      = "Allow Kubernetes Control Plane to communicate with OKE"
    destination      = "all-iad-services-in-oracle-services-network"
    destination_type = "SERVICE_CIDR_BLOCK"
    protocol  = "6"
    stateless = "false"
    tcp_options {
      max = "443"
      min = "443"
    }
  }
  egress_security_rules {
    description      = "All traffic to worker nodes"
    destination      = var.sdcorpNodePoolSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    protocol  = "6"
    stateless = "false"
  }
  egress_security_rules {
    description      = "Path discovery"
    destination      = var.sdcorpNodePoolSubnet-CIDR
    destination_type = "CIDR_BLOCK"
    icmp_options {
      code = "4"
      type = "3"
    }
    protocol  = "1"
    stateless = "false"
  }
  freeform_tags = {
  }
  ingress_security_rules {
    description = "External access to Kubernetes API endpoint"
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"
    stateless   = "false"
    tcp_options {
      max = "6443"
      min = "6443"
    }
  }
  ingress_security_rules {
    description = "Kubernetes worker to Kubernetes API endpoint communication"
    protocol    = "6"
    source      = var.sdcorpNodePoolSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
    tcp_options {
      max = "6443"
      min = "6443"
    }
  }
  ingress_security_rules {
    description = "Kubernetes worker to control plane communication"
    protocol    = "6"
    source      = var.sdcorpNodePoolSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
    tcp_options {
      max = "12250"
      min = "12250"
    }
  }
  ingress_security_rules {
    description = "Path discovery"
    icmp_options {
      code = "4"
      type = "3"
    }
    protocol    = "1"
    source      = var.sdcorpNodePoolSubnet-CIDR
    source_type = "CIDR_BLOCK"
    stateless   = "false"
  }
  vcn_id = oci_core_vcn.sdcorpVCN.id
}

resource "oci_core_subnet" "sdcorpClusterLB1Subnet" {
  cidr_block          = var.sdcorpClusterLB1Subnet-CIDR
  compartment_id      = oci_identity_compartment.sdcorpCompartment.id
  vcn_id              = oci_core_vcn.sdcorpVCN.id
  display_name        = "sdcorpClusterLB1Subnet"

  dhcp_options_id = oci_core_vcn.sdcorpVCN.default_dhcp_options_id
  prohibit_internet_ingress  = "false"
  prohibit_public_ip_on_vnic = "false"

  availability_domain = lookup(data.oci_identity_availability_domains.ADs.availability_domains[0], "name")
  security_list_ids = [
    oci_core_vcn.sdcorpVCN.default_security_list_id, 
  ]
  route_table_id    = oci_core_route_table.sdcorpRouteTableViaIGW.id
}

resource "oci_core_subnet" "sdcorpClusterLB2Subnet" {
  cidr_block          = var.sdcorpClusterLB2Subnet-CIDR
  compartment_id      = oci_identity_compartment.sdcorpCompartment.id
  vcn_id              = oci_core_vcn.sdcorpVCN.id
  display_name        = "sdcorpClusterLB2Subnet"

  dhcp_options_id = oci_core_vcn.sdcorpVCN.default_dhcp_options_id
  prohibit_internet_ingress  = "false"
  prohibit_public_ip_on_vnic = "false"

  availability_domain = lookup(data.oci_identity_availability_domains.ADs.availability_domains[1], "name")
  security_list_ids = [
    oci_core_vcn.sdcorpVCN.default_security_list_id, 
  ]
  route_table_id    = oci_core_route_table.sdcorpRouteTableViaIGW.id
}

resource "oci_core_subnet" "sdcorpNodePoolSubnet" {
  cidr_block          = var.sdcorpNodePoolSubnet-CIDR
  compartment_id      = oci_identity_compartment.sdcorpCompartment.id
  vcn_id              = oci_core_vcn.sdcorpVCN.id
  display_name        = "sdcorpNodePoolSubnet"

  dhcp_options_id = oci_core_vcn.sdcorpVCN.default_dhcp_options_id
  prohibit_internet_ingress  = "false"
  prohibit_public_ip_on_vnic = "false"

  security_list_ids = [
    oci_core_security_list.sdcorpNodePoolSecurityList.id
  ]
  route_table_id    = oci_core_route_table.sdcorpRouteTableViaIGW.id
}

resource "oci_core_subnet" "sdcorpEndpointSubnet" {
  cidr_block          = var.sdcorpEndpointSubnet-CIDR
  compartment_id      = oci_identity_compartment.sdcorpCompartment.id
  vcn_id              = oci_core_vcn.sdcorpVCN.id
  display_name        = "sdcorpEndpointSubnet"

  dhcp_options_id = oci_core_vcn.sdcorpVCN.default_dhcp_options_id
  prohibit_internet_ingress  = "false"
  prohibit_public_ip_on_vnic = "false"

  security_list_ids = [
    oci_core_security_list.sdcorpEndpointSecurityList.id
  ]
  route_table_id    = oci_core_route_table.sdcorpRouteTableViaIGW.id
}
