# Security

## Reporting a problem

If you think you have found a security problem in Dashcam (for example, a way a crafted workspace setting, terminal output or file name could make Dashcam run something it should not, or write a file outside your project), please **do not open a public issue**.

Use one of these instead:

1. **GitHub private vulnerability reporting:** on this repository choose **Security → Report a vulnerability**.
2. Or email **escuetajohn21@gmail.com** with "Dashcam security" in the subject.

Please include the Dashcam and VS Code versions, what you did, and what happened. Do not include private data or real secrets.

You will get a reply, and a fix will be released as soon as it is practical. Dashcam is maintained by one person, so please be patient.

## What is in scope

- The Dashcam extension you install.
- What it reads (terminal output, debug output, saved-file names, Problems panel messages) and what it writes (report files in your project).
- Secrets that should have been redacted from a report and were not. Redaction is pattern matching, so this is expected to happen sometimes; a report of a *kind* of secret it misses is welcome as a normal issue, with a fake example.

## What to know about how Dashcam is built

- Dashcam contains no code that connects to the internet.
- It runs two kinds of programs on your computer: `git` (to read the branch, commit and whether you have uncommitted changes) and any commands you list in `dashcam.extraTools` to print tool versions. The second is ignored in an untrusted workspace.
- Reports are written to the folder you choose with `dashcam.outputFolder`, relative to your project root, and nowhere else.
- A recording in progress is kept in VS Code's workspace storage on your computer until you save or discard it.

## Supported versions

Only the latest release is supported.
