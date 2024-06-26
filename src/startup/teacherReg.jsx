import { useState, useEffect} from "react"
import axios from "axios"




function TeacherReg()
{
    const [teacher,setTeacher] = useState({})
    const [record, setRecord] = useState([]);

    useEffect( ()=>
        {
            axios.get("http://localhost:9004/fetchClgData")
            .then((res)=>
            {
               setRecord(res.data)
            })
        },[])

    const handleChange = (e) =>
        {
            setTeacher({...teacher,[e.target.name] : e.target.value})
        }

    const handleSubmit = (e) =>
        {
            e.preventDefault()
            console.log(teacher)

            axios.post('http://localhost:9004/addTeacher',teacher)
            .then((res) =>
                {
                    console.log(res)
                    alert(res.data)

                })
        }
    
    return(
        <>
           <h1>Teacher Registration</h1>
           <form action="" method="post" onSubmit={handleSubmit}>
              <div className="wrapper">

                 <div className="container">
                    <label>Faculity Name: </label>
                    <input type="text" name="tname" onChange={handleChange}></input>
                 </div>
                 <br/>

                 <div className="container">
                    <label>Email: </label>
                    <input type="text" name="temail" onChange={handleChange}></input>
                 </div>
                 <br/>

                 <div className="container">
                    <label>Department: </label>
                    <input type="text" name="department" onChange={handleChange}></input>
                 </div>
                 <br/>

                 <div className="container">
                    <label>College Name: </label>
                    <select name="tclg" onChange={handleChange}>
                        <option>Choose</option>
                        { 
                       
                            record.map((ls)=>
                            {
                                return(
                                    <option key={ls._id} value={ls.name}>
                                        {ls.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    
                 </div>
                 <br/>

                 <div className="container">
                    <button type="submit">Register</button>
                 </div>


              </div>
           </form>
        </>
    )
}

export default TeacherReg