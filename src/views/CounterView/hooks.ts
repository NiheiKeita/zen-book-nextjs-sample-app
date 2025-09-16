import { useEffect, useState } from "react"

export const useCounterView = () =>{
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

  return{
    count,
    handlePlusButtonClick,
    handleMinusButtonClick
  }
} 