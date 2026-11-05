# Install

## What you need

- **Visual Studio Code**, version 1.80 or newer. For automatic terminal capture, **1.93 or newer**.
- A folder open in VS Code. Dashcam saves reports inside your project.
- `git` on your PATH, if you want the branch and commit in the Environment section. Without it, those lines are simply left out.

Dashcam needs no account, no sign-in and no internet connection.

## Install it

Dashcam is on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stanfelixskz.dashcam). It is a pre-release (0.3.0).

1. In VS Code open the **Extensions** view (Ctrl+Shift+X).
2. Search for **Dashcam** and choose the one published by **Felix** (`stanfelixskz.dashcam`).
3. Click **Install**.

You can also open the Marketplace page above and click **Install**, or run this in a terminal:

```
code --install-extension stanfelixskz.dashcam
```

## Check that it works

1. A **video-camera icon** appears in the left activity bar. Click it.
2. Press Ctrl+Shift+P and type **Dashcam**. You should see **Dashcam: Start Recording** and the other commands.

If either is missing, see the [FAQ](faq.md).

## Update and uninstall

- **Update:** VS Code updates extensions by itself. You can also open the Extensions view and click **Update** next to Dashcam.
- **Uninstall:** Extensions view, find **Dashcam**, choose **Uninstall**. Reports you saved stay in your projects' `bug-reports/` folders; delete them yourself if you want them gone.

## Next

[Record your first bug](tutorials/01-record-your-first-bug.md)
