Cloud Build

Introduction
  GCP training?
  GOAL
    1. Learn about cloud build
    2. Learn a few useful tricks when you use it yourself

Automated workflows as code
  CI
  GitOps style CD
    https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build
  
Benefits
  No management of agents and master required
    Runs on worker VMs managed by Google


Difference with other CI tools
  Jenkins
    Manage master, plugins and agents
    Groovy (Scripted Pipeline) OR Declaritve
    Declarative
    Jenkins Pipeline Plugin
      Runs on master (node directive offloads works) 

Parallel

Pros/cons
  Pros
    Heavily coupled with GCP
  Cons
    Heavily coupled with GCP

Speeding up builds
  Run in parallel
  Set options.machineType to N1_HIGHCPU_32 (30GB, 32 CPUs)

Security
  Build runs with IAM service account

Debugging builds locally