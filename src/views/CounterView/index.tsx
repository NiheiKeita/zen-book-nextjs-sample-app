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
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold">カウンター</h1>
      <p className="text-4xl my-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
         className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
         onClick={handlePlusButtonClick}>
          プラス
        </button>
        <button
         className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
         onClick={handleMinusButtonClick}
         >
            マイナス
        </button>
      </div>
    </div>
  )
}