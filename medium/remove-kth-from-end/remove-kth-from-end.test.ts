import { describe, expect, it } from "vitest";
import { ListNode as WorkingNode, removeKthFromEnd as working } from "./working";
import { ListNode as SolutionNode, removeKthFromEnd as solution } from "./solution";

type NodeCtor = new (value: number, next?: any) => { value: number; next: any };

type RemoveFn = (head: any, k: number) => any;

function buildList<T extends NodeCtor>(Ctor: T, values: number[]) {
  let head: InstanceType<T> | null = null;
  let current: InstanceType<T> | null = null;

  for (const value of values) {
    const node = new Ctor(value);
    if (!head) {
      head = node;
      current = node;
    } else {
      current!.next = node;
      current = node;
    }
  }

  return head;
}

function toArray(head: { value: number; next: any } | null) {
  const result: number[] = [];
  let current = head;

  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

const cases = [
  { values: [1, 2, 3], k: 1, expected: [1, 2] },
  { values: [1, 2, 3, 4, 5], k: 2, expected: [1, 2, 3, 5] },
  { values: [1, 2, 3], k: 3, expected: [2, 3] },
  { values: [7, 7, 7, 7], k: 2, expected: [7, 7, 7] },
  { values: [10, 20], k: 1, expected: [10] }
];

function runCases(Ctor: NodeCtor, removeFn: RemoveFn) {
  it.each(cases)("removes kth from end: %o", ({ values, k, expected }) => {
    const head = buildList(Ctor, values);
    const result = removeFn(head!, k);
    expect(toArray(result)).toEqual(expected);
  });
}

describe("removeKthFromEnd (working)", () => {
  runCases(WorkingNode, working);
});

describe("removeKthFromEnd (solution)", () => {
  runCases(SolutionNode, solution);
});
