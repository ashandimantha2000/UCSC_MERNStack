import React, { useState } from 'react';

export default function ShoppingCart() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, updatedValue) => {
    const newItems = [...items];
    newItems[index] = updatedValue;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Arrays With UseState Examples</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
