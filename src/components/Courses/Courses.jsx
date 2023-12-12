import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Course from "./Course";

const Courses = ({handleBuyBtn, sum}) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className=" w-full md:w-4/5 mb-8">
            <div className='coursesContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  courses.map( course => <Course course={course} handleBuyBtn={handleBuyBtn} key={course.id} sum={sum}></Course> )
                }
               
            </div>
        
        </div>
    );
};
Courses.propTypes = {
    handleBuyBtn: PropTypes.func,
    sum: PropTypes.number
}
export default Courses;