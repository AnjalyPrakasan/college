import { useState, useEffect } from "react";
import axios from "axios";

function ViewCollege()
{
    const [record,setRecord] = useState([])
    useEffect( ()=>
    {
        axios.get("http://localhost:9004/fetchClgData")
        .then((res)=>
        {
           setRecord(res.data)
        })
    },[])



    return(
        <>
          {
          record.map((college) =>
          {
            return(
                <div>{college.name}
                     <div>{college.address}
                        <div>{college.location}

                        </div>

                     </div>
                </div>
            )
          })
          }
          
        </>
    )
}

export default ViewCollege

