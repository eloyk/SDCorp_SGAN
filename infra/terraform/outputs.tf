output "sdcorpOKECluster" {
  value = {
    id                 = oci_containerengine_cluster.sdcorpOKECluster.id
    kubernetes_version = oci_containerengine_cluster.sdcorpOKECluster.kubernetes_version
    name               = oci_containerengine_cluster.sdcorpOKECluster.name
  }
}

output "sdcorpOKENodePool" {
  value = {
    id                 = oci_containerengine_node_pool.sdcorpOKENodePool.id
    kubernetes_version = oci_containerengine_node_pool.sdcorpOKENodePool.kubernetes_version
    name               = oci_containerengine_node_pool.sdcorpOKENodePool.name
    subnet_ids         = oci_containerengine_node_pool.sdcorpOKENodePool.subnet_ids
  }
}

output "sdcorp_Cluster_Kubernetes_Versions" {
  value = [data.oci_containerengine_cluster_option.sdcorpOKEClusterOption.kubernetes_versions]
}

output "sdcorp_Cluster_NodePool_Kubernetes_Version" {
  value = [data.oci_containerengine_node_pool_option.sdcorpOKEClusterNodePoolOption.kubernetes_versions]
}
