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
| **Summary** | Only for a crash Dashcam caught: what failed, such as `"node app.js" exited with code 1` |
| **Environment** | OS, VS Code version, Node, workspace, git branch and commit, whether you have uncommitted changes, and any tool versions you listed in `dashcam.extraTools` |
| **Steps to Reproduce** | The numbered story: saved files, terminal commands with their exit code and output, debug sessions and new errors, each with the time it happened, like the stamp on footage, and `file:line` where there is one |
| **Errors and Output** | What debug sessions printed to stdout and stderr |

A complete one: [examples/sample-report.md](../../examples/sample-report.md).

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
