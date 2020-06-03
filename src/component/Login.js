import React, { Component } from 'react';

import {
   Container,Card,CardBody,CardHeader,CardFooter,Button,  
   InputGroup, InputGroupText, Input,
  } from 'reactstrap';
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor()
    {
        super();
        this.state={username:'',password:''}
        
    }

    handleChangeUsername=(e)=>{
        this.setState({username: e.target.value});
    }

    handleChangePassword=(e)=>{
        this.setState({password: e.target.value});
    }
 
    submit=()=>{
        var username=this.state.username;
        var password=this.state.password;
        if(username==null||password==null||
            (username!=null&&username.length===0)||(password!=null&&password.length===0))
          return false;

        localStorage.setItem('username', username);
    
        
        
    }


 
  render(){
     
    
    return (
        <div 
        style={{

            backgroundColor: '#282c34',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>
         
         <Container className='d-flex align-items-center justify-content-center h-100 mx-auto'>
             
      <Card className=' d-flex align-items-center justify-content-center px-0 ' > 
          <CardHeader className='d-flex justify-content-center' 
             style={{fontSize:'27px',backgroundColor:'#FF742B' ,width:'100%'}}>
             Login
          </CardHeader>
          <CardBody>
              
              <InputGroup className='p-3' >
                    <InputGroupText className='mx-4 ' style={{backgroundColor:'#FF742B'}} >
                        Username
                    </InputGroupText>
               
                        <Input 
                        required
                        placeholder="eg: jack43"
                        value={this.state.username}
                        onChange={this.handleChangeUsername}
                        
                        className=''   />
              </InputGroup>

              <InputGroup className='p-3' >
                <InputGroupText className='mx-4 ' style={{backgroundColor:'#FF742B'}}  >Password</InputGroupText>
                
                <Input
                required
                maxLength='8'
                 placeholder="********" 
                 value={this.state.password}
                 type='password'
                 onChange={this.handleChangePassword}
                className=''   />
              </InputGroup>

          </CardBody>

          <CardFooter  className='d-flex justify-content-end' 
                 style={{  width:'100%'}} >
             <Link to='/?page=&query='>
                    <Button onClick={this.submit} >
                        Submit
                    </Button>
             </Link> 
             
          </CardFooter>
        
         </Card>
     </Container>

      </div>
      );

  }
  
}


export default Login;