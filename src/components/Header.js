import React from "react"
import "./Dashboard.css"
import Reddit from "../assets/reddit.png"
function Header(props) {


    return (
        <div className="row">
            <div className="col-lg-12 d-flex headerSection">
                <div className="d-flex w-100" style={{height:'60px', borderBottom: '1px solid'}}>
                    <img className="p-2" src={Reddit} alt="logo" />
                    
                    <h3 className="w-100 mt-3">
                        {props.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Header;