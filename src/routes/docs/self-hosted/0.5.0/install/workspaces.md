---
section: self-hosted/0.5.0/self-hosted
---

# Workspaces

## Sizing

Gitpod schedules workspaces as Kubernetes pods. Each workspace pod requests a certain amount of memory which directly affects how many workspaces are scheduled on a single node.
If you want to change the default sizing (~ 8GiB per workspace) you should

- `echo values.workspace-sizing.yaml >> configuration.txt`
- adapt the values in `values.workspace-sizing.yaml` to match your installation.
