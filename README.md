# Obsidian Drafts Plugin

![CI/CD status](https://github.com/hadynz/obsidian-kindle-plugin/actions/workflows/main.yml/badge.svg)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/hadynz/obsidian-kindle-plugin)

Drafts for Obsidian

## Development

### Prerequisites

1. Create a vault that points to the `vault` directory in this repository
1. Ensure a `plugins` folder exist. Either `mkdir -p vault/.obsidian/plugins` or install any community plugin
1. Install Hot Reload plugin by running `npm run install:hot-reload`
1. Symlink this plugin to your vault by running `npm run symlink`
1. Build this plugin by running `npm run build`
1. Enable the Hot Reload and Drafts plugin in Obsidian
