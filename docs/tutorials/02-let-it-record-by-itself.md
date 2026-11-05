# 2. Let it record by itself

A real dashcam comes on with the car. You do not press anything. Dashcam can work the same way.

## Switch on automatically

Open **Settings** (Ctrl+,), search for **Dashcam**, and tick **Auto Start**. Or add this to your settings:

```json
{ "dashcam.autoStart": true }
```

From now on, a recording begins when you open a folder. It has no title yet (the status bar shows `Dashcam: Untitled bug`). You are asked for the title when you save, because you do not know what the bug is called until it happens.

After you save a report, a fresh recording starts. If you discard one, a new one starts when you next open the folder.

## It records the last 30 minutes

A dashcam does not keep every minute of every drive. It loops. Dashcam drops automatic entries older than 30 minutes, so a long day does not bury the bug under hundreds of old steps. Change it with:

```json
{ "dashcam.bufferMinutes": 60 }
```

`0` keeps everything. Entries you added yourself (steps, inputs, expected versus actual) are never dropped.

## It notices the crash

When a terminal command **exits with an error**, or a debug session **crashes or stops on an exception**, a popup appears:

> Possible bug captured: "node app.js" exited with code 1  **[Save Report]**  **[Dismiss]**

- **Save Report** starts saving, with the title pre-filled from the crash. You add a one-line summary.
- **Dismiss** leaves the recording running.

A few things it deliberately does not do:

- It **never saves a file by itself**. Nothing is written until you click.
- It asks **at most once a minute**, so a flaky test run does not bury you in popups.
- It does not treat **Ctrl+C** as a crash. That is you stopping the program.

Turn the popup off with `"dashcam.detectCrashes": false`. The recording continues either way.

## Switch off the automatic part

If you want a manual notepad and nothing more, set `"dashcam.autoCapture": false`. Then only the entries you add yourself are recorded.

Next: [save and share the report](03-save-and-share-the-report.md).
