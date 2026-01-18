export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked * (100 / numItems));
  return (
    <footer className="stats">
      <em>
        {numItems === 0
          ? `Start adding some items to your shopping list 🎉`
          : numPacked === numItems
            ? `You took everything 🥳`
            : `You have ${numItems} items on your list, and you already collected ${numPacked}(${percentage}%)`}
      </em>
      {/* <h3>Start adding some items to your shopping list 🎉</h3> */}
    </footer>
  );
}
