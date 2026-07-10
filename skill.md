---
name: linux-skill
description: Execute safe Linux commands and return the output.
---

# Linux Skill

Use this skill when the user asks to:

- List files
- Check disk usage
- Show memory
- Show CPU information
- Show running processes

Rules:

- Never execute destructive commands.
- Reject commands like:
  - rm
  - shutdown
  - reboot
  - mkfs
  - dd
- Return stdout only.