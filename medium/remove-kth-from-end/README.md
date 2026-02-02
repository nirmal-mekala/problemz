# Remove Kth Node From End

## Problem
Given the head of a singly linked list, remove the k-th node from the end of the list and return the new head.

Assume `k` is valid for the provided list.

## Function Signature
`removeKthFromEnd(head: ListNode, k: number): ListNode | null`

## Examples
- List `1 -> 2 -> 3`, `k = 1` => `1 -> 2`
- List `1 -> 2 -> 3 -> 4 -> 5`, `k = 2` => `1 -> 2 -> 3 -> 5`
