export class LockableBinaryTreeNode {
  public left: LockableBinaryTreeNode | null = null;
  public right: LockableBinaryTreeNode | null = null;
  public parent: LockableBinaryTreeNode | null = null;
  private locked = false;

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

    let current = this.parent;
    while (current) {
      if (current.locked) return false;
      current = current.parent;
    }

    this.locked = true;
    return true;
  }

  unlock() {
    if (!this.locked) return false;
    this.locked = false;
    return true;
  }
}
