import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class Logout extends Component {
    
  
      handle=()=> {
        console.log('aayee')  ;
        localStorage.removeItem('username');}
        

    


    render() {
        return (
            <div className='ml-2'>
                <Link to="/login" >
                <button type="button"
                 component={Link}
                  
                   className="btn btn-dark" 
                   onClick={this.handle}>logout

                   </button>
                   </Link>
            </div>
        )
    }
}
export default Logout;