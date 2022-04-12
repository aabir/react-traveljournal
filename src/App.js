import React from "react";
import Journal from "./components/Journal";
import Navbar from "./components/Navbar";
import data from "./data/data";


export default function App() {
  const journals = data.map(item => {
    return (
      <Journal
        key={item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
        <Navbar />
        <section className="">
            {journals}
        </section>
    </div>
  )
  
}

