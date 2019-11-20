import React from 'react';
import SearchBar from '../components/SearchBar';



class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search : ''
        };

    }
   
    onChange = (e) =>{
        this.setState({search : e.target.value})
        console.log(e.target.value)
    }
    
    render(){
        
        return(
            <div>
                <h1>IndexPage</h1>
                <SearchBar />
            </div>
           
            
            
        
        );  
    }
}

export default HomePage;