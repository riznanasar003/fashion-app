import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data,setdata] = useState(
        {
            "fid":"",
            "fname":"",
            "price":"",
            "image":""
        }
    )
    const inputHandler = (event) =>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch()
    }
  return (
    <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">FASHION ID</label>
                            <input type="text" className="form-control" name="fid" value={data.fid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">FASHION NAME</label>
                            <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">PRICE</label>
                            <input type="text" className="form-control" name="price" value={data.price} onChange={inputHandler}/>

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">IMAGE</label>
                            <input type="text" className="form-control" name='image' value={data.image} onChange={inputHandler}/>


                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Add