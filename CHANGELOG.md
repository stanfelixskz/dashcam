# Changelog

All notable changes to Dashcam, newest first.

## 0.1.0: first pre-release (November 2026)

The first version. It is not on the VS Code Marketplace yet.

**Recording**
- Start with **Dashcam: Start Recording**, or tick `dashcam.autoStart` to begin when a folder opens.
- Captures automatically while recording: terminal commands with their output and exit code, saved files, debug sessions and what they print, and new errors in the Problems panel (`dashcam.autoCapture`).
- Rolling window: automatic entries older than 30 minutes are dropped (`dashcam.bufferMinutes`). Entries you add yourself are kept.
- A popup offers **Save Report** when a terminal command exits with an error or a debug session crashes (`dashcam.detectCrashes`). Nothing is saved until you click.
- Add what VS Code cannot see: steps (with file, line and selected code), terminal commands, inputs, error output, and expected versus actual.

**Sidebar**
- Lists the recording; edit, reorder, delete, and jump to the file for an entry.
- A recording in progress survives reloading the window.

**Report**
- One Markdown file in `bug-reports/` with Summary, Environment, Steps to Reproduce, Inputs, Expected vs Actual, and Errors and Output.
- The Environment section is filled in for you: OS, VS Code, Node, workspace, git branch and commit, uncommitted changes, and any tool versions you list in `dashcam.extraTools`.
- Likely passwords, tokens, API keys, bearer headers, JWTs, private keys and URL credentials are replaced with `[REDACTED]` (`dashcam.redactSecrets`).

**Known limits**
- Clicks and typing inside your running app cannot be seen from VS Code.
- Terminal capture needs VS Code 1.93 or newer and a terminal with shell integration.
