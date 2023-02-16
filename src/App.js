import { useEffect, useState } from "react";
import "./App.scss";
import Table from "./components/Table";

function App() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  };
  const [querry, setQuerry] = useState("");
  
  const userQuerry = (e) => {
    setQuerry(e.target.value)
  }
 
console.log(querry,"Querry")
  useEffect(() => {
    getUser();
  }, []);

 const key = ["name", "username", "email"];
 
  const search = (data) =>{
    return data.filter((item)=> key.some(key=>item[key].toLowerCase().includes(querry)))
  }
  return (
    <div className="App">
      <input className="App-input" type="text" placeholder="Search anyThing" onChange={userQuerry} />
      <Table data={search(user)}/>
    </div>
  );
}

export default App;
