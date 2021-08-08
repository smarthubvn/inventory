import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price-field">Price:</label>
        <input
          type="number"
          className="form-control"
          id="price-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="type-field">Type:</label>
        <input
          type="text"
          className="form-control"
          id="type-field"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand-field">Brand:</label>
        <input
          type="text"
          className="form-control"
          id="brand-field"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="row">
        <button
          className="mt-3 btn btn-primary"
          type="button"
          onClick={addItemButtonPressed}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddItem;
