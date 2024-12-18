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



  useEffect(() => {

    async function getData() {
      const res = await getAllData(endpoints.recipes)
      setData(res)

    }
    getData();

  }, [])



  return (
    <>
      <Filter data={data} setData={setData}/>
      <Card data={data} setData={setData} />

    </>
  )
}

export default App
