import React, { Component } from 'react';


import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
  } from 'reactstrap';

  class HomeDropdown extends Component {

    constructor(props)
    {
        super(props);
        this.state={search:'All', by:'Popularity',for:'All time'};
    }

    changeSearchValue=(e)=>{
        this.props.handlechange(e.currentTarget.value);
        this.setState({search: e.currentTarget.textContent});
        
    }


    changeByValue=(e)=>{
        this.props.handlesortby(e.currentTarget.value);
        this.setState({by: e.currentTarget.textContent});
    
     }

     changeForValue=(e)=>{
        this.props.handlefor(e.currentTarget.value);
        this.setState({for: e.currentTarget.textContent});
    
     }
   
  
 
  render(){
     
    
    return (
        
        

        <div className='mt-2  d-inline-flex justify-content-start row'>
            <div className='d-inline-flex mx-3 col-md-3 justify-content-start'>
             <p  className='p-2'>Search</p>
             <UncontrolledDropdown size='sm' >
                <DropdownToggle caret>
                    {this.state.search}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                    value="(story,comment)"
                    onClick = {this.changeSearchValue} >All</DropdownItem>
                    <DropdownItem 
                     value="story"
                     onClick = {this.changeSearchValue} > Stories </DropdownItem>
                    <DropdownItem
                    value="comment"
                   onClick = {this.changeSearchValue} >Comments</DropdownItem>
                
                </DropdownMenu>
                </UncontrolledDropdown>

            </div>
       

            <div className='d-inline-flex mx-3 col-md-3 justify-content-start'>
             <p  className='p-2'>By</p>
             <UncontrolledDropdown size='sm' >
                    <DropdownToggle caret>
                    {this.state.by}
                    </DropdownToggle>
                    <DropdownMenu>

                    <DropdownItem
                    value="byPopularity"
                    onClick = {this.changeByValue} >
                        
                        Popularity
                        
                        </DropdownItem>
                    <DropdownItem
                    value="byDate"
                      onClick = {this.changeByValue} 
                     >
                         Date
                        
                     </DropdownItem>

                 </DropdownMenu>
                </UncontrolledDropdown>

            </div>

            <div className='d-inline-flex mx-2 col-md-3 justify-content-start'>
             <p  className='p-2'>For</p>
             <UncontrolledDropdown size='sm' >
                <DropdownToggle caret>
                    {this.state.for}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem 
                    value='all'
                    onClick = {this.changeForValue} >ALL time</DropdownItem>
                    <DropdownItem 
                    value='last24h'
                    onClick = {this.changeForValue} >Last 24h</DropdownItem>
                    <DropdownItem
                    value='pastWeek'
                    onClick = {this.changeForValue}>Past week</DropdownItem>
                    <DropdownItem 
                    value='pastMonth'
                    onClick = {this.changeForValue}>Past month</DropdownItem>
                    <DropdownItem
                    value='pastYear'
                    onClick = {this.changeForValue}>Past year</DropdownItem>
                    

                </DropdownMenu>
                </UncontrolledDropdown>

            </div>

           
        </div>


     
      );

  }
  
}


export default HomeDropdown;