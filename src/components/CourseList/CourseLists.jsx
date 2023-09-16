import PropTypes from 'prop-types'
import CourseList from "./CourseList";

const CourseLists = ({ courseLists, sum, Remainingcredit }) => {
// console.log(sum)
   const price = courseLists.map((price)=>{return price.price});
   let totalPrice = 0 ;
   for(let i = 0; i < price.length; i++){
       totalPrice = totalPrice + price[i];
   }
   console.log(totalPrice)
   if(Remainingcredit <= 0){
    Remainingcredit=0
   }

    let totalCredit = sum
    if (totalCredit > 20) {
        totalCredit = 20
    }
    return (
        <div className=' w-full md:w-[25%] h-fit bg-white text-start p-8  rounded-lg'>
            <div className='remaing border-b-[1px] border-[#1C1B1B33] pb-4'>
                <h3 className='text-[#2F80ED] text-lg font-bold leading-8'>Credit Hours Remaining:{Remainingcredit}</h3>
            </div>
            <h1 className='text-[#1c1B1B] text-[20px] font-bold pt-4 pb-4'>Course List</h1>
                <ol className='list-decimal text-[#1C1B1B99] text-base font-normal border-b-[1px] border-[#1C1B1B33] pb-4 '>
                    {
                        courseLists.map(courseList => <CourseList courseList={courseList} key={courseList.id}></CourseList>)
                    }
               </ol>
            <div className='creditHour border-b-[1px] border-[#1C1B1B33]  pb-4 pt-4'>
                <h3>Total Credit Hours :{totalCredit}hr</h3>
            </div>
            <div className='totalPrice border-b-[1px] border-[#1C1B1B33]  pb-4 pt-4'>
                <h3>Total Price:{totalPrice}USD</h3>
            </div>
        </div>
    );
};
CourseLists.propTypes = {
    courseLists: PropTypes.array.isRequired,
    sum: PropTypes.number,
    Remainingcredit: PropTypes.number
    
}
export default CourseLists;