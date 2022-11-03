import './App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';
function App() {
  
  const [catFact, setCatFact] = useState();
  const [name, setName] = useState("");
  const [getAge, setGetAge] = useState([]);
  const [excuse, setExcuse] = useState();



  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    });
    
    
  }
  
  useEffect(() => {
    fetchCatFact();
  },[])
  

  const findAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {setGetAge(res.data); setName("")})
    
  }


  const getexcuse = (catagory) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${catagory}`).then((res) => {
      setExcuse(res.data[0].excuse)
    });
    
  }


  return (
    <div className="App">
      
      <h1>CatFacts</h1>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>


      
      <div>
      <h1>Generate An Excuse</h1>
      <button onClick={()=>getexcuse("party")}>Party</button>
      <button onClick={()=>getexcuse("funny")}>Funny</button>
      <button onClick={()=>getexcuse("gaming")}>Gaming</button>
      <button onClick={()=>getexcuse("developers")}>Developers</button>
      <p>{excuse}</p>
      </div>

    <div>
      <h1>Predict Age</h1>
      <input onChange={(e) => setName(e.target.value)} value = {name} type="text" placeholder="typename"/>
        <button onClick={findAge}>preditAge</button>
      <div>{name}</div>
      
      <h2>Person Name: {getAge.name}</h2>
      <h2>predicted Age: {getAge.age}</h2>
      </div>
    </div>
  );
}

export default App;
