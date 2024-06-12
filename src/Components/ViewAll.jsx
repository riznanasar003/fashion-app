import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = () =>{
        axios.post("http://localhost:8080/view",data).then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col xl-3 col-xxl-3">

                                    <div class="card">
                                        <img src={value.image} class="card-img-top" alt="..." height="300px"/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.fname}</h5>
                                                <p class="card-text">{value.fid}</p>
                                                <p class="card-text">{value.price}</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
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
    )
}

export default ViewAll