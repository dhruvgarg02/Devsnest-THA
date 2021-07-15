import "./App.css";
import { useState } from "react";
let uniqueKey = 0;

function Form({ addItem }) {
  const HandleInput = (e) => {
    e.preventDefault();
    addItem({ food, calories, uniqueKey });
    uniqueKey += 1;
    setFood("");
    setCalories("");
  };

  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");

  return (
    <form onSubmit={HandleInput}>
      <input
        type="text"
        placeholder="Enter Food"
        required
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Calories"
        required
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <button type="submit"> Add Item </button>
    </form>
  );
}

function CalorieCard({
  item,
  deleteItem,
  index,
  isEditing,
  setIsEditing,
  updateItem,
}) {
  const [newFood, setNewFood] = useState(item.food);
  const [newCalories, setNewCalories] = useState(item.calories);

  const updateValues = ({newFood, newCalories}) => {
    item.food = newFood;
    item.calories = newCalories;
    updateItem(item);
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="card">
      <input
        type="text"
        value={newFood}
        required
        onChange={(e) => setNewFood(e.target.value)}
      />
      <input
        type="number"
        value={newCalories}
        required
        onChange={(e) => setNewCalories(e.target.value)}
      />
      <button id="delete" onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button id="edit" onClick={() => updateValues({newFood, newCalories})}>
        Done
      </button>
    </div>
  ) : (
    <div className="card">
      <h2>{item.food}</h2>
      <h3>You have consumed {item.calories} calories</h3>
      <button id="delete" onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button id="edit" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  );
}

function RenderItem({ item, index, deleteItem, updateItem }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <CalorieCard
        item={item}
        deleteItem={deleteItem}
        index={index}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        updateItem={updateItem}
      />
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const updateItem = (newItem) => {
    setItems(items.map((item) => (item.uniqueKey === newItem.uniqueKey) ? newItem : item));
  };

  return (
    <div className="App">
      <Form addItem={addItem} />
      {items.length === 0 ? (
        <h3>
          <br></br>Start Adding Items
        </h3>
      ) : (
        items.map((item, index) => (
          <RenderItem
            item={item}
            key={item.uniqueKey}
            index={index}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))
      )}
    </div>
  );
}

export default App;
