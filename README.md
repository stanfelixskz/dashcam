# Dashcam

**A dashcam for your code.** A car dashcam records the road while you drive, and when there is a crash you keep the footage. Dashcam does the same while you work in VS Code: it records what happens, and when something breaks it saves the footage as a shareable Markdown bug report.

> **Status: pre-release (0.1.0).** Dashcam is free. It is not on the VS Code Marketplace yet, so see the [install guide](docs/install.md). This repository holds the documentation, tutorials, examples and issue tracker. The extension's source code is not published here.

## How it works, as a dashcam

| A car dashcam | Dashcam in VS Code |
|---|---|
| Has a record button | One **record button**, at the top of the sidebar beside the settings gear. It starts a recording when it is off and stops it when it is on. The status bar shows whether Dashcam is recording. |
| Switches on with the car | Switches on when you open a folder, if you tick `dashcam.autoStart`. |
| Stamps the date and time on the footage | The sidebar shows the date and time and a running `REC` clock. Every recording is titled with its start date and time, and every entry has the time it happened. |
| Records the road ahead | Records what happens in VS Code: terminal commands with their output and exit code, files you save, debug sessions and what they print, new errors in the Problems panel. You type nothing. |
| Loops: keeps the last few minutes and records over the old footage | Keeps a rolling window, 30 minutes by default (`dashcam.bufferMinutes`). |
| Locks the clip when it senses a crash | When a command fails or a debug session crashes, Dashcam **turns itself off and saves the report by itself**, then tells you. Turn it on again when you want. |
| You review the clips afterwards | The **Saved Recordings** list. Each saved recording is a **Markdown report** you can open, paste into a GitHub issue, or send to a teammate. |
| Cannot see inside the other car | Cannot see inside your running app (clicks, what someone types into it). The saved report is a Markdown file, so you can add notes about that part yourself. |

## What is in a report

```markdown
# 2026-11-05 14:08:05

_Recording started 2026-11-05 14:08:05, saved 2026-11-05 14:21:40 (UTC+08:00), with Dashcam_

## Summary                Caught automatically: "node app.js" exited with code 1.
## Environment            OS, VS Code, Node, git branch and commit,
                          uncommitted changes, and any tool versions you list
## Steps to Reproduce     1. 14:08:31 Saved app.js
                          2. 14:08:40 Run in a terminal: node app.js   (exit code 1, with its output)
## Errors and Output      what debug sessions printed
```

See a full one in [examples/sample-report.md](examples/sample-report.md).

## What you can do

- **Record automatically.** Terminal commands (with output and exit code), saved files, debug sessions and their output, and new Problems panel errors.
- **Catch crashes.** A failing command or a crashed debug session stops the recording and saves the report, with a message and an **Open Report** button.
- **Stop and decide.** Click the record button again and Dashcam asks whether to save the recording as a report.
- **Browse your recordings.** A **Saved Recordings** list in the sidebar, newest first. Crashes caught automatically have a warning icon and show what failed.
- **Time-stamped, like footage.** The sidebar shows the current date and time and a running clock, and every entry in the report has the time it happened.
- **Edit the recording.** Edit, reorder or delete any entry, and click one to jump to its file.
- **Keep secrets out.** Anything that looks like a password, token, API key, bearer header, JWT, private key or URL credential is replaced with `[REDACTED]`.
- **Stay private.** Dashcam makes no network connections. Nothing leaves your computer. See [privacy](docs/privacy.md).

## Learn it in ten minutes

1. [Record your first bug](docs/tutorials/01-record-your-first-bug.md)
2. [Let it record by itself](docs/tutorials/02-let-it-record-by-itself.md)
3. [Find and share your recordings](docs/tutorials/03-save-and-share-the-report.md)

Also: [install](docs/install.md) · [reference: commands and settings](docs/reference.md) · [FAQ](docs/faq.md) · [privacy](docs/privacy.md) · [changelog](CHANGELOG.md)

## Limits, stated plainly

- It sees VS Code, not your app. Clicks and typing inside a running app are not recorded.
- Terminal capture needs **VS Code 1.93 or newer** and a terminal with shell integration (PowerShell, bash, zsh and similar). Where it is not available, terminal commands are not recorded.
- A command that is supposed to fail, such as a test run, also counts as a crash and ends the recording. You can switch crash catching off with `dashcam.detectCrashes`.
- Secret redaction is pattern matching. It can miss things. Read a report before you share it.
- Entries older than the rolling window are dropped.

## Help and feedback

- A problem or a missing feature: [open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose).
- A security problem: please do not open a public issue. See [SECURITY.md](SECURITY.md).

## Licence

Dashcam is freeware: free to use, not open source. See [LICENSE.txt](LICENSE.txt).
