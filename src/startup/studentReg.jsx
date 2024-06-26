

function StudentReg()
{
    return(
        <>
           <form action="" method="post">
             <div className="wrapper">

                <div className="container">
                    <label>Student Name: </label>
                    <input type="text" name="sname"></input>
                    <br/>
                </div>

                <div className="container">
                    <label>Course: </label>
                    <input type="text" name="course"></input>
                    <br/>
                </div>

                <div className="container"></div>
             </div>
           </form>
        </>
    )
}