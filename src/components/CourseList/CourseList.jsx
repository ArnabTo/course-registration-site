
import PropTypes from 'prop-types'


const CourseList = ({ courseList}) => {
    // console.log(courseList)
    const { course_name} = courseList
    return (
        <div>
            <div className="courseListContainer">
               <li><p>{course_name}</p></li> 
            </div>
        </div>
    );
};
CourseList.propTypes = {
    courseList: PropTypes.object.isRequired
}
export default CourseList;