provider "oci" {
  tenancy_ocid     = var.tenancy_ocid
  user_ocid        = var.user_ocid
  fingerprint      = var.fingerprint
  private_key_path = var.private_key_path
  region           = var.region
}

terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "4.2.0" // or whatever version range you wish
    }
  }
}

provider "github" {
  token        = var.git_access_token 
}
