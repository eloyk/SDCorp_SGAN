resource "github_actions_secret" "cluster_secret_app" {
  repository       = "SDCorp_SGAN"
  secret_name      = "CLUSTER_ACCESS"
  plaintext_value  = oci_containerengine_cluster.sdcorpOKECluster.id
}
