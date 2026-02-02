export class LockableBinaryTreeNode {
  public left: LockableBinaryTreeNode | null = null;
  public right: LockableBinaryTreeNode | null = null;
  public parent: LockableBinaryTreeNode | null = null;
  private locked = false;
  private lockedDescendantCount = 0;

  constructor(public value: number) {}

  setLeft(node: LockableBinaryTreeNode | null) {
    this.left = node;
    if (node) node.parent = this;
  }

  setRight(node: LockableBinaryTreeNode | null) {
    this.right = node;
    if (node) node.parent = this;
  }

  is_locked() {
    return this.locked;
  }

  lock() {
    if (this.locked) return false;
    if (this.lockedDescendantCount > 0) return false;
    if (this.hasLockedAncestor()) return false;

    this.locked = true;
    this.updateAncestors(1);
    return true;
  }

  unlock() {
    if (!this.locked) return false;
    if (this.lockedDescendantCount > 0) return false;
    if (this.hasLockedAncestor()) return false;

    this.locked = false;
    this.updateAncestors(-1);
    return true;
  }

  private hasLockedAncestor() {
    let current = this.parent;
    while (current) {
      if (current.locked) return true;
      current = current.parent;
    }
    return false;
  }

  private updateAncestors(delta: number) {
    let current = this.parent;
    while (current) {
      current.lockedDescendantCount += delta;
      current = current.parent;
    }
  }
}
