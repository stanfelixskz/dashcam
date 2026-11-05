# 2026-11-05 17:49:08

_Recording started 2026-11-05 17:49:08, saved 2026-11-05 17:50:06 (UTC+08:00), with Dashcam_

## Summary

Caught automatically: "node app.js" exited with code 1.

- **Error:** `Error: Average: is NaN`
- **Where:** `app.js:11`
- **Last time `node app.js` passed:** 17:49:26, 39 seconds before it failed. Files saved in between: `config.json`.
- **Uncommitted changes:** `config.json` (modified), `notes.txt` (untracked)
- **You were in:** `config.json, line 1`

## Environment

| | |
| --- | --- |
| OS | Windows_NT 10.0.19045 (x64) |
| VS Code | 1.144.1 |
| Node (extension host) | v24.22.1 |
| Workspace | dashcam-demo |
| Git branch | main |
| Git commit | 8fbcfa1 |
| Uncommitted changes | yes |

## Project

Detected: Node.js (package.json).

| Tool | Version |
| --- | --- |
| node | v26.13.0 |
| npm | 11.20.0 |

## Changes

Files with uncommitted changes when this was saved:

- modified `config.json`
- untracked `notes.txt`

## Your uncommitted changes

What changed in tracked files since your last commit (`git diff`). Lines starting with `+` were added and `-` removed.

**config.json** (+1 -1)

```diff
@@ -1 +1 @@
-{ "numbers": [2, 4, 6] }
+{ "numbers": [] }
```

## Steps to Reproduce

1. **17:49:26** Run in a terminal:
   ```sh
   node app.js
   ```
   - Exit code: `0`
   - Ran in `.` (powershell) and took 366 ms
   - Output:
     ```
     Average: 4
     ```
2. **17:49:53** Saved config.json
   - Location: `config.json:1`
3. **17:50:05** Run in a terminal:
   ```sh
   node app.js
   ```
   - Exit code: `1`
   - Ran in `.` (powershell) and took 290 ms
   - Output:
     ```
     app.js:11
       if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
                                ^

     Error: Average: is NaN
         at show (app.js:11:34)
         at Object.<anonymous> (app.js:15:1)
         at Module._compile (node:internal/modules/cjs/loader:1968:14)
         at Object..js (node:internal/modules/cjs/loader:2108:10)
         at Module.load (node:internal/modules/cjs/loader:1690:32)
         at Module._load (node:internal/modules/cjs/loader:1480:12)
         at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
         at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
         at node:internal/main/run_main_module:33:47

     Node.js v26.13.0
     ```
   - Mentioned in the output: `app.js:11`, `app.js:15`

## Code near the error

The lines of code around the places named in this report. `>` marks the line an error points at, and `*` a line you changed since your last commit.

**app.js** (lines 6-16)

```
    6 |   const total = list.reduce((a, b) => a + b, 0);
    7 |   return total / list.length; // BUG: an empty list gives NaN
    8 | }
    9 | 
   10 | function show(label, value) {
>  11 |   if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
   12 |   console.log(label, value);
   13 | }
   14 | 
>  15 | show("Average:", average(numbers));
   16 |
```
