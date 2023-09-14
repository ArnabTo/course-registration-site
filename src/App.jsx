import './App.css'
import CourseList from './components/CourseList'
import Courses from './components/Courses'
function App() {
  return (
    <div>
    <header><h1 className='text-center text-[#1c1b1b] text-3xl font-bold my-11'>Course Registration</h1></header>
      <div className='container flex m-auto px-8'>
        <Courses></Courses>
        <CourseList></CourseList>
        </div>
    </div>
  )
}

export default App
