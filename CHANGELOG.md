# Changelog

All notable changes to Dashcam, newest first.

## 0.4.0 (November 2026)

Reports now answer "what changed since it last worked?", including changes made outside the editor, and say how to reproduce the failure.

- **What changed since it last worked.** A new report section for the failing command. It compares the last time the same command passed with the failing run and lists what Dashcam observed in between: the git branch and commit, manifest, lockfile and config files that differ, files you saved in the editor, and changes made outside the editor with the time each happened. If nothing was observed it says so. It lists observations only and never claims one of them caused the failure.
- **Changes outside the editor are now recorded** while you record: a `git checkout`, `git pull` or new commit, an `npm install` rewriting the lockfile, or an edited config file show up as steps (for example "Git branch changed outside the editor: main to feature"). Watched files are the manifests, lockfiles and config files in the project's top folder (`package.json`, `package-lock.json`, `yarn.lock`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `*.csproj`, `tsconfig.json`, `Dockerfile` and similar) plus `.env` files. For `.env` files Dashcam keeps only that the file changed, never its content. Other files changed outside the editor are not seen, and the report says so.
- **How to reproduce.** A new report section for the failing command: the commit and branch, the uncommitted state (changed files, and new files git does not track yet), the tool versions, the command and the folder it ran in, what happened, and what the recipe does not cover. It flags when the diff in the report is incomplete.
- Each command now gets a small snapshot of the project's state before and after it (git commit and branch, and a short digest of each watched file). Only digests are kept, and the snapshot is taken alongside the command so it never delays output. If a snapshot fails, the report says so.
- Folder watching runs only in a trusted workspace.

## 0.3.1 (November 2026)

A trust update: fewer secrets slipping through, no silently dropped events, and the report says what it could not see.

- **Better secret redaction.** Passwords and tokens given on the command line are now hidden: `--password x`, `--token x`, `--api-key x`, `mysql -pVALUE`, `curl -u user:pass`, npm and AWS credentials, and more token formats (GitHub, GitLab, Stripe, Google, SendGrid, npm). `Authorization: Basic ...` keeps the word `Basic` and hides the credential. Ordinary flags such as `--author=alex` are no longer hidden by mistake. The "caught a crash" pop-up is redacted too.
- **No silent event cap.** The old limit of 200 recorded events is gone, and it no longer switches off crash catching. Old entries are dropped by the rolling time window, with a size limit as a safety net, and the report tells you when anything was dropped.
- **More stack traces understood.** `file:line` locations are now found in Python (`File "x", line N`), .NET (`in x:line N`), TypeScript and C# compiler errors (`x(12,5)`) and PHP traces, as well as the formats supported before.
- **A new last section: "What this report cannot see".** It lists anything Dashcam could not collect or had to cut (a git command that was too slow or too large, output that was cut, entries dropped), and states that only activity in this VS Code window is recorded.
- **Git problems are no longer silent.** A slow or oversized `git diff` is reported in that section instead of just vanishing, and large diffs are now handled.
- **Faster reports.** The environment, uncommitted changes, project lookup and diff are collected at the same time.
- **Fixed:** a tool that is not installed no longer shows its error message ("'python' is not recognized...") as its version.
- **Fixed:** the Summary no longer loses a closing backtick when it quotes a command containing a secret.
- Paths inside your project are shown relative to it, in any slash style or letter case.

## 0.3.0 (November 2026)

A much more useful report. Everything below is added to the saved Markdown file automatically.

- **At a glance, in the Summary.** The error line, where it points (and whether that is a line you changed since your last commit), **the last time the same command passed** with the files you saved in between, your uncommitted changes, the file and line you were in, and any unsaved edits the report cannot see.
- **Your uncommitted changes.** The real `git diff` of tracked files, capped in size. Lines you changed are marked `*` in the code snippets, so you can see when an error is on a line you just edited. New setting `dashcam.diffMaxLines` (default `150`, `0` leaves it out).
- **Project.** The kind of project, the versions of its tools (`node`, `npm`, `python`, `dotnet`, `go`, `java`, `rustc`) and its dependency list (`package.json`, `requirements.txt`, `.csproj`). New setting `dashcam.includeProjectInfo` (default on). The version commands run only in a trusted workspace.
- **Where and how each command ran:** its folder, the shell, and how long it took.
- **Problems panel at the time:** the error and warning counts and the first few errors.
- **Long output keeps its start as well as its end.** The middle is marked as omitted, so an early error is no longer lost.
- The default for `dashcam.codeContextLines` is now `5`.

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
