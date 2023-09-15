import PropTypes from 'prop-types'
import CourseList from "./CourseList";

const CourseLists = ({ courseLists, credit }) => {
    const Hour = courseLists.map((c)=>{
        return c.credit_hour
    })
   let sum = 0;
   for(let i = 0; i < Hour.length; i++){
      sum+=Hour[i]
   }
   let totalCredit = sum
   if( totalCredit > 20){
    totalCredit = 20
   }
    return (
        <div className=' w-full md:w-[23%] bg-white text-start p-8  rounded-lg'>
        <div className='remaing border-b-[1px] border-[#1C1B1B33] pb-4'>
            <h3 className='text-[#2F80ED] text-lg font-bold leading-8'>Remaing Credit hours: {credit}</h3>
        </div>
            <h1 className='text-[#1c1B1B] text-[20px] font-bold pt-4 pb-4'>Course List</h1>
            <ol className='list-decimal text-[#1C1B1B99] text-base font-normal border-b-[1px] border-[#1C1B1B33] pb-4 '>
            {
                courseLists.map(courseList => <li><CourseList courseList={courseList} key={courseList.id}></CourseList></li>)
            }
            </ol>
            <div className='creditHour border-b-[1px] border-[#1C1B1B33]  pb-4 pt-4'>
               <h3>Total Credit Hour : {totalCredit}</h3>  
            </div>
        </div>
    );
};
CourseLists.propTypes = {
    courseLists: PropTypes.array.isRequired,
    credit: PropTypes.number
}
export default CourseLists;