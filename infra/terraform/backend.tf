terraform {
  backend "remote" {
    organization = "SDCorp"

    workspaces {
      name = "sdcorp-infra-oci-oke"
    }
  }
}
