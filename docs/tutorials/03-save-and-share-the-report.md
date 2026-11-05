# 3. Save and share the report

The report is the footage you keep. It is one Markdown file.

## Where it goes

`bug-reports/<title>-<date>.md` inside your project. If that name exists, `-2`, `-3` and so on are added; nothing is overwritten. Change the folder with `dashcam.outputFolder`.

> Reports can contain your terminal output. Consider adding `bug-reports/` to your `.gitignore` so they are not committed by accident.

## What is in it

| Section | What goes there |
|---|---|
| Title and date | Your title and when the recording started |
| **Summary** | The one sentence you typed |
| **Environment** | OS, VS Code version, Node, workspace, git branch and commit, whether you have uncommitted changes, and any tool versions you listed in `dashcam.extraTools` |
| **Steps to Reproduce** | The numbered story: your steps, saved files, and terminal commands with their exit code and output. Steps with a location show `file:line`, and selected code is included |
| **Inputs** | Anything you added with **Add Input** |
| **Expected vs Actual** | The two prompts |
| **Errors and Output** | Anything you added with **Add Error / Output**, and the output of debug sessions |

A complete one: [examples/sample-report.md](../../examples/sample-report.md).

## Check it before you share it

Dashcam replaces anything that looks like a password, token, API key, bearer header, JWT, private key or URL credential with `[REDACTED]`, and tells you how many it replaced. **This is pattern matching, so it can miss things.** Read the report once, top to bottom, before you send it. See [privacy](../privacy.md).

## Share it

- **Copy Markdown** appears in the "Saved" message. Click it, and paste into a GitHub or GitLab issue, a Slack message or an email. The headings, code blocks and the environment table render as they are.
- Or send the `.md` file itself. Any text editor opens it.

## Extra environment lines

To add the versions of other tools to every report, list the commands. Each prints a version on its first line:

```json
{ "dashcam.extraTools": ["python --version", "dotnet --version", "npm --version"] }
```

These run only in a trusted workspace, and only when you save a report.

## Turning redaction off

Set `"dashcam.redactSecrets": false` if the report is only for yourself and you need the real values. It is on by default.
