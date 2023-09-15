
import PropTypes from 'prop-types'


const CourseList = ({ courseList}) => {
    // console.log(courseList)
    const { course_name} = courseList
    return (
        <div>
            <div className="courseListContainer">
                <p>{course_name}</p>
            </div>
        </div>
    );
};
CourseList.propTypes = {
    courseList: PropTypes.object.isRequired
}
export default CourseList;