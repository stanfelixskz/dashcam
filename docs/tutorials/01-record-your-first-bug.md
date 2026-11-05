# 1. Record your first bug

About five minutes. You will switch the dashcam on, make something go wrong, and find the saved recording.

You can use any project. If you want a bug on purpose, copy [examples/demo-app/app.js](../../examples/demo-app/app.js) into a folder and open that folder in VS Code. It averages a list of numbers and returns `NaN` for an empty list.

## 1. Switch it on

Open the Dashcam sidebar (the video-camera icon in the left bar) and click the **record button** at the top, beside the settings gear. It is the only record button.

That is all. There is no name to type. The recording is titled with the date and time it started, like the stamp on dashcam footage.

The button turns into a stop icon, and at the top of the list you see the current date and time with a running `REC 00:00:00` clock, and a red **REC** line with the date and time the recording started. The status bar at the bottom shows the same clock with a red dot, so you can tell it is recording even with the sidebar closed. That is the red light: the dashcam is rolling.

## 2. Make the bug happen

Do what you would normally do. Save a file. Run the program in the VS Code terminal, for example `node app.js`.

You do not have to tell Dashcam anything. Entries appear in the list by themselves and are tagged **auto**, each with the time it happened:

```
1. Saved app.js          14:08:31 · auto · app.js:1
2. node app.js           14:08:40 · auto · exit 1
```

A command that fails shows its exit code, and the output it printed is attached to it.

> If you see no terminal commands, your terminal may not support shell integration, or VS Code is older than 1.93. See the [FAQ](../faq.md).

## 3. When it catches the bug

If a terminal command **fails** (exits with an error), or a debug session **crashes**, Dashcam does three things by itself:

1. It **stops** recording.
2. It **saves the report**.
3. It shows a message: "Dashcam caught a crash and stopped: `node app.js` exited with code 1. Report saved to bug-reports/…" with an **Open Report** button.

A car dashcam does the same: when it senses a crash, it locks the clip. The recording appears in the **Saved Recordings** list (with a warning icon), and the dashcam stays off until you turn it on again.

## 4. Or stop it yourself

You do not need a crash. When you are done, click the record button again. It is now a stop button, in the same place. Dashcam asks:

> Stop recording? It has 3 entries. Save it as a report?  **[Save Report]**  **[Don't Save]**

- **Save Report** saves it and stops.
- **Don't Save** stops and throws the recording away.
- **Cancel** (or Esc) keeps it recording.

## 5. Find it again

Open the **Saved Recordings** list in the Dashcam sidebar, under the Recording list. Every saved recording is there, newest first, named by its date and time. Each one **is** a report: click it to open the Markdown file, or use the trash icon to delete it. Crashes caught automatically have a warning icon and say what failed.

## 6. Turn it on again

Click the record button. A new recording starts, titled with the new time.

## Tidy and add notes

Dashcam sees VS Code. It does not see inside your running app, such as what you clicked. The saved report is a Markdown file, so open it and write that part under any heading.

Before you stop, you can tidy the recording: in the Recording list, hover over an entry to **edit**, **move** or **delete** it, and click an entry that has a file to jump to that line.

Next: [let it record by itself](02-let-it-record-by-itself.md).
