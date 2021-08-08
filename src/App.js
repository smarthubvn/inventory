import "./App.css";
import FormItem from "./components/FormItem";
import Info from "./components/Info";
import ButtonState from "./components/ButtonState";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";
import AddStudent from "./components/AddStudent";
import Test from "./components/Class";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const [showTest, setShowTest] = useState(true);

  const addItemToData = (item) => {
    let items = data["items"];
    // item.id = items.length;

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOption)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
    /*
    get
    post
    put
    delete
    */
  };

  const filterData = (data) => {
    const filteredData = [];
    // if (!filters.name) {
    //   return data;
    // }
    for (const item of data) {
      if (filters.name != "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
      {showTest ? <Test destroy={setShowTest} /> : null}
    </div>
  );
}

function Info1() {
  const title = "This is my title";
  const showTitle = true;
  return (
    <div>
      <h1>{showTitle ? title : ""}</h1>
      <p>Manager your stuff</p>
    </div>
  );
}

export default App;
