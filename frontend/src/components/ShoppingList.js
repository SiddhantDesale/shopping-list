import { useState } from "react";
import Item from "./Item";

export default function ShoppingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortItems, setSortItems] = useState("input");

  let sortedItems;

  if (sortItems === "input") sortedItems = items;
  if (sortItems === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortItems === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortItems}
          onChange={(e) => setSortItems(e.target.value)}
        >
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
