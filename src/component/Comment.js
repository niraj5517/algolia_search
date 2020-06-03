import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

import {
    Card,CardBody,CardTitle,CardSubtitle,CardLink,
   } from 'reactstrap';

   import {timeDifference} from './Timedifference';

class Comments extends Component {

   
    
    
 
  render(){
     var item=this.props.item;
     
    
     var time= timeDifference( Date.now(), item.created_at_i*1000);
     var lin = `https://news.ycombinator.com/item?id=${item.objectID}`;
     var lin2 = `https://news.ycombinator.com/user?id=${item.author}`;
     var lin3 = `https://news.ycombinator.com/item?id=${item.story_id}`

     var term= this.props.search;
     var comment_text=item.comment_text;

     if(term==='')
     {}
     
     else
     {
      if(comment_text!=null)
      comment_text= comment_text.replace(new RegExp(term, "gi"), (match)=> `<mark style="background-color:yellow;">${match}</mark>`);
     }
     console.log(item.points);
    return (
        
             
           <Card >
           <CardBody className='p-1 pb-1 pt-3'>

           <CardSubtitle className='p-0'>
               { item.points==null ? null :<>
              <CardLink href={lin} style={{color:'grey' , fontSize:'11px'}}>{item.points}</CardLink>
               <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span></> }
              <CardLink href={lin2} style={{color:'grey' , fontSize:'11px'}}>{item.author}</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={lin} style={{color:'grey', fontSize:'11px'}}>{ time}</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={lin3} style={{color:'grey' , fontSize:'11px'}}>parent</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <CardLink href={lin3} style={{color:'grey' , fontSize:'11px'}}>on:{item.story_title}</CardLink>
              {/* <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>  */}
    
              </CardSubtitle>
              <CardTitle  > 
              <CardLink href='#' style={{color:'black', fontSize:'13px'}}>
              {/* <span dangerouslySetInnerHTML={{ __html: item.comment_text }} /> */}

              <div> { ReactHtmlParser (comment_text) } </div>
                
              
              </CardLink>
              
              
              </CardTitle >
              
           </CardBody>
          </Card>
      );

  }
  
}


export default Comments;