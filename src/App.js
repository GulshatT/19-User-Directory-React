import React, { useState, useEffect } from "react";
import Axios from 'axios'
import Intro from "./components/Intro";
import Users from "./components/Users";
import './App.css';

function App() {
  const [employeesResults, setEmployees] = useState([])
  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50').then(function (res) {
      console.log(res)
      setEmployees(res.data.results)
    })

  }, [])

  return (
    <>
      <h1>Employee Directory</h1>
      <Intro student="Gigi" />
      <Users employees={employeesResults} />
    </>
  )

}

export default App;
