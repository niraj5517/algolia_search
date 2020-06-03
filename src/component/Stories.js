import React, { Component } from 'react';

import {
    Card,CardBody,CardTitle,CardSubtitle,CardLink,
   } from 'reactstrap';

   import {timeDifference} from './Timedifference';

class Stories extends Component {

    
    
    
 
  render(){
     var item=this.props.item;
    
     var time= timeDifference( Date.now(), item.created_at_i*1000);
     var lin = `https://news.ycombinator.com/item?id=${item.objectID}`;
     var lin2 = `https://news.ycombinator.com/user?id=${item.author}`;

     var term= this.props.search;
     var title=item.title;
     var url =item.url;
     var author=item.author;
     var  points=item.points;
     var num_comments=item.num_comments;
     if(term==='')
     {}
     
     else
     {
         if(title!=null)
        title= title.replace(new RegExp(term, "gi"), (match)=> `<mark style="background-color:yellow;">${match}</mark>`);
         if(url!=null)
         url= url.replace(new RegExp(term, "gi"), (match)=> `<mark style="background-color:yellow;">${match}</mark>`);
          if(author!=null)
         author= author.replace(new RegExp(term, "gi"), (match)=> `<mark style="background-color:yellow;">${match}</mark>`);

        //  points= points.replace(new RegExp(term, "gi"), (match)=> `<i style="background-color:powderblue;">${match}</i>`);
         
        //  num_comments=points.replace(new RegExp(term, "gi"), (match)=> `<i style="background-color:powderblue;">${match}</i>`);
     }
     
     
    
    return (
        
             
           <Card >
           <CardBody className='p-1 pb-0'>
              <CardTitle  > 
              <CardLink href={lin} style={{color:'black', fontSize:'17px'}}>
              <span dangerouslySetInnerHTML={{ __html: title }} />
                  {/* {title} */}
                  </CardLink>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={item.url} style={{color:'grey' , fontSize:'13px'}}>
                  {/* ({url}) */}
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                  </CardLink>
              {/* <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>  */}
              
              </CardTitle >
              <CardSubtitle className='p-0'>
              <CardLink href={lin} style={{color:'grey' , fontSize:'11px'}}>{points}</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={lin2} style={{color:'grey' , fontSize:'11px'}}>{author}</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={lin} style={{color:'grey', fontSize:'11px'}}>{ time}</CardLink>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <CardLink href={lin} style={{color:'grey' , fontSize:'11px'}}>{num_comments} &nbsp;comments</CardLink>
              {/* <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>  */}
    
              </CardSubtitle>
           </CardBody>
          </Card>
      );

  }
  
}


export default Stories;