import React from "react"
import "./Dashboard.css"
function Header(props) {


    return (
        <div className="row">
            <div className="col-lg-12 d-flex headerSection">
                    <img src="" alt="logo" />
                    <h3>
                        {props.title}
                    </h3>
            </div>
        </div>
    )
}

export default Header;