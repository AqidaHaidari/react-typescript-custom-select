import { useImperativeHandle, useState } from "react"
import { Select } from "./Select"

const options=[
  {label:'First', value:1},
  {label:'Second', value:2},
  {label:'Third', value:3},
  {label:'Forth', value:4},
  {label:'Fifth', value:5},
]
function App() {
  const [value, setValue]=useState(options[0])
  return (
    <>
      <Select options={options} value={value}/>
    </>
  )
}

export default App
