import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import axios from "axios";

import { getAllData } from './services/helpers'
import { endpoints } from './services/constants'
import Filter from './components/filter'

function App() {
  const [data, setData] = useState([])
  const [searchValue,setSearchValue] = useState("")


  useEffect(() => {

    async function getData() {
      const res = await getAllData(endpoints.recipes)
      setData(res)

    }
    getData();

  }, [])



  return (
    <>
      <input type="Search" placeholder='search in here' onChange={(e) => {
        setSearchValue(e.target.value)
      }}/>
      <Card data={data} setData={setData} searchValue={searchValue}/>

    </>
  )
}

export default App
