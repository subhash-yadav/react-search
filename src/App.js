import { useEffect, useState } from "react";
import "./App.scss";

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
  return (
    <div className="App">
      <input className="App-input" type="text" placeholder="Search anyThing" onChange={userQuerry} />
      <ul>
        {user.filter((users)=>users.name.toLowerCase().includes(querry)).map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
