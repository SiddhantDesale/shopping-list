import { useEffect, useState } from "react";
import "./index.css";
import Title from "./components/Title";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";
import Stats from "./components/Stats";
import { fetchItems, addItem, toggleItem, deleteItem } from "./services/api";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const res = await fetchItems();
    setItems(res.data);
  }

  async function handleFormSubmit(item) {
    await addItem(item);
    loadItems();
  }

  async function handleDeleteItem(id) {
    await deleteItem(id);
    loadItems();
  }

  async function handleToggleItem(id) {
    await toggleItem(id);
    loadItems();
  }

  async function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items?",
    );

    if (!confirmed) return;

    for (let item of items) {
      await deleteItem(item.id);
    }
    loadItems();
  }

  return (
    <div className="app">
      <Title />

      <Form onFormSubmit={handleFormSubmit} />
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />

      <Stats items={items} />
    </div>
  );
}
