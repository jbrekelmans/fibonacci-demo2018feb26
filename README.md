# Introduction
Simple Fibonacci server that demonstrates GitOps-style CI/CD using Cloud Build and Google Kubernetes Engine.

# Setup
Cloud Build triggers need to be created as follows:
1. `ci/cloudbuild.yaml` should run on commits to `ci/**/*` or `nodejs/**/*` on non-master branches.
2. `ci/cloudbuild-master.yaml` should run on commits to `ci/**/*` or `nodejs/**/*` on the master branch.
3. `cd/cloudbuild.yaml` should run on commits to `cd/**/*` on the master branch.

A GKE cluster named `fibonacci-cluster` should exist in zone `australia-southeast1-a`.
An initial deployment of `cd/ingress.yaml` and `cd/service.yaml` to the namespace `default` should exist.

