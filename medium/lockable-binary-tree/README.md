# Lockable Binary Tree

## Problem
Implement a binary tree node that supports locking and unlocking with the constraint that a node can be locked or unlocked only if none of its ancestors or descendants are locked.

Each node should expose:
- `setLeft(node)` / `setRight(node)` to attach children
- `is_locked()` to report lock state
- `lock()` to lock a node and return `true` on success, `false` otherwise
- `unlock()` to unlock a node and return `true` on success, `false` otherwise

## Notes
- Assume each node knows its parent after being attached via `setLeft`/`setRight`.
- Locking/unlocking should not be allowed when any ancestor or descendant is locked.

## Example
If a leaf is locked, attempting to lock its parent should return `false`. Once the leaf is unlocked, locking the parent should return `true`.
