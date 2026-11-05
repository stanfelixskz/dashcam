# 3. Find and share your recordings

A saved recording is a report. It is one Markdown file.

## Where they are

- **In VS Code:** the **Saved Recordings** list in the Dashcam sidebar. Newest first, named by date and time, with the reason shown for crashes Dashcam caught. Click one to open it, or use the trash icon to delete it.
- **On disk:** `bug-reports/dashcam-<date>-<time>.md` inside your project, for example `bug-reports/dashcam-2026-11-05-14-08-05.md`. If that name exists, `-2`, `-3` and so on are added; nothing is overwritten. Change the folder with `dashcam.outputFolder`.

> Reports can contain your terminal output. Consider adding `bug-reports/` to your `.gitignore` so they are not committed by accident.

## What is in a report

| Section | What goes there |
|---|---|
| Title and time stamp | The date and time the recording started, when it was saved, and your time zone (for example `UTC+08:00`), so it makes sense to someone in another country |
| **Summary** | What failed, such as `"node app.js" exited with code 1` (for a crash Dashcam caught), then a few bullets so a reader gets the point at a glance: the **error** line, **where** it points (`app.js:10`, and whether that is a line you changed), **the last time the same command passed** with the files you saved in between, your **uncommitted changes**, which file and line **you were in**, and any **unsaved edits** the report cannot see |
| **Environment** | OS, VS Code version, Node, workspace, git branch and commit, whether you have uncommitted changes, and any tool versions you listed in `dashcam.extraTools` |
| **Project** | The kind of project (Node.js, Python, .NET, Go, Java or Rust), the tool versions (`node`, `npm`, `python`, `dotnet`, `go`, `java`, `rustc`), and the dependency list from `package.json`, `requirements.txt` or a `.csproj`. Most "works on my machine" problems are version problems. |
| **Changes** | In a git project, the files with uncommitted changes when the report was saved, such as `modified app.js` or `untracked notes.txt`. This answers "what did I change right before it broke?" The reports folder is left out. |
| **Your uncommitted changes** | The real diff (`git diff`) of tracked files since your last commit, so a reader sees exactly what changed. Capped in size, and files such as `.env` are left out. `dashcam.diffMaxLines` set to `0` leaves it out. |
| **Steps to Reproduce** | The numbered story: saved files, terminal commands with their exit code and output, debug sessions and new errors, each with the time it happened, like the stamp on footage, and `file:line` where there is one. For a command, the `file:line` locations in your project that its output names, such as stack-trace lines, are listed as "Mentioned in the output". Each command also shows the folder and shell it ran in and how long it took, and for very long output the start and the end are both kept |
| **Code near the error** | A few lines of your code around each `file:line` the report points at, with the line the error points at marked `>` and the lines you changed since your last commit marked `*`. So the report shows the code as well as the error, and whether the error is on a line you just edited. Secret-looking files such as `.env` are never included, and `dashcam.codeContextLines` set to `0` leaves code out. |
| **Problems panel at the time** | How many errors and warnings the Problems panel had when the report was saved, and the first few errors with their `file:line` |
| **Errors and Output** | What debug sessions printed to stdout and stderr |

A complete one: [examples/sample-report.md](../../examples/sample-report.md).

Here is the top of a real one, saved after the demo app failed (see [tutorial 1](01-record-your-first-bug.md)). The Summary tells the story in five lines: the error, where it points, that the same command passed 39 seconds earlier, which file was saved in between, and what is uncommitted.

> ## Summary
>
> Caught automatically: "node app.js" exited with code 1.
>
> - **Error:** `Error: Average: is NaN`
> - **Where:** `app.js:11`
> - **Last time `node app.js` passed:** 17:49:26, 39 seconds before it failed. Files saved in between: `config.json`.
> - **Uncommitted changes:** `config.json` (modified), `notes.txt` (untracked)
> - **You were in:** `config.json, line 1`

Lower down, **Your uncommitted changes** shows the edit itself (`-{ "numbers": [2, 4, 6] }` and `+{ "numbers": [] }`), and **Code near the error** shows the `average()` function with its `// BUG` comment, so the cause is in the report.

Want to add your own words, such as what you expected? It is a Markdown file. Open it and type under the heading.

## Check it before you share it

Dashcam replaces anything that looks like a password, token, API key, bearer header, JWT, private key or URL credential with `[REDACTED]`, and tells you how many it replaced. **This is pattern matching, so it can miss things.** Read the report once, top to bottom, before you send it. See [privacy](../privacy.md).

## Share it

- **Copy Markdown** appears in the message after you save by hand. Click it, and paste into a GitHub or GitLab issue, a Slack message or an email. The headings, code blocks and the environment table render as they are.
- Or open the report from the Saved Recordings list and copy it from the editor, or send the `.md` file itself. Any text editor opens it.

## Extra environment lines

To add the versions of other tools to every report, list the commands. Each prints a version on its first line:

```json
{ "dashcam.extraTools": ["python --version", "dotnet --version", "npm --version"] }
```

These run only in a trusted workspace, and only when a report is saved.

## Turning redaction off

Set `"dashcam.redactSecrets": false` if the report is only for yourself and you need the real values. It is on by default.
