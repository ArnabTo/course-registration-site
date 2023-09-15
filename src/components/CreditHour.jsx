import { useEffect, useState } from "react";

const CreditHour = () => {
    const [credit, SetCredit] = useState(20)
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default CreditHour;