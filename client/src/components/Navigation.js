import React from "react";
import {Link} from 'react-router-dom';


const Navigation = () =>{
    return(
        <div className="ui tiny borderless menu">
            <Link to="/">
                <i className="huge home icon"></i>
            </Link>
            <div className= "right menu">
                <Link className= "item" to= "/index">Index WebPage</Link>
            </div>
            <div className="right menu">
                <Link className="item" to="/userlogin">
                    <div className="ui primary button">Sign-In</div>
                </Link>
                <Link className="item" to="/usersignup">
                    <div className="ui primary button">Sign-Up</div>
                </Link>
            </div>
        </div>
    );
}
export default Navigation;






        