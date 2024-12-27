interface LabelProps {
  count: number;
}

// simulate external component library that only accepts prop
// we can't directly import the signal
export default function Label({ count }: LabelProps) {
  return <p>count is {count}</p>;
}
