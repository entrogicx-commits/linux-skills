# Linux Skill

A lightweight CLI utility designed for AI agent workflows that safely executes Linux shell commands and returns their output. Built as a pluggable skill module, it provides a secure interface for system-level operations with built-in command blocklisting.

## Features

- Execute any Linux shell command and capture stdout
- Built-in blocklist prevents destructive commands (`rm`, `shutdown`, `reboot`, `mkfs`, `dd`, `sudo`)
- Zero runtime dependencies — uses only Node.js built-ins
- Native TypeScript execution (no compilation step required)

## Prerequisites

- [Node.js](https://nodejs.org/) 22.6+ (for native TypeScript support)

## Installation

```bash
git clone https://github.com/entrogicx-commits/linux-skills.git
cd linux-skills
npm install
```

## Usage

```bash
node src/index.ts <command>
```

### Examples

```bash
# List files in current directory
node src/index.ts ls -la

# Check disk usage
node src/index.ts df -h

# Show memory usage
node src/index.ts free -m

# Show CPU information
node src/index.ts cat /proc/cpuinfo

# Show running processes
node src/index.ts ps aux
```

## Safety

Commands matching any entry in the blocklist are rejected with exit code `1`:

| Blocked Commands |       |       |       |
| ---------------- | ----- | ----- | ----- |
| `rm`             | `dd`  | `mkfs` | `sudo`  |
| `shutdown`       | `reboot` |       |       |

> **Note:** This blocklist uses string matching and is intended as a basic guardrail, not a security boundary.

## Project Structure

```
linux-skill/
├── skill.md           # Skill definition and metadata
├── package.json       # Project manifest
├── src/
│   └── index.ts       # Application entry point
└── README.md
```

## License

ISC
