variable "tenancy_ocid" {}
variable "user_ocid" {}
variable "fingerprint" {}
variable "private_key_path" {}
variable "compartment_ocid" {}
variable "region" {
  default = "us-ashburn-1"
}
variable "ssh_public_key_file" {}
variable "git_access_token" {}

variable "VCN-CIDR" {
  default = "10.0.0.0/16"
}

variable "sdcorpClusterLB1Subnet-CIDR" {
  default = "10.0.1.0/24"
}

variable "sdcorpClusterLB2Subnet-CIDR" {
  default = "10.0.2.0/24"
}

variable "sdcorpNodePoolSubnet-CIDR" {
  default = "10.0.3.0/24"
}

variable "sdcorpEndpointSubnet-CIDR" {
  default = "10.0.4.0/28"
}

variable "kubernetes_version" {
  # default = "v1.14.8"
  # default = "v1.19.7"
  # default = "v1.20.8"
  default = "v1.20.11"
}

variable "node_pool_size" {
  default = 2
}

variable "Shape" {
  # default = "VM.Standard.E4.Flex"
  default = "VM.Standard2.1"
}

variable "ClusterName" {
  default = "sdcorpOKECluster"
}
