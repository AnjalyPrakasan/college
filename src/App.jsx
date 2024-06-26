import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClgRegisteration from './startup/clgReg'
import ViewCollege from './startup/viewData'
import TeacherReg from './startup/teacherReg'
import ViewTeacher from './startup/viewTeacher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <ClgRegisteration/>
      <ViewCollege/> */}
      <TeacherReg/>
      <ViewTeacher/>
    </>
  )
}

export default App
