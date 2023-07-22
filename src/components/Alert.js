import React from 'react'


function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.mode} alert-dismissable rounded-top-0 rounded-bottom-1 fade show px-2 py-1`} role="alert">
        {/* <p className="fs-5 mb-0 d-flex">
            Alert
            <button type="button" className="btn-close ms-auto px-2 py-1" data-bs-dismiss="alert"></button>
        </p> */}
        <p className="fs-6 mb-0">{props.alert.message}</p>
    </div>
  )
}

export default Alert