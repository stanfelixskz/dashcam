# FAQ and troubleshooting

## Is it free?

Yes. Dashcam is freeware: free to use, not open source. See [LICENSE.txt](../LICENSE.txt).

## Does it send my data anywhere?

No. It makes no network connections. See [privacy](privacy.md).

## How do I know whether it is recording?

If it is, the sidebar shows a red **REC** line with a running clock, and the status bar shows the same clock with a red dot. If the status bar shows an empty circle and just "Dashcam", or the sidebar says Dashcam is off, it is off.

There is one record button, at the top of the sidebar beside the settings gear. It **starts** a recording when Dashcam is off and **stops** it when it is on. The status bar item only shows the state.

## How do I stop it?

Click the record button (now a stop button). It asks whether to save the recording as a report. **Cancel** keeps it recording.

## Why did it stop by itself?

Dashcam caught a crash: a terminal command exited with an error, or a debug session crashed. A car dashcam locks the clip when it senses a crash, and Dashcam does the same: it stops and saves the report, then tells you. The report is in **Saved Recordings**. Click the record button to turn it on again.

## It stops every time a test fails, and I do not want that

A command that is supposed to fail, such as a test run, also counts. Set `"dashcam.detectCrashes": false`. Dashcam then keeps recording, and you stop and save by hand.

## Where are my saved recordings?

In the **Saved Recordings** list in the Dashcam sidebar, and on disk in `bug-reports/` in your project (`dashcam-<date>-<time>.md`), unless you changed `dashcam.outputFolder`.

## Can I name a recording?

Recordings are titled with the date and time they started, so there is nothing to type. The report is a Markdown file, so you can rename the file or add your own notes.

## Why are my terminal commands not showing up?

Terminal capture needs **VS Code 1.93 or newer** and a terminal with **shell integration**. PowerShell, bash and zsh in the VS Code integrated terminal normally have it. Check:

1. **Help → About** shows 1.93 or newer.
2. Run commands in the **VS Code integrated terminal**, not an external window.
3. A recording is **on**.
4. Shell integration is on: setting `terminal.integrated.shellIntegration.enabled`.

If it still does not work, Dashcam cannot see those commands. Debug sessions, saved files and Problems panel errors are still recorded, and you can write the commands into the saved report yourself.

## Why did a command I ran earlier not appear?

Dashcam only records while a recording is on. With `dashcam.autoStart` on, that is from the moment the folder opened. Without it, click the record button first.

## Can it record what I click or type inside my app?

No. VS Code cannot see inside a running app. The saved report is a Markdown file, so open it and add notes about what you clicked or typed.

## The recording has too much in it

Entries older than 30 minutes drop off. Make the window shorter with `dashcam.bufferMinutes`, or delete entries in the Recording list before you stop.

## Does the report include my code?

A few lines of it. Since 0.2.0, a report includes **Code near the error**: the lines around each `file:line` the report points at (from a stack trace or a Problems panel error), with the line the error points at marked `>`. Since 0.3.0 it also includes the `git diff` of your uncommitted changes (capped at `dashcam.diffMaxLines`, 150 lines by default). It never includes the whole project, and never files such as `.env` or `*.pem`. To leave code out, set `dashcam.codeContextLines` and `dashcam.diffMaxLines` to `0`. For the limits, see the [reference](reference.md).

## Does it show what changed since my code last worked?

Since 0.4.0, yes, for the command that failed. The report has a **What changed since it last worked** section that compares the last time the same command passed with the failing run: the git branch or commit, manifest, lockfile and config files that differ, files you saved, and changes made outside the editor (a `git checkout`, an `npm install`) with times. It only lists what Dashcam saw, and does not say any of it caused the failure. It sees outside changes only for git and for those watched files in the project's top folder, so something not listed may still have changed. It needs an earlier passing run of the same command in the same recording.

## Can I paste a report into an AI assistant?

Yes, that is a good use for it: it is a lot smaller than pasting your project, and it shows the error, what you changed and the code around the error. Read it first, because redaction is pattern matching, and remember that pasting sends the text to that service.

## Did it hide all my secrets?

Not necessarily. Redaction is pattern matching. Read the report before sharing it. If you find a kind of secret it misses, [open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose) with a **fake** example.

## The Environment section has no git lines

`git` is not on your PATH, or the folder is not a git repository. The other lines still appear, and the **Changes** section is left out.

## What happens if I close VS Code while it is recording?

Nothing is lost. The recording is kept and carries on the next time you open the folder, so the clock will show a long time. Dashcam cannot ask you anything while VS Code is closing, so click the record button (stop) first if you want to be asked about saving.

## Does it work in other editors?

No. Dashcam is a Visual Studio Code extension. It has not been tested in other editors built on VS Code.

## Still stuck?

[Open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose) with your VS Code version, your operating system, and what you did. Do not paste real secrets.
