import React from 'react'

const Add = () => {
  return (
    <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">FASHION ID</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">FASHION NAME</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">PRICE</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor=".form-label">IMAGE</label>
                            <input type="text" className="form-control" />


                            </div>
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Add