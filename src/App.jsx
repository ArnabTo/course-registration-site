import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import CourseLists from './components/CourseList/CourseLists'
import Courses from './components/Courses/Courses'
function App() {
  const updatedList = [];
  const notify = () => toast("This Course is already added!");
  const [courseLists, setCourseLists] = useState([])
  const handleBuyBtn = (course) => {
    const courseListUpdate = [...courseLists, course]

    const removeDuplicate = courseListUpdate.filter(element => {
      const isDuplicate = updatedList.includes(element.id)
      if (!isDuplicate) {
        updatedList.push(element.id)
        console.log('nai')
        return true
      }
      notify()
      return false
    })

    console.log(removeDuplicate)
    setCourseLists(removeDuplicate)
  }

  return (
    <div>
      <header><h1 className='text-center text-[#1c1b1b] text-3xl font-bold my-11'>Course Registration</h1></header>
      <div className='md:flex max-w-7xl m-auto px-2 md:px-0 gap-4'>
        <Courses handleBuyBtn={handleBuyBtn} ></Courses>
        <CourseLists courseLists={courseLists} ></CourseLists>
      </div>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  )
}

export default App
