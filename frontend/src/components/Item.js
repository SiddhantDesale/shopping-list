export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity || 1} {item.unit || ""}{" "}
          {item.itemName.length > 20
            ? item.itemName.slice(0, 20) + "..."
            : item.itemName}
        </span>

        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}
