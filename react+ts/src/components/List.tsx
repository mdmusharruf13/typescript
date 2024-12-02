import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (items: T) => ReactNode;
}

export default function List<T>({ items, render }: ListProps<T>) {
  return (
    <section>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </section>
  );
}
