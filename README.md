Cloud Build

Introduction
  GCP training?
  GOAL
    1. Learn about cloud build
    2. Learn a few useful tricks when you use it yourself

Automated workflows declared in code
  CI pipelines
  Automated deployments

  No management of agents and master required
    Runs on worker VMs managed by Google

Difference with other CI tools
  Jenkins
    Jenkins Pipeline Plugin
      Runs on master (node directive offloads works) 

Parallel

Pros/cons
  Pros
    Heavily coupled with GCP
  Cons
    Heavily coupled with GCP

Security
  Build runs with IAM service account


Debugging builds locally