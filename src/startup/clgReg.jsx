import { useState } from "react"
import axios from "axios"




function ClgRegisteration()
{
    const [college,setCollege] = useState({})

    
    
    const handleChange = (e)=>
        {
            setCollege({...college,[e.target.name] : e.target.value})
        }
    
    
    
        const handleSubmit = (e)=>
        {
            e.preventDefault()
            console.log(college)

            axios.post('http://localhost:9004/addCollege',college)
            .then((res)=>
                {
                    console.log(res)
                    alert(res.data)
                })


        }




    return(
        <>
           <form action="" method="post" onSubmit={handleSubmit}>
            <div className="wrapper">

                <div className="container">
                    <label>College Name:  </label>
                    <input type="text" name="name" onChange={handleChange}></input>
                </div>
                <br/>

                <div className="container">
                    <label>Address:  </label>
                    <input type="text" name="address" onChange={handleChange}></input>
                </div> 
                <br/>

                <div className="container">
                    <label>Location:  </label>
                    <input type="text" name="location" onChange={handleChange}></input>
                </div>
                <br/>

                <div className="container">
                    <button type="submit">Submit</button>
                </div>
            </div>
           </form>
        </>
    )
}

export default ClgRegisteration