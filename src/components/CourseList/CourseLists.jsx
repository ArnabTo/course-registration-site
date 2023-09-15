import PropTypes from 'prop-types'
import CourseList from "./CourseList";

const CourseLists = ({courseLists}) => {
    // console.log(courseLists)
    return (
        <div className=' w-full md:w-[23%] bg-white text-start p-8  rounded-lg'>
        <h1 className='text-[#1c1B1B] text-[20px] font-bold'>Course List</h1>
        <ol className='list-decimal text-[#1C1B1B99] text-base font-normal '>
           {
            courseLists.map(courseList => <li><CourseList courseList={courseList}></CourseList></li>)
           }
        </ol>
        </div>
    );
};
CourseLists.propTypes = {
    courseLists: PropTypes.object.isRequired
}
export default CourseLists;