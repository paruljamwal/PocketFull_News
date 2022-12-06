import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/News/newsAction';
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.css"
const Home = () => {
  const dispatch = useDispatch();
  let [news,setNews] = useState([]);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);
  const newsApp = useSelector(store=>store.newsReducer.news)
  // console.log(newsApp);
  
  const fetchMoreData =()=>{
  
    if(newsApp.length<100){
      setPage(pre=>pre+1)
      setTimeout(() => {
        console.log(page);
        // dispatch(fetchData(page));
      }, 100);
    }
    else{
      setHasMore(false);
    }
  }
  console.log(newsApp)
  useEffect(()=>{
    setNews(newsApp);
    dispatch(fetchData(page));
  },[dispatch,page,news,hasMore])
  return (
    <>
      <span>Featured Artikel</span>
    <div>
      <div></div>
      <div></div>
    </div>
    <div className='articals' >
      {/* <InfiniteScroll
       dataLength={news.length}
        next={fetchMoreData} 
        hasMore={hasMore} 
        loader={<p>Loading...</p>} 
        endMessage={<p>You are all set!</p>} > */}
      {
        newsApp && newsApp.map((e)=>(
          <div key={e.title} >
          <img className='img' src={e.urlToImage} />
          <p>{moment(e.publishedAt).format("Do MMMM YYYY")}</p>
          <p>{e.title}</p>
          <p>{e.content}</p>
           <p><i>{e.author}</i></p>
          </div>
        ))
      }
      {/* </InfiniteScroll> */}
    </div>
    </>
  )
}

export default Home