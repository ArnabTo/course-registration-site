import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import CourseLists from './components/CourseList/CourseLists'
import Courses from './components/Courses/Courses'
function App() {
  const updatedList = [];
  const notify = () => toast("This Course is already added!");
  const notify2 = () => toast("Your Credit Hour is over");
  const [courseLists, setCourseLists] = useState([])
  const handleBuyBtn = (course) => {
    const courseListUpdate = [...courseLists, course]

    const removeDuplicate = courseListUpdate.filter(element => {
      const isDuplicate = updatedList.includes(element.id)
      if (!isDuplicate) {
        updatedList.push(element.id)
        return true
      }
      notify()
      return false
    })
    setCourseLists(removeDuplicate)
  };
    const Hour = courseLists.map((c)=>{
        return c.credit_hour
    });
   let sum = 0;
   for(let i = 0; i < Hour.length; i++){
      sum+=Hour[i]
   }
   let credit = 20 - sum
   if( credit < 0){
    credit = 0
    notify2()
   }

  return (
    <div>
      <header><h1 className='text-center text-[#1c1b1b] text-3xl font-bold my-11'>Course Registration</h1></header>
      <div className='md:flex max-w-7xl m-auto px-2 md:px-0 gap-4'>
        <Courses handleBuyBtn={handleBuyBtn} sum={sum} ></Courses>
        <CourseLists courseLists={courseLists} credit={credit} ></CourseLists>
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
        theme="dark" />
    </div>
  )
}

export default App
