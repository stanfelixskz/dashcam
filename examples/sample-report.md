# average() returns NaN for an empty list

_Recorded 2026-11-05 14:08 with Dashcam_

## Summary

Averaging an empty array prints NaN instead of 0.

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

## Steps to Reproduce

1. Saved app.js
   - Location: `app.js:1`
2. Call average with an empty array
   - Location: `app.js:10`
   ```javascript
   console.log("Average of []:", average([]));
   ```
3. Run in a terminal:
   ```sh
   node app.js
   ```
   - Exit code: `1`
   - Output:
     ```
     Average of [2, 4, 6]: 4
     Average of []: NaN
     Error: bad total, api_key=[REDACTED]
     ```
4. Problems panel error: Object is possibly 'undefined'.
   - Location: `app.js:6`

## Inputs

**Argument**

```
[]
```

## Expected vs Actual

- **Expected:** 0, or a clear error
- **Actual:** NaN is printed and the program carries on

## Errors and Output

**Console output**

```
Average of [2, 4, 6]: 4
Average of []: NaN
```
