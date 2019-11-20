import React from 'react';


class UserLoginPage extends React.Component{
    

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
            <button class="ui button" type="submit">Submit</button>
            </form> 
        
        )
    }
}
export default UserLoginPage;