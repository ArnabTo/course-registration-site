import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
const Course = ({course, handleBuyBtn}) => {
// console.log(handleBuyBtn)
  const {course_thumbnail, course_name, credit_hour, price, course_details} = course;
    return (
        <div>
            <div className="courseContainer bg-white rounded-lg">
             <div className="course p-4">
             <img className=" w-[500px] h-[200px] rounded-md mb-4 " src={course_thumbnail}/>
             <div className="courseDtails">
              <h3 className='text-[#1c1b1b] text-lg font-semibold mb-2'>{course_name}</h3>
              <p className=' text-[#1C1B1B99] text-sm font-normal leading-6 mb-2'>{course_details}</p>
              <span className="flex justify-between mb-2 ">
               <p className='text-[#1C1B1B99] text-base font-medium'><FontAwesomeIcon className=' mr-2 ' icon={faDollarSign}/>Price:{price}</p>
               <p className='text-[#1C1B1B99] text-base font-medium'><FontAwesomeIcon className=' mr-2 '  icon={faHourglassStart} />Credit: {credit_hour}h</p>
              </span>
             </div>
             <button onClick={()=>handleBuyBtn(course)} type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-4 py-2 text-center my-2 text-lg font-semibold ">Blue</button>
             </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleBuyBtn: PropTypes.func,
}

export default Course;