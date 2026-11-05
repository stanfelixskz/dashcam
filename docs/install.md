# Install

## What you need

- **Visual Studio Code**, version 1.80 or newer. For automatic terminal capture, **1.93 or newer**.
- A folder open in VS Code. Dashcam saves reports inside your project.
- `git` on your PATH, if you want the branch and commit in the Environment section. Without it, those lines are simply left out.

Dashcam needs no account, no sign-in and no internet connection.

## Install it

Dashcam is a pre-release and is not on the VS Code Marketplace yet. Until it is, install it from a `.vsix` file:

1. Download `dashcam-0.1.0.vsix` from the [Releases](https://github.com/stanfelixskz/dashcam/releases) page, when one is published there.
2. In VS Code open the **Extensions** view (Ctrl+Shift+X).
3. Choose the **…** menu at the top of the view, then **Install from VSIX…**, and pick the file.
4. Reload the window if VS Code asks.

When it is on the Marketplace, this page will say so and you will be able to search for **Dashcam** in the Extensions view.

## Check that it works

1. A **video-camera icon** appears in the left activity bar. Click it.
2. Press Ctrl+Shift+P and type **Dashcam**. You should see **Dashcam: Start Recording** and the other commands.

If either is missing, see the [FAQ](faq.md).

## Update and uninstall

- **Update:** install the newer `.vsix` the same way.
- **Uninstall:** Extensions view, find **Dashcam**, choose **Uninstall**. Reports you saved stay in your projects' `bug-reports/` folders; delete them yourself if you want them gone.

## Next

[Record your first bug](tutorials/01-record-your-first-bug.md)
