"use client"

import { useEffect, useState } from "react"

export function CounterView() {
  const [count, setCount] = useState(0)
  const handlePlusButtonClick = () =>{
    setCount(count + 1)
  }
  const handleMinusButtonClick = () =>{
    console.log("マイナスボタンがおされた")
    if(count <= 0 ) return
    setCount(count - 1)
  }
  
  useEffect(() => {
    console.log("現在のカウント:", count)
  }, [count])

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>カウンター</h1>
      <p style={{ fontSize: 32 }}>{count}</p>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
        <button onClick={handlePlusButtonClick}>プラス</button>
        <button onClick={handleMinusButtonClick}>マイナス</button>
      </div>
    </div>
  )
}