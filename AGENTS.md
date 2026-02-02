# Repository Guidelines

## Purpose
This repository stores coding problems and solutions in TypeScript with automated tests. Problems are organized by difficulty and each problem directory contains a failing starter implementation, a passing solution, and tests.

## Problem Workflow (Natural Language Input)
When given a plain-English problem statement, follow this exact structure:
- Choose difficulty: `easy`, `medium`, or `hard`.
- Create a directory under that tier using kebab-case (e.g. `easy/two-sum`).
- Add four files:
  - `working.ts` — intentionally incomplete or incorrect so tests fail.
  - `solution.ts` — correct implementation that passes tests.
  - `*.test.ts` — tests that exercise both `working.ts` and `solution.ts`.
  - `README.md` — problem statement and examples.
- Keep exports consistent between `working.ts` and `solution.ts` so tests can import both.

## Project Structure
- `easy/`, `medium/`, `hard/` — problem directories by difficulty.
- Each problem directory contains `working.ts`, `solution.ts`, `*.test.ts`, and `README.md`.

## Build, Test, and Development Commands
- `npm test` — run all Vitest tests (expected to fail until `working.ts` is solved).
- `npm run test:watch` — run tests in watch mode.
- `npm run typecheck` — type-check the repository without emitting files.

## Coding Style & Naming Conventions
- TypeScript, `strict` mode.
- Use kebab-case for problem directories and file names (e.g. `sum-of-array.test.ts`).
- Keep function names descriptive and consistent across `working.ts` and `solution.ts`.

## Testing Guidelines
- Use Vitest for all tests.
- Test files must end with `.test.ts`.
- Each test file should validate both implementations:
  - `working.ts` should currently fail at least one test.
  - `solution.ts` should pass all tests.
- Aim for due diligence on edge cases, but avoid exhaustive testing. A sane middle ground is enough (similar to HackerRank-style tests): cover the main paths plus a handful of meaningful edge cases without trying to enumerate every possible scenario.

## Adding a New Problem (Checklist)
1) Create `easy|medium|hard/<problem-name>/`.
2) Add `working.ts` with a stub or incorrect logic.
3) Add `solution.ts` with correct logic.
4) Add `<problem-name>.test.ts` with shared cases for both implementations.
5) Add `README.md` with the problem description and examples.
6) Ensure `npm test` fails before the working solution is fixed.
