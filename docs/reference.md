# Reference

## Commands

Open the command palette with Ctrl+Shift+P and type **Dashcam**.

| Command | What it does |
|---|---|
| **Start Recording** | Starts a recording and asks for a title. If an automatic recording is already running, it just asks for the title and keeps what is recorded. |
| **Add Step** | Adds a step you describe. The current file, line, and any selected code are attached. |
| **Add Terminal Command** | Adds a command you type, for terminals Dashcam cannot watch. |
| **Add Input** | Adds the data that triggered the bug: typed, from your selection, or from the clipboard. |
| **Add Error / Output** | Adds an error or output block: typed, from your selection, or from the clipboard. |
| **Set Expected vs Actual** | Two prompts: what should have happened, and what happened instead. |
| **Finish and Save Report** | Writes the Markdown report and clears the recording. |
| **Discard Recording** | Throws the recording away, after confirming. |

In the **Recording** list, hover over an entry for **edit**, **move up**, **move down** and **delete**. Click an entry that has a file to open it at that line.

## Settings

| Setting | Default | What it does |
|---|---|---|
| `dashcam.autoStart` | `false` | Start recording when a folder opens, and again after each saved report. You name the bug when you save. |
| `dashcam.autoCapture` | `true` | While recording, add terminal commands, debug sessions, saved files and new Problems errors automatically. |
| `dashcam.bufferMinutes` | `30` | Drop automatic entries older than this many minutes. `0` keeps everything. Entries you added yourself are always kept. |
| `dashcam.detectCrashes` | `true` | Offer to save a report when a command exits with an error or a debug session crashes. |
| `dashcam.redactSecrets` | `true` | Replace likely secrets with `[REDACTED]` in saved reports. |
| `dashcam.outputFolder` | `bug-reports` | Where reports are saved, relative to the workspace root. |
| `dashcam.extraTools` | `[]` | Commands whose first output line is added to the Environment section, for example `["python --version"]`. Ignored in an untrusted workspace. |

## What is captured automatically

Only while a recording is on and `dashcam.autoCapture` is on.

| Source | What is recorded | Notes |
|---|---|---|
| Terminal | The command line, its output (last ~6,000 characters, colour codes removed) and its exit code | Needs VS Code 1.93+ and shell integration |
| Saved files | The file name, relative to the workspace | Repeated saves of the same file are merged. `.git`, `node_modules` and your reports folder are ignored. File **contents** are not recorded |
| Debug sessions | That a session started, and what it printed to stdout and stderr (last ~6,000 characters) | |
| Problems panel | New **errors**: the message (first line), file and line | Errors already present when the window opened are not reported |

At most 200 automatic entries are kept per recording.

## What counts as a crash

A popup offers to save when:

- a terminal command exits with a non-zero code other than 130 (Ctrl+C), or
- a debug session exits with a non-zero code, or stops on an exception.

At most one popup a minute.

## What redaction replaces

Private key blocks; JWTs; AWS access key IDs; GitHub tokens; Slack tokens; keys that start `sk-`; `Bearer …` values; passwords inside URLs (`scheme://user:password@host`); and the value after a name containing `password`, `passwd`, `pwd`, `secret`, `token`, `api key`, `access key`, `auth` or `authorization`, when followed by `=` or `:`.

It is pattern matching. It will not catch a secret that has no tell-tale name or shape.

## Where things are stored

- **Reports:** your project, in `dashcam.outputFolder`.
- **A recording in progress:** VS Code's workspace storage on your computer, so it survives a window reload. It is cleared when you save or discard.
- Nothing else. Dashcam does not send anything anywhere.
