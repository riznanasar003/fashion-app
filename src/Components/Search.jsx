import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {
            "fid":""
        }
    )
    const [result, setResult] = useState([])

    const fashionDelete = (id) =>{
        let input = {"_id": id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Deleted")
                    
                } else {
                    alert("Error in Deletion")
                    
                }
            }
        ).catch()
    }
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor=".form-label">FASHION ID</label>
                        <input type="text" className="form-control" name="fid" value={data.fid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readValue}>SEARCH</button>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            {result.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col xl-3 col-xxl-3">

                                    <div class="card">
                                    <img src={value.image} class="card-img-top" alt="..." height="300px"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.fname}</h5>
                                            <p class="card-text">{value.fid}</p>
                                            <p class="card-text">{value.price}</p>
                                            <button className="btn btn-danger" onClick={()=>{fashionDelete(value._id)}}>REMOVE</button>
                                        </div>
                                </div>
                                </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search