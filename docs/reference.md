# Reference

## The record button

One button, like a dashcam's. It is at the top of the Dashcam sidebar, beside the settings gear. It **starts** a recording when Dashcam is off and **stops** it when it is on. It is the only record or stop button.

The status bar item at the bottom left only shows the state. Clicking it opens the sidebar.

| State | Sidebar button | Status bar |
|---|---|---|
| Off | A record icon | An empty circle and "Dashcam" |
| Recording | A stop icon | A red dot, `REC` and a running clock |

## Commands

Open the command palette with Ctrl+Shift+P and type **Dashcam**.

| Command | What it does |
|---|---|
| **Start Recording** | Starts a recording, titled with the date and time. No prompts. |
| **Stop Recording** | Ends the recording. If it has entries, it asks whether to save it as a report. **Cancel** keeps it recording. |
| **Turn Auto Start On or Off** | Flips `dashcam.autoStart`. The same button is in the sidebar. |
| **Open Settings** | Opens the settings page filtered to Dashcam. The gear icon in the sidebar does the same. |
| **Delete Saved Recording** | Deletes a saved report (the trash icon on a row in Saved Recordings), after confirming. |
| **Refresh Saved Recordings** | Reloads the Saved Recordings list. It also updates by itself. |

In the **Recording** list, hover over an entry for **edit**, **move up**, **move down** and **delete**. Click an entry that has a file to open it at that line.

## The two lists in the sidebar

- **Recording:** the one in progress. A red **REC** line with the start time, then the entries, each with its time. The current date and time and a running clock sit above it.
- **Saved Recordings:** every report Dashcam saved in the project, newest first, named by date and time. A crash Dashcam caught has a warning icon and shows what failed. Click one to open it.

## When Dashcam saves

1. **You stop it and choose Save Report.** The recording becomes a report and Dashcam turns off.
2. **It catches a crash.** Dashcam turns itself off and saves the report without asking. See below.

Dashcam never saves anything when you choose **Don't Save**.

## What counts as a crash

- a terminal command exits with a non-zero code other than 130 (Ctrl+C), or
- a debug session exits with a non-zero code, or stops on an exception.

Dashcam waits about a second so the failing command's last output arrives, saves the report with a Summary line such as `Caught automatically: "node app.js" exited with code 1.`, and shows a message with an **Open Report** button. It stays off until you press the record button again.

Turn this off with `dashcam.detectCrashes`.

## What else goes in a saved report

- **Changes.** In a git project, the files with uncommitted changes when the report is saved: modified, added, deleted, renamed or untracked. The folder Dashcam saves reports in is left out. Not shown outside a git project, or when nothing has changed.
- **Mentioned in the output.** Dashcam scans a command's output and debug output for `path/to/file.ext:line` (for example `app.js:6:12` in a stack trace) and lists the ones that point at a real file inside your project. URLs, version numbers, missing files and paths outside the project are ignored. At most five per entry.
- **Code near the error.** For every `file:line` the report points at (the ones above, and errors from the Problems panel), a few lines of that file around it, with line numbers and the line the error points at marked `>`. Locations close together are merged into one block. Limits: at most 6 files and 120 lines per report, files over 512 KB are skipped, and lines are cut at 200 characters. Files named like `.env`, `*.pem`, `*.key`, `*.pfx`, `*.p12`, `id_rsa*`, or containing `secret` or `credential` are never included. The text goes through secret redaction like the rest of the report. Set `dashcam.codeContextLines` to `0` to leave code out. Lines you changed since your last commit are marked `*` in the snippets.
- **At a glance (in the Summary).** After the crash line, up to six bullets: the **error** line from the output (the first `...Error` or `...Exception` line, else the last line); **where** it points, and whether that is a line you changed; **the last time the same command passed**, how long before it failed, and the files saved in between (or that it had no earlier passing run in this recording); your **uncommitted changes**; the **file and line you were in**; and **unsaved edits** in other files that the report cannot see.
- **Your uncommitted changes.** The `git diff` against your last commit for tracked files, with line numbers kept by the hunk headers. Limits: `dashcam.diffMaxLines` lines in total, lines cut at 200 characters, and files named like `.env`, `*.pem` or `*.key` and the reports folder left out. Untracked files are listed under **Changes** but their contents are not included. Not shown when there is no git repository or no commit yet.
- **Project.** What kind of project this is, found from files in the project's root: `package.json` (Node.js), `requirements.txt`, `pyproject.toml` or `Pipfile` (Python), a `.csproj` or `.sln` (.NET), `go.mod` (Go), `pom.xml` or `build.gradle` (Java), `Cargo.toml` (Rust). It lists the tool versions (`node --version`, `npm --version`, `python --version`, `dotnet --version`, `go version`, `java -version`, `rustc --version`) and up to 30 dependencies with their declared versions.
- **How each command ran.** The folder it ran in (relative to the project), the shell, and how long it took. If its output was longer than 6,000 characters, the first 2,000 and the last 4,000 are kept, with a line saying how many characters were left out.
- **Problems panel at the time.** The number of errors and warnings in the Problems panel when the report was saved, and the first eight errors with their `file:line`.

