provider "aws" {
  region     = "us-west-2"  # Change to your desired region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}