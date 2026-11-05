# Changelog

All notable changes to Dashcam, newest first.

## 0.2.0 (November 2026)

- **Code near the error.** A saved report now includes a few lines of your code around each `file:line` it points at, from stack traces and Problems panel errors, with the line the error points at marked `>`. One report shows the code as well as the error. It is capped in size, passes through secret redaction, and never includes files such as `.env`, `*.pem` or `*.key`.
- New setting `dashcam.codeContextLines` (default `5`, `0` turns code out of reports, maximum `10`).

## 0.1.0: first pre-release (November 2026)

The first version, published on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stanfelixskz.dashcam).

**Recording**
- One **record button** that works like a dashcam's: it starts a recording when Dashcam is off and stops it when it is on. It is at the top of the Dashcam sidebar, beside the settings gear, and it is the only record or stop button. The status bar item is always visible and only shows the state, so you can see at a glance whether it is recording.
- Recordings are titled with the date and time they started. There are no prompts to name them.
- Tick `dashcam.autoStart` to begin recording when a folder opens.
- Captures automatically while recording: terminal commands with their output and exit code, saved files, debug sessions and what they print, and new errors in the Problems panel. You type nothing.
- Rolling window: entries older than 30 minutes are dropped (`dashcam.bufferMinutes`).
- Stopping asks whether to save the recording as a report. Cancel keeps it recording.
- **Crash catching:** when a terminal command exits with an error or a debug session crashes, Dashcam turns itself off and saves the report automatically, then tells you. Turn it on again when you want (`dashcam.detectCrashes`).

**Sidebar**
- A **Recording** list: the current date and time with a running `REC` clock, a red **REC** line with when the recording started, and each entry with the time it happened. Edit, reorder, delete, and jump to the file for an entry.
- A **Saved Recordings** list: every saved report, newest first, named by date and time. Crashes Dashcam caught have a warning icon and show what failed. Click one to open it, or delete it.
- When off, the Recording list says so and has an **Auto Start** on/off button. A gear icon opens Dashcam's settings.
- A recording in progress survives reloading the window.

**Report**
- One Markdown file named `dashcam-<date>-<time>.md` in `bug-reports/`, with Summary (for caught crashes), Environment, Steps to Reproduce, and Errors and Output.
- The header gives when the recording started and was saved, with your time zone, and each step, input and output shows the time it happened.
- A **Changes** section lists the files with uncommitted changes (git projects only). A command's output is also checked for `file:line` locations in your project, such as stack-trace lines, which are listed as "Mentioned in the output".
- The Environment section is filled in for you: OS, VS Code, Node, workspace, git branch and commit, uncommitted changes, and any tool versions you list in `dashcam.extraTools`.
- Likely passwords, tokens, API keys, bearer headers, JWTs, private keys and URL credentials are replaced with `[REDACTED]` (`dashcam.redactSecrets`).

**Known limits**
- Clicks and typing inside your running app cannot be seen from VS Code.
- Terminal capture needs VS Code 1.93 or newer and a terminal with shell integration.
