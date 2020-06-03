

export function timeDifference (current, previous) {
    

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return  Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}


export function filterTimeQuery (filter) {

    var d=Date.now();
    d=d/1000;
   
    var day=60*60*24;
    var week=day*7;
    var month=day*30;
    var year=day*365;

    if(filter==='all')
    return filter=`(created_at_i<${d})`;

    else if(filter==='last24h')
    return filter=`(created_at_i>${d-day})`;

    else if(filter==='pastWeek')
    return filter=`(created_at_i>${d-week})`;

    else if(filter==='pastMonth')
    return filter=`(created_at_i>${d-month})`;

    else if(filter==='pastYear')
    return filter=`(created_at_i>${d-year})`;

    return filter=`(created_at_i<${d})`;
}



/* <Pagination size="sm" aria-label="Page navigation example"
         
         >
       <PaginationItem>
         <PaginationLink 
         onClick={e => this.handleFirstPage(e)}
         first  />
       </PaginationItem>
       <PaginationItem>
         <PaginationLink previous 
         onClick={e => this.handlePreviousPage(e)}
         />
       </PaginationItem>
 
       
       {
         arr.length==0?null:
        
         arr.map((item,i) => {
           
            console.log(i+5)
           
            
            return (
              
             <PaginationItem active={i === this.state.currentPage} key={i}>
            <PaginationLink onClick={e => this.handlePageClick(e, i)} href="#">
             {i + 1}
             </PaginationLink>
             </PaginationItem>
             
              
            
            );
         }
         )
       }
        
 
     
 
      
       <PaginationItem>
         <PaginationLink next 
         onClick={e => this.handleNextPage(e)} />
       </PaginationItem>
       <PaginationItem>
         <PaginationLink last 
         onClick={e => this.handleLastPage(e)} />
       </PaginationItem>
     </Pagination> */



  //    handlePageClick = (e, index) => {
  //     e.preventDefault();
  //     this.setState({currentPage:index},this.componentDidMount);
  //  };

  //  handleFirstPage =(e) =>{
  //   e.preventDefault();
  //   var page= this.state.currentPage;
  //   if(page!=0)
  //   this.setState({currentPage:0},this.componentDidMount);
  //  }
  
  //  handlePreviousPage =(e) =>{
  //   e.preventDefault();
  //   var page= this.state.currentPage;
  //   if(page>0)
  //   this.setState({currentPage:page-1},this.componentDidMount);
  //  }

  //  handleNextPage =(e) =>{
  //   e.preventDefault();
  //   var page= this.state.currentPage;
  //   if(page+1<this.state.pages);
  //   this.setState({currentPage:page+1},this.componentDidMount);
  //  }

  //  handleLastPage =(e) =>{
  //   e.preventDefault();
  //   var page= this.state.currentPage;
  //   if(page+1!=this.state.pages)
  //   this.setState({currentPage:this.state.pages-1},this.componentDidMount);
  //  }

  /* <DropdownItem
                    value='custom
                    onClick = {this.changeForValue}>Custom Range</DropdownItem> */