import "./App.css";
import FormItem from "./components/FormItem";
import Info from "./components/Info";
import ButtonState from "./components/ButtonState";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";
import AddStudent from "./components/AddStudent";
import ShowStudentList from "./components/ShowStudentList";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const [studentList, setStudentList] = useState([]);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  const updateStudentList = (student) => {
    studentList.push(student);
    setStudentList(studentList);
    console.log(studentList);
  };

  return (
    <div className="App">
      {/* <Info /> */}
      {/* <Info title="This is Title" showTitle="true"/>
      <FormItem text="lee" number={68}/>
      <FormItem text="phong"/>
      <FormItem /> */}
      {/* <ButtonState></ButtonState> */}
      <SearchBar updateSearchParams={updateFilters} />
      {/* <p>{"filter" in filters ? filters["filter"] : "no data to display"}</p> */}
      {/* <p>Name: {"name" in filters ? filters["name"] : "no data to display"}</p>
      <p>Max Price: {"price" in filters ? filters["price"] : "no data to display"}</p>
      <p>Type: {"type" in filters ? filters["type"] : "no data to display"}</p>
      <p>Brand: {"brand" in filters ? filters["brand"] : "no data to display"}</p> */}
      <ItemsDisplay items={data["items"]} />
      <AddItem addItem={addItemToData} />
      {/* <AddStudent addStudent={updateStudentList} />
      <ShowStudentList data={studentList} /> */}
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
