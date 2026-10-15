# problemz

TypeScript coding problems with tests. Each problem lives in a difficulty folder and includes:

- `workspace.ts` — intentionally incomplete or incorrect implementation
- `solution.ts` — correct implementation
- `*.test.ts` — one shared set of tests asserting correct behavior, run against both files

There is only one set of test cases per problem, and it is never written with `workspace.ts` in mind — it simply asserts correct behavior. `solution.ts` passes all of it; `workspace.ts` fails some of it as a side effect of being incomplete/incorrect, not because the tests are special-cased for it. See `AGENTS.md` for details.

Note: tests and solutions are AI-generated, so take both with a grain of salt.

## Structure

- `easy/`, `medium/`, `hard/` — problem directories by difficulty
- Each problem directory contains `workspace.ts`, `solution.ts`, and a `*.test.ts` file

## Running tests

- `npm test` — run all Vitest tests (may fail until `workspace.ts` is solved)
- `npm run test:watch` — run tests in watch mode
- `npm run typecheck` — type-check without emitting files
