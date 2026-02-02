import { describe, expect, it } from "vitest";
import { LockableBinaryTreeNode as WorkingNode } from "./working";
import { LockableBinaryTreeNode as SolutionNode } from "./solution";

type NodeCtor = new (value: number) => {
  value: number;
  left: any;
  right: any;
  setLeft(node: any): void;
  setRight(node: any): void;
  is_locked(): boolean;
  lock(): boolean;
  unlock(): boolean;
};

function buildTree<T extends NodeCtor>(Ctor: T) {
  const root = new Ctor(1);
  const left = new Ctor(2);
  const right = new Ctor(3);
  const leftLeft = new Ctor(4);
  const leftRight = new Ctor(5);

  root.setLeft(left);
  root.setRight(right);
  left.setLeft(leftLeft);
  left.setRight(leftRight);

  return { root, left, right, leftLeft, leftRight };
}

function runCases<T extends NodeCtor>(Ctor: T) {
  it("locks a leaf and reports locked state", () => {
    const { leftLeft } = buildTree(Ctor);
    expect(leftLeft.is_locked()).toBe(false);
    expect(leftLeft.lock()).toBe(true);
    expect(leftLeft.is_locked()).toBe(true);
  });

  it("prevents locking when a descendant is locked", () => {
    const { left, leftLeft } = buildTree(Ctor);
    expect(leftLeft.lock()).toBe(true);
    expect(left.lock()).toBe(false);
  });

  it("prevents locking when an ancestor is locked", () => {
    const { root, leftRight } = buildTree(Ctor);
    expect(root.lock()).toBe(true);
    expect(leftRight.lock()).toBe(false);
  });

  it("allows locking an ancestor after descendant is unlocked", () => {
    const { root, leftLeft } = buildTree(Ctor);
    expect(leftLeft.lock()).toBe(true);
    expect(leftLeft.unlock()).toBe(true);
    expect(root.lock()).toBe(true);
  });

  it("returns false when unlocking a node that is not locked", () => {
    const { right } = buildTree(Ctor);
    expect(right.unlock()).toBe(false);
  });

  it("returns false when locking an already locked node", () => {
    const { right } = buildTree(Ctor);
    expect(right.lock()).toBe(true);
    expect(right.lock()).toBe(false);
  });

  it("allows locking a descendant after ancestor is unlocked", () => {
    const { root, leftLeft } = buildTree(Ctor);
    expect(root.lock()).toBe(true);
    expect(leftLeft.lock()).toBe(false);
    expect(root.unlock()).toBe(true);
    expect(leftLeft.lock()).toBe(true);
  });

  it("allows locking nodes in separate subtrees", () => {
    const { leftLeft, right } = buildTree(Ctor);
    expect(leftLeft.lock()).toBe(true);
    expect(right.lock()).toBe(true);
  });

  it("handles a single-node tree", () => {
    const root = new Ctor(1);
    expect(root.is_locked()).toBe(false);
    expect(root.lock()).toBe(true);
    expect(root.unlock()).toBe(true);
  });
}

describe("LockableBinaryTreeNode (working)", () => {
  runCases(WorkingNode);
});

describe("LockableBinaryTreeNode (solution)", () => {
  runCases(SolutionNode);
});
