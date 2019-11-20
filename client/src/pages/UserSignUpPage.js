import React from 'react';


class UserSignUpPage extends React.Component{
    

    render(){

        return(
            <form className="ui form">
            <div className="field">
                <label>UserName</label>
                <input type="text" name="first-name" placeholder="Billy..."></input>
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="last-name" placeholder="@#ABc?...."></input>
            </div>
            <div className="field">
                <div class="ui checkbox">
                <input type="checkbox" tabindex="0" ></input>
                <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button class="ui button" type="submit">Sign Up</button>
            </form> 
        
        )
    }
}
export default UserSignUpPage;