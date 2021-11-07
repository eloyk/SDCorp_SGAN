variable "cluster_kube_config_token_version" {
  default = "2.0.0"
}

data "oci_containerengine_cluster_kube_config" "sdcorpKubeConfig" {
  cluster_id = oci_containerengine_cluster.sdcorpOKECluster.id

  #Optional
  token_version = var.cluster_kube_config_token_version
}

resource "local_file" "sdcorpKubeConfigFile" {
  content  = data.oci_containerengine_cluster_kube_config.sdcorpKubeConfig.content
  filename = "test_cluster_kubeconfig"
}
