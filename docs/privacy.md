# Privacy

The short version: **Dashcam works on your computer and sends nothing anywhere.**

## What Dashcam does with your data

- **It reads what happens in VS Code while a recording is on:** the terminal commands you run in the integrated terminal and their output, what debug sessions print, the names of the files you save, and new errors in the Problems panel. It does **not** record the contents of your files.
- **It keeps a recording in progress in VS Code's workspace storage,** on your computer, so it survives a reload. Stopping the recording clears it.
- **It writes only report files:** a Markdown report in the folder you choose (`bug-reports/` by default), when you stop a recording and choose to save it, or when Dashcam catches a crash and saves the report by itself. If you do not want that, set `dashcam.detectCrashes` to `false`.
- **It does not upload, share or report anything.** Dashcam contains no code that connects to the internet, and no analytics, telemetry or crash reporting. (The source was searched for network code and none was found.)
- **It does not need an account,** and has no licence server or activation.

## The two kinds of programs it runs

- **`git`,** to read the branch, the short commit id and whether there are uncommitted changes, for the Environment section of a report.
- **Commands you list yourself** in `dashcam.extraTools`, to print tool versions. They run only in a trusted workspace, and only when you save a report.

## What a report can contain

A report can contain terminal output, which can contain anything your programs print, including secrets and personal data. Since version 0.2.0 it can also contain a few lines of your own code around the places an error points at (`dashcam.codeContextLines`, 5 lines by default). Since 0.3.0 it can also contain a diff of your uncommitted changes (`dashcam.diffMaxLines`, 150 lines by default) and your project's dependency list and tool versions (`dashcam.includeProjectInfo`). Files such as `.env` and `*.pem` are never included, but code can still contain things you would not want to share. Dashcam tries to replace likely secrets with `[REDACTED]`, but this is pattern matching and **it can miss things**. Before you paste a report into a public issue or send it to someone, read it.

Tips:

- Add `bug-reports/` to your `.gitignore` so reports are not committed by accident.
- Set `"dashcam.codeContextLines": 0` and `"dashcam.diffMaxLines": 0` if you do not want any of your code in reports. Set `"dashcam.includeProjectInfo": false` to leave out the dependency list and tool versions.
- Dashcam also runs short version commands (`node --version` and similar) when it saves a report, only in a trusted workspace.
- Dashcam records only while a recording is on. Keep `dashcam.autoStart` off and press the record button only when you want it.
- Delete any entry you do not want in the Recording list before you stop and save.
- Reports saved automatically after a crash can contain the failing command's output. Delete a saved recording from the Saved Recordings list if you do not want to keep it.

## Other software

Dashcam runs inside Visual Studio Code, which has its own privacy practices and its own telemetry settings. Those are separate from Dashcam.

## Questions

[Open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose), or email escuetajohn21@gmail.com.