## Settings

| Setting | Default | What it does |
|---|---|---|
| `dashcam.autoStart` | `false` | Start recording when a folder opens. A recording is titled with the date and time it started. |
| `dashcam.bufferMinutes` | `30` | Drop entries older than this many minutes. `0` keeps everything. |
| `dashcam.codeContextLines` | `5` | In a saved report, include this many lines of code either side of each `file:line` the report points at. `0` leaves code out. Maximum `10`. |
| `dashcam.diffMaxLines` | `150` | In a saved report, include what changed in tracked files since your last commit (`git diff`), up to this many diff lines in total, and mark the changed lines in the code snippets. `0` leaves it out. Maximum `500`. |
| `dashcam.includeProjectInfo` | `true` | In a saved report, include the project type, its dependency list and the versions of its tools. The version commands run only in a trusted workspace. |
| `dashcam.detectCrashes` | `true` | When a command exits with an error or a debug session crashes, stop and save the report automatically. |
| `dashcam.redactSecrets` | `true` | Replace likely secrets with `[REDACTED]` in saved reports. |
| `dashcam.outputFolder` | `bug-reports` | Where reports are saved, relative to the workspace root. |
| `dashcam.extraTools` | `[]` | Commands whose first output line is added to the Environment section, for example `["python --version"]`. Ignored in an untrusted workspace. |

## What is captured automatically

Only while a recording is on.

| Source | What is recorded | Notes |
|---|---|---|
| Terminal | The command line, its output (last ~6,000 characters, colour codes removed) and its exit code | Needs VS Code 1.93+ and shell integration |
| Saved files | The file name, relative to the workspace | Repeated saves of the same file are merged. `.git`, `node_modules` and your reports folder are ignored. File **contents** are not recorded |
| Debug sessions | That a session started, and what it printed to stdout and stderr (last ~6,000 characters) | |
| Problems panel | New **errors**: the message (first line), file and line | Errors already present when the window opened are not reported |

At most 200 automatic entries are kept per recording.

## What redaction replaces

Private key blocks; JWTs; AWS access key IDs; GitHub tokens; Slack tokens; keys that start `sk-`; `Bearer …` values; passwords inside URLs (`scheme://user:password@host`); and the value after a name containing `password`, `passwd`, `pwd`, `secret`, `token`, `api key`, `access key`, `auth` or `authorization`, when followed by `=` or `:`.

It is pattern matching. It will not catch a secret that has no tell-tale name or shape.

## Where things are stored

- **Reports:** your project, in `dashcam.outputFolder`, named `dashcam-<date>-<time>.md`.
- **A recording in progress:** VS Code's workspace storage on your computer, so it survives a window reload. It is cleared when you stop it.
- Nothing else. Dashcam does not send anything anywhere.
