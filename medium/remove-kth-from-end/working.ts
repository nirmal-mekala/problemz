export class ListNode {
  public next: ListNode | null;

  constructor(public value: number, next: ListNode | null = null) {
    this.next = next;
  }
}

export function removeKthFromEnd(head: ListNode, k: number): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null;

  for (let i = 0; i < k; i += 1) {
    fast = fast?.next ?? null;
  }

  while (fast) {
    fast = fast.next;
    prev = slow;
    slow = slow?.next ?? null;
  }

  if (!slow) return head;
  if (!prev) return head; // incorrect when removing the head

  prev.next = slow.next;
  return head;
}
