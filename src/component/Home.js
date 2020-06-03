import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Stories from './Stories'
import Comments from './Comment'


import {filterTimeQuery} from './Timedifference'
import HomeNavBar from '../Navbar/HomeNavbar';
import HomeDropdown from './Dropdown';

let urlPopularity ='http://hn.algolia.com/api/v1/search?';
let urlDate ='http://hn.algolia.com/api/v1/search_by_date?';


class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state={
          result:[],tag:"(story,comment)",search:'',for:'all',by:'byPopularity',
          pages:0,currentPage:0 ,processingTime:0,
      
      };
      
        
    }

   
 

   UNSAFE_componentWillMount=()=>{
    
     var params = new URLSearchParams(this.props.location.search);

     var query=params.get('query');
     var pageno=params.get('page');

     if(query!=null )
     {
       this.setState({search:query});
     }

     if(pageno!=null&&pageno.length!==0)
     { 
       if(parseInt(pageno)>=0)
       this.setState({currentPage:parseInt(pageno)});
     }
     
    
   }

    handlesearch =(e)=>{
      var currentPage=this.state.currentPage;
      
      this.props.history.push(`/?page=${currentPage}&query=${e}`);
      
     this.setState({search:e},this.componentDidMount);
    }
    
    handlechange =(e)=>{
      
     this.setState({tag:e},this.componentDidMount);
    }

    handlesortby =(e)=>{
      
     this.setState({by:e},this.componentDidMount);
    }


    handlefor=(e)=>{
     this.setState({for:e},this.componentDidMount);
    }


    handlePageChange = (event, value) => {
      
      var currentPage=value-1;
      var search =this.state.search;
      this.props.history.push(`/?page=${currentPage}&query=${search}`);
      this.setState({currentPage:value-1},this.componentDidMount);
    
    };

    
    componentDidMount(){  

      var filter=this.state.for;
      var url = this.state.by;
      var currentPage=this.state.currentPage;
      var search =this.state.search;
     
    
      filter= filterTimeQuery(filter);

     if(url==='byPopularity') url= urlPopularity;
     else if(url==='byDate') url=urlDate;

    axios({
       url:url,
       params:{
         tags:this.state.tag,
         page:currentPage,
         query:search,
         numericFilters:filter,
       }
     

      } ).then(response => {
      
      
      this.setState({
        result:response.data.hits,
        resultCount:response.data.nbHits,
        pages: response.data.nbPages,
        processingTime:response.data.processingTimeMS,
      })
      
       },error =>{
         
          console.log(error);
        });
    }

    
  render(){
    
     var res=this.state.result;
     var currentPage=this.state.currentPage;
    
    
    return (
   <div className='px-lg-5 mb-5' style={{height:'' }} >
        <HomeNavBar handlesearch={this.handlesearch} search={this.state.search}/>
       
            <div className="" style={{backgroundColor :'#edede8',height:'100vh'}}>

                  <div className='px-lg-5  d-flex justify-content-between' >
                    
                      <HomeDropdown 
                        handlechange={this.handlechange} 
                      handlefor={this.handlefor} 
                      handlesortby={this.handlesortby}
                      />

                      <div className='d-inline-flex mx-1  my-3 col-sm-1 justify-content-end'
                          style={{fontSize:'14px'}}>
                          {this.state.resultCount}
                          &nbsp;&nbsp;results&nbsp;({this.state.processingTime/1000}&nbsp;&nbsp;seconds)
                      </div>
                  </div>

                  <div className='d-flex p-2 justify-content-center'>

                      <Pagination 
                      color="secondary"
                      count={this.state.pages} 
                      page={currentPage+1} 
                      onChange={this.handlePageChange}
                      showFirstButton showLastButton />
                  
                  </div>
                  
                  {
                      res.length===0?
                      <div className="d-flex justify-content-center p-2 bd-highlight">
                      <h3 className='mt-5 ' >
                      We found no items matching <b>{this.state.search}</b> for this period. 
                        </h3>
                        </div>:
                      res.map((item,key) => {
                        
                        return (
                          
                          item.comment_text==null  ?
                          <Stories  key={key} item={item} search={this.state.search}/>:
                          <Comments key={key} item={item} search={this.state.search}/>  
                          );
                      })

                  }

                      <div style={{height:'40px'}}>

                          <div className='d-flex p-2 m-5 justify-content-center'>

                              <Pagination 
                              color="secondary"
                              count={this.state.pages} 
                              page={this.state.currentPage+1} 
                              onChange={this.handlePageChange}
                              showFirstButton showLastButton />

                        </div>
                  </div>
            
              </div>
        
       
      </div>
      );

  }
  
}


export default Home;
