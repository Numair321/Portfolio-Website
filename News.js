{/*   import React,{useEffect,useState} from 'react'
 import NewsItem from './NewsItem'
 import Spinner from './Spinner';
 import PropTypes from 'prop-types'
 import InfiniteScroll from "react-infinite-scroll-component";

    const News = (props)=> {
       const[articles,setArticles]=useState([])
       const[loading,setLoading]=useState([true])
       const[page,setPage]=useState(1)
       const[totalResult,setTotalResult]=useState(0)
       //document.title= `${this.props.category}-NewsMonkey`;
   const  capitalizeFirstLetter=(string)=> {
        return string.chatAt(0).toUpperCase()+string.slice(1);
     }
    // constructor(props){
    // super(props);
     // console.log("hello i am constructor");
     // this.state={
      //   articles:this.articles,
      //articles:[],
      //   loading:true,     
       //  page:1,
        // totalResult:0
   //   }
      const  updateNews=async()=>{
       props.setProgress(10);
     //  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
     const url=  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       // setState({loading: true}); 
        setLoading(true)
       let data= await fetch(url);
      props.setProgress(30);
       let parseData= await data.json(); 
      props.setProgress(70);
     //  console.log(parseData);
       setArticles(parseData.articles)
       setTotalResult(parseData.totalResult)
       setLoading(false)
      props.setProgress(100);
     }
     useEffect(()=>{
          updateNews();
          //eslint-disable-next-line
     },[])
    // componentDidMount=()=>{
     {/*  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
       this.setState({loading: true}); 
       let data= await fetch(url);
       let parseData= await data.json();
     //  console.log(parseData);
   this.setState({articles:parseData.articles,totalResult:parseData.totalResult,loading:false})   */}
  // this.updateNews();
   //  }
   //const handleNextClick=async()=>{ 
      // setPage(page+1)
      // updateNews();
    // }
    // handlePrevClick= async()=>{
     //  console.log("prev")
     //   setState(page-1);
      //   updateNews();
    // }
  {/*  const fetchMoreData = async() => {
       //const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
       //const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
     const url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true}); 
      setPage(page+1)
       let data= await fetch(url);
       let parseData= await data.json();
     //  console.log(parseData);
     setArticles(articles.concat(parseData.articles))
     setTotalResult(parseData.totalResult)
     //  setState({ articles:articles.concat(parseData.articles),totalResult:parseData.totalResult,loading:false});
      
     };
    
     return (
      <> 
         
       <h2 className="text-center" style={{margin:`35px 0px`,marginTop:'90px'}}>NewsMonkey-Top headline from {props.category}</h2>
          { loading &&<Spinner/>} 
         <InfiniteScroll
           dataLength={ articles.length}
           next={fetchMoreData}
           hasMore={articles.length!==totalResult}
           loader={<Spinner/>}
        >
        <div className="container">

         <div className="row">
         {/*!this.state.loading &&  this is use before this key word in beloe line*/ }
 {/*       {articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
         <NewsItem title={element.title ? element.title : ""} description={element.description?element.description:""} imageUrl={element.urlToImage}  url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
         })}  
       </div>
       </div>
       </InfiniteScroll>
      {/*   <div className="container d-flex justify-content-between">
       <button disabled={!this.state.page+1>Math.ceil(this.state.totalResult/8)}  type="button" className="btn btn-dark " onClick={this.handlePrevClick} > &larr;Previos</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/8)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
          </div>  */}
          
  {/*     </>
        
     )
        } 
      
News.defaultProps={
  country:'in',
  pageSize:10,
 category:'general'
  }
  News.PropsTypes= {
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string
    }
  

  export default News   */}

    