export class ListNode {
  public next: ListNode | null;

  constructor(public value: number, next: ListNode | null = null) {
    this.next = next;
  }
}

export function removeKthFromEnd(head: ListNode, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i < k; i += 1) {
    fast = fast?.next ?? null;
  }

  while (fast?.next) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  const target = slow?.next ?? null;
  if (target) {
    slow!.next = target.next;
  }

  return dummy.next;
}
