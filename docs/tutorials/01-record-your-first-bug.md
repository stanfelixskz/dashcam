# 1. Record your first bug

About five minutes. You will switch the dashcam on, make something go wrong, and see it in the recording.

You can use any project. If you want a bug on purpose, copy [examples/demo-app/app.js](../../examples/demo-app/app.js) into a folder and open that folder in VS Code. It averages a list of numbers and returns `NaN` for an empty list.

## 1. Switch it on

Press **Ctrl+Shift+P**, type **Dashcam: Start Recording**, press Enter, and give the bug a short title, such as `average() returns NaN for an empty list`.

The video-camera icon in the left bar opens the **Recording** list, and the status bar at the bottom shows `Dashcam: <your title>`. That is the red light: the dashcam is rolling.

## 2. Make the bug happen

Do what you would normally do. Save a file. Run the program in the VS Code terminal, for example `node app.js`.

You do not have to tell Dashcam. Look at the Recording list. Entries appear by themselves and are tagged **auto**:

```
1. Saved app.js                  — auto · app.js:1
2. node app.js                   — auto · exit 1
```

A command that fails shows its exit code. The output it printed is attached to it.

> If you see no terminal commands, your terminal may not support shell integration, or VS Code is older than 1.93. Use **Dashcam: Add Terminal Command** to add one by hand. See the [FAQ](../faq.md).

## 3. Add what Dashcam cannot see

Dashcam sees VS Code. It does not see inside your running app. Add that part yourself:

- **Dashcam: Add Step.** Click on the line where the problem is first, run the command, and describe what you did, for example `Call average with an empty array`. The file and line are attached automatically. If you select some code first, the code is attached too.
- **Dashcam: Add Input.** The data that triggered the bug: type it, use your selection, or paste it from the clipboard.
- **Dashcam: Set Expected vs Actual.** Two prompts: what should have happened, and what happened instead.

## 4. Tidy the recording

In the Recording list, hover over an entry for the buttons: **edit**, **move up**, **move down**, **delete**. Click an entry that has a file to jump to that line. Delete anything that is not part of the story.

## 5. Save the footage

Click the **save** icon at the top of the list, or run **Dashcam: Finish and Save Report**. You are asked for a one-sentence summary. The report is written to `bug-reports/` in your project and opens in the editor.

Next: [let it record by itself](02-let-it-record-by-itself.md).
