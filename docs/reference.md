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
- **What changed since it last worked** (0.4.0). For the last failing command: when the same command last passed, and what Dashcam observed between the end of that run and the start of the failing one. That is the git branch and commit, manifest, lockfile and config files whose content differs, files saved in the editor, and changes made outside the editor with their times. If nothing was seen it says so. It lists observations only and does not say any of them caused the failure. If there was no earlier passing run, it says so. Without a failure, the section appears only if something changed outside the editor.
- **How to reproduce** (0.4.0). Shown when a command failed: the commit and branch, how many tracked files are changed and which new files git does not track yet, the tool versions from the Project section, the command and the folder it ran in, the exit code and error line, and a line on what it does not cover (environment variables, git-ignored files, installed packages that differ from the lockfile). It notes when the diff is incomplete because files were left out or lines were cut.
- **What this report cannot see** (0.3.1). Always the last section. It lists what was dropped (entries removed by the time window or size limit), what could not be collected (a git command that was too slow or too large, output cut short, project state that could not be read), and the standing limits: only this VS Code window is recorded, and outside the editor only the git branch and commit and the watched files are seen.

### Changes outside the editor

While a recording is on, Dashcam notices when the git branch or commit changes (read from the `.git` folder, no git command is run) and when one of these files in the **project's top folder** changes or is created or removed without being saved in the editor: `package.json`, `package-lock.json`, `npm-shrinkwrap.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock`, `requirements.txt`, `requirements-dev.txt`, `Pipfile`, `Pipfile.lock`, `poetry.lock`, `pyproject.toml`, `setup.py`, `setup.cfg`, `go.mod`, `go.sum`, `Cargo.toml`, `Cargo.lock`, `Gemfile`, `Gemfile.lock`, `composer.json`, `composer.lock`, `pom.xml`, `build.gradle`, `global.json`, `nuget.config`, `*.csproj`, `*.fsproj`, `*.sln`, `tsconfig.json`, `jsconfig.json`, bundler and lint configs, `.nvmrc`, `.node-version`, `.python-version`, `.tool-versions`, `.npmrc`, `Dockerfile`, `docker-compose.yml`, `Makefile`, `config.json`, `settings.json`, `appsettings*.json`, and `.env` files. Each appears as a step such as "Changed outside the editor: package-lock.json". Files in subfolders and all other files are not watched. The watching runs only in a trusted workspace, and changes are kept only while a recording is on.

Around every terminal command Dashcam also keeps a small snapshot of the project's state, before and after it: the git commit and branch and a short digest of each watched file. Only digests are kept, never content, and for `.env` files not even a digest (only the size and modified time). The snapshots are used to compare two runs.

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

Changes outside the editor (see above) are recorded too. There is no fixed limit on the number of entries. Entries older than `dashcam.bufferMinutes` are dropped, and if a recording grows past about 2 MB or 2,000 entries the oldest are dropped first. The report states how many were dropped. A command that is still running is never dropped.

## What redaction replaces

Private key blocks; JWTs; AWS access key IDs; GitHub (including `github_pat_`), GitLab, Slack, Stripe, Google (`AIza`), SendGrid and npm tokens; keys that start `sk-`; `Bearer …` values; passwords inside URLs (`scheme://user:password@host`); the credential after `Authorization: Basic` or `Digest` and similar (the scheme word is kept); and the value after a name containing `password`, `passwd`, `pwd`, `secret`, `token`, `api key`, `access key`, `auth` or `authorization`, when followed by `=` or `:`.

Since 0.3.1 it also covers secrets given on a command line: `--password x`, `--token x`, `--api-key x` and similar flags (but not flags such as `--no-password`), `mysql -pVALUE`, `curl -u user:pass`, npm `_authToken` lines and `aws configure set …secret…`. Ordinary text such as `--author=alex` is left alone. The pop-up shown when a crash is caught is redacted too.

It is pattern matching. It will not catch a secret that has no tell-tale name or shape.

## Where things are stored

- **Reports:** your project, in `dashcam.outputFolder`, named `dashcam-<date>-<time>.md`.
- **A recording in progress:** VS Code's workspace storage on your computer, so it survives a window reload. It is cleared when you stop it.
- Nothing else. Dashcam does not send anything anywhere.
