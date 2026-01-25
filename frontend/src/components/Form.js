import { useState } from "react";

const DEFAULT_ITEMS = ["Milk", "Bread", "Rice", "Eggs", "Oil"];

export default function Form({ onFormSubmit }) {
  const [items] = useState(
    [...DEFAULT_ITEMS].sort((a, b) => a.localeCompare(b)),
  );
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!quantity) return;

    const itemName = newItem.trim() !== "" ? newItem : selectedItem;

    const newListItem = {
      id: Date.now(),
      quantity: Number(quantity),
      unit,
      itemName,
      packed: false,
    };

    onFormSubmit(newListItem);

    setSelectedItem("");
    setQuantity("");
    setNewItem("");
    setUnit("");
  }

  function handleAddNewItem() {
    if (!newItem.trim()) return;

    const newListItem = {
      id: Date.now(),
      quantity: quantity ? Number(quantity) : 1,
      unit,
      itemName: newItem,
      packed: false,
    };

    onFormSubmit(newListItem);
    setNewItem("");
    setQuantity("");
    setUnit("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="form-title">
        What do you want to add to the shopping list?
      </h3>

      <div className="form-main-row">
        {/* LEFT GROUP */}
        <div className="form-group-row">
          <div className="form-group">
            <label>Item</label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            >
              <option value="">-- Select an item --</option>
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              className="qty-input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Qty"
            />
          </div>

          <div className="form-group">
            <label>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="">-- Select Unit --</option>

              <option value="kg">Kg</option>
              <option value="gm">gm</option>
              <option value="l">litre</option>
              <option value="ml">ml</option>
            </select>
          </div>

          <button type="submit">Add</button>
        </div>

        {/* RIGHT GROUP */}
        <div className="form-group-row secondary">
          <div className="form-group">
            <label>Add new item</label>
            <input
              type="text"
              placeholder="New item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddNewItem}>
            +
          </button>
        </div>
      </div>
    </form>
  );
}
