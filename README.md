# Dashcam

**A dashcam for your code.** A car dashcam records the road while you drive, and when there is a crash you keep the footage. Dashcam does the same while you work in VS Code: it records what happens, and when something breaks you save the footage as a shareable Markdown bug report.

> **Status: pre-release (0.1.0).** Dashcam is free. It is not on the VS Code Marketplace yet, so see the [install guide](docs/install.md). This repository holds the documentation, tutorials, examples and issue tracker. The extension's source code is not published here.

## How it works, as a dashcam

| A car dashcam | Dashcam in VS Code |
|---|---|
| Switches on with the car | Switches on when you open a folder, if you tick `dashcam.autoStart`. Or press **Dashcam: Start Recording**. |
| Records the road ahead | Records what happens in VS Code: terminal commands with their output and exit code, files you save, debug sessions and what they print, new errors in the Problems panel. You type nothing. |
| Loops: keeps the last few minutes and records over the old footage | Keeps a rolling window, 30 minutes by default (`dashcam.bufferMinutes`). |
| Notices a crash | A failing command or a crashed debug session shows **"Possible bug captured"** and asks whether to save. It never saves a file until you click. |
| The clip you keep and hand to someone | A **Markdown report** you can paste into a GitHub issue or send to a teammate. |
| Cannot see inside the other car | Cannot see inside your running app (clicks, what someone types into it). Add those yourself with **Add Step** or **Add Input**. |

## What is in a report

```markdown
# average() returns NaN

## Summary
Averaging an empty list prints NaN instead of 0.

## Environment            OS, VS Code, Node, git branch and commit,
                          uncommitted changes, and any tool versions you list

## Steps to Reproduce     1. Saved app.js
                          2. Run in a terminal: node app.js   (exit code 1, with its output)

## Inputs                 anything you added
## Expected vs Actual
## Errors and Output      stack traces and debug output
```

See a full one in [examples/sample-report.md](examples/sample-report.md).

## What you can do

- **Record automatically.** Terminal commands (with output and exit code), saved files, debug sessions and their output, and new Problems panel errors.
- **Add what VS Code can't see.** Steps (the current file, line and selected code are attached), terminal commands, inputs and error output, typed or taken from your selection or clipboard.
- **Say what you expected.** Set expected versus actual in two prompts.
- **Edit the recording.** A sidebar lists everything; edit, reorder or delete any entry, and click one to jump to its file.
- **Save the footage.** One command writes `bug-reports/<title>-<date>.md` in your project.
- **Keep secrets out.** Anything that looks like a password, token, API key, bearer header, JWT, private key or URL credential is replaced with `[REDACTED]`.
- **Stay private.** Dashcam makes no network connections. Nothing leaves your computer. See [privacy](docs/privacy.md).

## Learn it in ten minutes

1. [Record your first bug](docs/tutorials/01-record-your-first-bug.md)
2. [Let it record by itself](docs/tutorials/02-let-it-record-by-itself.md)
3. [Save and share the report](docs/tutorials/03-save-and-share-the-report.md)

Also: [install](docs/install.md) · [reference: commands and settings](docs/reference.md) · [FAQ](docs/faq.md) · [privacy](docs/privacy.md) · [changelog](CHANGELOG.md)

## Limits, stated plainly

- It sees VS Code, not your app. Clicks and typing inside a running app are not recorded.
- Terminal capture needs **VS Code 1.93 or newer** and a terminal with shell integration (PowerShell, bash, zsh and similar). Where it is not available, use **Add Terminal Command**.
- Secret redaction is pattern matching. It can miss things. Read a report before you share it.
- Automatic entries older than the rolling window are dropped. Entries you add yourself are kept.

## Help and feedback

- A problem or a missing feature: [open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose).
- A security problem: please do not open a public issue. See [SECURITY.md](SECURITY.md).

## Licence

Dashcam is freeware: free to use, not open source. See [LICENSE.txt](LICENSE.txt).
