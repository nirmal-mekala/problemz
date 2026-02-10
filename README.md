# problemz

TypeScript coding problems with tests. Each problem lives in a difficulty folder and includes:

- `working.ts` — intentionally incomplete or incorrect implementation
- `solution.ts` — correct implementation
- `*.test.ts` — shared tests that assert correct behavior for both `working.ts` and `solution.ts`

Note: tests and solutions are AI-generated, so take both with a grain of salt.

## Structure

- `easy/`, `medium/`, `hard/` — problem directories by difficulty
- Each problem directory contains `working.ts`, `solution.ts`, and a `*.test.ts` file

## Running tests

- `npm test` — run all Vitest tests (may fail until `working.ts` is solved)
- `npm run test:watch` — run tests in watch mode
- `npm run typecheck` — type-check without emitting files
