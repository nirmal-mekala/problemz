# Repository Guidelines

## Purpose
This repository stores coding problems and solutions in TypeScript with automated tests. Problems are organized by difficulty and each problem directory contains a failing starter implementation, a passing solution, and tests.

## Problem Workflow (Natural Language Input)
When given a plain-English problem statement, follow this exact structure:
- Choose difficulty: `easy`, `medium`, or `hard`.
- Create a directory under that tier using kebab-case (e.g. `easy/two-sum`).
- Add four files:
  - `workspace.ts` — intentionally incomplete or incorrect, so it fails some of the tests below.
  - `solution.ts` — correct implementation that passes all tests.
  - `*.test.ts` — one shared set of correctness-only tests, run against both `workspace.ts` and `solution.ts` (see Testing Guidelines — never author the tests differently per implementation).
  - `README.md` — problem statement and examples.
- Keep exports consistent between `workspace.ts` and `solution.ts` so tests can import both.

## Project Structure
- `easy/`, `medium/`, `hard/` — problem directories by difficulty.
- Each problem directory contains `workspace.ts`, `solution.ts`, `*.test.ts`, and `README.md`.

## Build, Test, and Development Commands
- `npm test` — run all Vitest tests (expected to fail until `workspace.ts` is solved).
- `npm run test:watch` — run tests in watch mode.
- `npm run typecheck` — type-check the repository without emitting files.

## Coding Style & Naming Conventions
- TypeScript, `strict` mode.
- Use kebab-case for problem directories and file names (e.g. `sum-of-array.test.ts`).
- Keep function names descriptive and consistent across `workspace.ts` and `solution.ts`.

## Testing Guidelines
- Use Vitest for all tests.
- Test files must end with `.test.ts`.
- **There is only ONE set of test cases per problem.** Write it as if `solution.ts` were the only implementation in the world: assert the objectively correct output for each input, based on the problem statement — nothing about the assertions should be written with `workspace.ts` in mind.
- Do NOT write "a test that fails" or weaken/invert an assertion so `workspace.ts` passes it. There is no such thing as a test designed to fail — a test asserts correct behavior, full stop.
- `workspace.ts` fails some of those tests as a *side effect* of being an intentionally incomplete/incorrect implementation — not because the test was authored differently for it. If `workspace.ts` happens to pass everything, that's fine; it's not a requirement, and you should never loosen a correct assertion just to force a failure.
- `solution.ts` must pass every test, with no exceptions.
- Both implementations are run through the exact same `it`/`it.each` cases — never branch test logic or expected values based on which implementation is under test.
- Aim for due diligence on edge cases, but avoid exhaustive testing. A sane middle ground is enough (similar to HackerRank-style tests): cover the main paths plus a handful of meaningful edge cases without trying to enumerate every possible scenario.

## Adding a New Problem (Checklist)
1) Create `easy|medium|hard/<problem-name>/`.
2) Add `solution.ts` with correct logic.
3) Add `<problem-name>.test.ts` with ONE set of cases asserting correct behavior — write these against `solution.ts` only, without regard for what `workspace.ts` will do.
4) Add `workspace.ts` with a stub or incorrect logic.
5) Add `README.md` with the problem description and examples.
6) Run `npm test` and confirm: `solution.ts` passes every case, and `workspace.ts` fails at least one — because its logic is wrong, not because any test was altered.
