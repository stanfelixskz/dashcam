# Examples

- **[demo-app](demo-app):** a tiny program with a deliberate bug. It reads a list from `config.json` and prints the average. With `[2, 4, 6]` it works; with `[]` it gets `NaN` and stops with an error (exit code 1). Open the folder in VS Code and follow [tutorial 1](../docs/tutorials/01-record-your-first-bug.md): run it, change the list to `[]`, and run it again. It needs [Node.js](https://nodejs.org): install it, then run `node app.js` in the VS Code terminal. If you turn the folder into a git repository first, the report also shows what you changed.
- **[sample-report.md](sample-report.md):** the kind of report Dashcam saves. The Environment values and times are examples.
