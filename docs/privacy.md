# Privacy

The short version: **Dashcam works on your computer and sends nothing anywhere.**

## What Dashcam does with your data

- **It reads what happens in VS Code while a recording is on:** the terminal commands you run in the integrated terminal and their output, what debug sessions print, the names of the files you save, and new errors in the Problems panel. It does **not** record the contents of your files.
- **It keeps a recording in progress in VS Code's workspace storage,** on your computer, so it survives a reload. Saving or discarding the recording clears it.
- **It writes only what you ask it to:** a Markdown report in the folder you choose (`bug-reports/` by default).
- **It does not upload, share or report anything.** Dashcam contains no code that connects to the internet, and no analytics, telemetry or crash reporting. (The source was searched for network code and none was found.)
- **It does not need an account,** and has no licence server or activation.

## The two kinds of programs it runs

- **`git`,** to read the branch, the short commit id and whether there are uncommitted changes, for the Environment section of a report.
- **Commands you list yourself** in `dashcam.extraTools`, to print tool versions. They run only in a trusted workspace, and only when you save a report.

## What a report can contain

A report can contain terminal output, which can contain anything your programs print, including secrets and personal data. Dashcam tries to replace likely secrets with `[REDACTED]`, but this is pattern matching and **it can miss things**. Before you paste a report into a public issue or send it to someone, read it.

Tips:

- Add `bug-reports/` to your `.gitignore` so reports are not committed by accident.
- Set `"dashcam.autoCapture": false` if you do not want terminal output recorded at all.
- Delete any entry you do not want in the Recording list before you save.

## Other software

Dashcam runs inside Visual Studio Code, which has its own privacy practices and its own telemetry settings. Those are separate from Dashcam.

## Questions

[Open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose), or email escuetajohn21@gmail.com.
