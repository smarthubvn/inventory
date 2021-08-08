import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    // console.log(name);
    // console.log(price);
    // console.log(type);
    // console.log(brand);
    // props.callback({data: "test"})
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Search for an Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="price-field">Max Price:</label>
          <input
            type="number"
            className="form-control"
            id="price-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            type="text"
            className="form-control"
            id="type-field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            type="text"
            className="form-control"
            id="brand-field"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="row mt-3">
          <div className="col-4" />
          <button
            type="button"
            className="btn btn-primary col-4"
            onClick={searchButtonPressed}
          >
            Search
          </button>
        </div>
      </div>
      {/* <p>Name: {name}</p>
            <p>Max Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p> */}
    </div>
  );
}

export default SearchBar;
