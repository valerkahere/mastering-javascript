# Mastering JavaScript

> *"There is no limit for perfection"*

This repository of mine is dedicated to practicing (and preaching) the exercises from the [Eloquent JavaScript](https://eloquentjavascript.net/) book. This plain question below might have immediately struck your mind: 

- "Why would you start reading it whilst completing Scrimba's Front End Career Path which has a whole module dedicated to JS?"

Simply put, Scrimba being the "workhorse" of my learning, at times I felt like I lack concrete maths-style theoretical definitions, **the source of truth**.

While high-quality, techical and succinct [MDN docs](https://developer.mozilla.org/en-US/) do serve the purpose, I was looking for a more beginner-friendly reference, as well as more elaborate — and **I think I found it**.

*Note:*
I included .vs-code in here, so anyone can fork this repo and run it locally with F5 in VS Code **if Node.js is installed on the system**.
- **Use F5 to run the program instead of node app.js (launch.json is configured this way for the chosen program)**

## Dev setup

This repo is just standalone JS practice files — no server, no single entry point. A couple of small tools make it nicer to work in.

### First-time setup
```bash
pnpm install
```
Installs Prettier and Vitest as dev dependencies (nothing runtime). VS Code will also prompt you to install the recommended extensions (`esbenp.prettier-vscode`, `vitest.explorer`) — accept that prompt.

### Running a file
Open the file, press **F5**. `.vscode/launch.json` uses `${file}`, so it always runs whichever tab is focused — no config to edit, no env var to set.

### Formatting
Format-on-save is on by default (`.vscode/settings.json`). To format everything by hand:
```bash
pnpm format
```

### Testing (optional)
Vitest is set up but nothing requires it — use it if a problem's worth a real test. `export` whatever you want to test from its file, then add a sibling `*.test.js`:
```js
// factorial.test.js
import { describe, it, expect } from 'vitest';
import { factorial } from './factorial.js';

describe('factorial', () => {
  it('handles the base case', () => {
    expect(factorial(0)).toBe(1);
  });
});
```
Run once with:
```bash
pnpm test
```
or use the **Testing** sidebar (Vitest extension) for inline run/debug per test — no launch.json entry needed for it.

### Rerun on save (terminal alternative to F5)
```bash
pnpm dev path/to/file.js
```
Reruns that file automatically whenever you save it (Node's built-in `--watch`).


## fixes and whistles

### the goal is to just run js locally when practicing dsa.

Got it — simplest fix: swap the broken `${process.env.TARGET}` for VS Code's built-in `${file}` variable, which just means "whatever file is open and focused in the editor right now."

**Why it broke:** `${process.env.TARGET}` isn't valid VS Code syntax at all — that's Node's way of reading an env var, not VS Code's. VS Code's own variable substitution only recognizes `${env:VAR_NAME}` for environment variables. Since `${process.env.TARGET}` matches no known pattern, VS Code left it completely un-substituted and handed Node the literal string `${process.env.TARGET}` as a filename — which is exactly the `MODULE_NOT_FOUND` error you got. [1](https://code.visualstudio.com/docs/reference/variables-reference)

**The fix** — your `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run current file",
            "type": "node",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}",
            "console": "integratedTerminal"
        }
    ]
}
```

That's it. Open any `.js` file (`ch2/ex2_FizzBuzz.js`, `Leetcode/1TwoSum.js`, whatever), make sure that tab is focused, hit F5 — it runs *that* file. No env var, no per-run setup, nothing to configure when someone forks the repo. `${file}` is one of VS Code's built-in predefined variables — "the current opened file" — so it just tracks whatever tab you're on. [1](https://code.visualstudio.com/docs/reference/variables-reference)

Only gotcha: if your cursor/focus is on a non-JS panel (terminal, debug console) when you hit F5, `${file}` resolves to whatever *was* last active — so click into the file tab first. Update your README's note to say F5 runs the currently open file rather than mentioning launching a specific fixed "program."

