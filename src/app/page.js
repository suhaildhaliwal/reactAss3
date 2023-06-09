"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/HomePage"
import styles from "./page.module.css"
import Search from "./components/search"

export default function Home() {
  const [movieData, setMovieData] = useState([])
  useEffect(()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setMovieData(res.data.Search))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className={styles.container}>
       {/* <Search/> */}
      {
        movieData.length>0 && movieData.map( (movie,idx) => <Card movieInfo={movie} key={'item'+idx}/> )
      }
    </main>
  )
}








