# FAQ and troubleshooting

## Is it free?

Yes. Dashcam is freeware: free to use, not open source. See [LICENSE.txt](../LICENSE.txt).

## Does it send my data anywhere?

No. It makes no network connections. See [privacy](privacy.md).

## Why are my terminal commands not showing up?

Terminal capture needs **VS Code 1.93 or newer** and a terminal with **shell integration**. PowerShell, bash and zsh in the VS Code integrated terminal normally have it. Check:

1. **Help → About** shows 1.93 or newer.
2. Run commands in the **VS Code integrated terminal**, not an external window.
3. A recording is **on**, and `dashcam.autoCapture` is not `false`.
4. Shell integration is on: setting `terminal.integrated.shellIntegration.enabled`.

If it still does not work, add the command by hand with **Dashcam: Add Terminal Command**.

## Why did a command I ran earlier not appear?

Dashcam only records while a recording is on. With `dashcam.autoStart` on, that is from the moment the folder opened. Without it, press **Start Recording** first.

## Can it record what I click or type inside my app?

No. VS Code cannot see inside a running app. Describe that part with **Add Step** and **Add Input**.

## The recording has too much in it

Automatic entries older than 30 minutes drop off. Make the window shorter with `dashcam.bufferMinutes`, delete entries in the Recording list, or set `dashcam.autoCapture` to `false` for manual-only.

## The popup appears for a command that is supposed to fail

It is offered at most once a minute and never saves a file by itself, so you can click **Dismiss**. To stop it, set `dashcam.detectCrashes` to `false`.

## Did it hide all my secrets?

Not necessarily. Redaction is pattern matching. Read the report before sharing it. If you find a kind of secret it misses, [open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose) with a **fake** example.

## The Environment section has no git lines

`git` is not on your PATH, or the folder is not a git repository. The other lines still appear.

## Where is my report?

In `bug-reports/` in your project, unless you changed `dashcam.outputFolder`.

## I reloaded the window. Is my recording gone?

No. A recording in progress survives a reload. It is cleared when you save or discard it.

## Does it work in other editors?

No. Dashcam is a Visual Studio Code extension. It has not been tested in other editors built on VS Code.

## Still stuck?

[Open an issue](https://github.com/stanfelixskz/dashcam/issues/new/choose) with your VS Code version, your operating system, and what you did. Do not paste real secrets.
