# 2026-11-05 14:08:05

_Recording started 2026-11-05 14:08:05, saved 2026-11-05 14:08:49 (UTC+08:00), with Dashcam_

## Summary

Caught automatically: "node app.js" exited with code 1.

## Environment

| | |
| --- | --- |
| OS | Windows_NT 10.0.22631 (x64) |
| VS Code | 1.95.0 |
| Node (extension host) | v20.18.0 |
| Workspace | demo-app |
| Git branch | main |
| Git commit | 3f2a9c1 |
| Uncommitted changes | yes |
| node --version | v22.11.0 |

## Changes

Files with uncommitted changes when this was saved:

- modified `app.js`
- untracked `notes.txt`

## Steps to Reproduce

1. **14:08:31** Saved app.js
   - Location: `app.js:1`
2. **14:08:40** Run in a terminal:
   ```sh
   node app.js
   ```
   - Exit code: `1`
   - Output:
     ```
     app.js:10
       if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
                                ^

     Error: Average of []: is NaN
         at show (app.js:10:34)
         at Object.<anonymous> (app.js:15:1)
     Node.js v22.11.0
     ```
   - Mentioned in the output: `app.js:10`, `app.js:15`

## Code near the error

The lines of code around the places named in this report. `>` marks the line an error points at.

**app.js** (lines 5-15)

```
   5 |   const total = numbers.reduce((a, b) => a + b, 0);
   6 |   return total / numbers.length; // BUG: an empty list gives NaN
   7 | }
   8 | 
   9 | function show(label, value) {
> 10 |   if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
  11 |   console.log(label, value);
  12 | }
  13 | 
  14 | show("Average of [2, 4, 6]:", average([2, 4, 6]));
> 15 | show("Average of []:", average([]));
```
