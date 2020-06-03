import React, { Component } from 'react';

import {FaSistrix} from 'react-icons/fa'
import Logout from '../component/Logout'
import {
    Navbar,Nav,NavItem,NavbarText,
    InputGroup, InputGroupAddon, InputGroupText, Input,
  } from 'reactstrap';



class HomeNavBar extends Component {

    constructor(props)
    {
        super(props);
        this.state={val:this.props.search};
    }


    handlechange =(e)=>{
     this.props.handlesearch(e.target.value);
    this.setState({val:e.target.value},()=>{
      console.log(this.state.val);
    });
    
    }
  
 
  render(){
    
    
    return (
        <div className='  ' >

        <Navbar    style={{backgroundColor:'#FF742B' , height: '60px' }}  expand="xs">
        
        <Nav className="mr-auto d-flex " navbar>
            <NavItem className='mr-1'>
        <NavbarText   className = 'p-0  my-auto  d-md-inline-flex d-none mr-auto'
         style={{fontSize:'16px', width:'200px'}}>
           Welcome<br/>
           {window.localStorage.getItem('username')}
           
           </NavbarText>
        </NavItem>
        </Nav>
       
        <InputGroup className='h-100' >
        <InputGroupAddon addonType="prepend">
          <InputGroupText className='' ><span><  FaSistrix /></span></InputGroupText>
        </InputGroupAddon>
        <Input 
        placeholder="Search stories by title, url or author" 
        className=' h-100' 
        value={this.state.val}
        onChange= {this.handlechange}
        />
         </InputGroup>
         <Logout/>

        </Navbar>

        
      </div>
      );

  }
  
}


export default HomeNavBar;