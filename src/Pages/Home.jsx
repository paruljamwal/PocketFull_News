import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/News/newsAction';
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroll-component';
const Home = () => {
  const dispatch = useDispatch();
  // let [news,setNews] = useState([]);
  const newsApp = useSelector(store=>store.newsReducer.news)
  // console.log(newsApp);

  // const fetchMoreData =()=>{
  //   setNews(pre=>pre.length+10)
  // }
  // console.log(news)
  useEffect(()=>{
    dispatch(fetchData());
    

  },[dispatch])
  return (
    <div>
 
      {
        newsApp && newsApp.map((e)=>(
          <div>
          <img src={e.urlToImage} />
          <p>{moment(e.publishedAt).format("Do MMMM YYYY")}</p>
          <p>{e.title}</p>
          <p>{e.content}</p>
           <p>{e.author}</p>
          </div>
        ))
      }
  
    </div>
  )
}

export default Home