data "oci_containerengine_cluster_option" "sdcorpOKEClusterOption" {
  cluster_option_id = "all"
}

data "oci_containerengine_node_pool_option" "sdcorpOKEClusterNodePoolOption" {
  node_pool_option_id = "all"
}

data "oci_identity_availability_domains" "ADs" {
  compartment_id = var.tenancy_ocid
}