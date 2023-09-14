import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='coursesContainer grid grid-cols-3 gap-10 w-4/5 '>
                {
                  courses.map( course => <Course course={course} key={course.id}></Course> )
                }
            </div>
        </div>
    );
};

export default Courses;