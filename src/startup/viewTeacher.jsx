import axios from "axios";
import { useState,useEffect } from "react";

function ViewTeacher()
{
    const [t_record,set_Trecord] = useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:9004/viewTeacher')
        .then((res)=>
        {
            set_Trecord(res.data)
        })
    },[])

    return(
        <>
           {
            t_record.map((item)=>
            {
                return(
                    <div key={item._id}>{item.tname} 
                    <div>{item.temail} 
                        <div>{item.department} 
                            <div>{item.tclg}</div>
                        </div>
                    </div>
                </div>
                )
            })
           }
        </>
    )
}
export default ViewTeacher