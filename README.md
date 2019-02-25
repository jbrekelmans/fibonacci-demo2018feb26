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

During demo
  No management of agents and master required
    Runs on worker VMs managed by Google
  YAML is not as easy to program as Jenkinsfile
    No conditional branching
    SemVer requires that you override entrypoints with /bin/sh so that you can cat
  Speeding up builds
    Run in parallel
    Set options.machineType to N1_HIGHCPU_32 (30GB, 32 CPUs)
  Security
    Build runs with IAM service account
    Can use Google KMS to decrypt secrets for later use

Difference with other CI tools
  Manage master, plugins and agents
    Groovy (Scripted Pipeline) OR Declaritve
    Declarative
    Jenkins Pipeline Plugin
      Runs on master (node directive offloads works) 

Conclusion
  Infrastructure side is really easy
  Rich ecosystem (docker)
  Heavily coupled with GCP????
  
Debugging builds locally