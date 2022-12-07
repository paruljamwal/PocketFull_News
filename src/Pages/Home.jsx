import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/News/newsAction';
import moment from "moment";
import "./Home.css"

const Home = () => {
  const dispatch = useDispatch();
  let [news,setNews] = useState([]);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);
  const newsApp = useSelector(store=>store.newsReducer.news)
  // console.log(newsApp);
  const loading = useSelector(store=>store.newsReducer)
  
  const fetchMoreData =()=>{
  
    if(newsApp.length<100){
      setPage(pre=>pre+1)
        // dispatch(fetchData(page));

    }
    else{
      setHasMore(false);
    }
  }

  let data =[
  {
    img:"https://cdn.mos.cms.futurecdn.net/hW3tCxUSeUh3ZpntFvAm4P-1200-80.jpg",
    date:"19th August 2025",
    title:"Apple delays Apple Car until at least 2026 and drops self-driving ambitions"
  },
  {
    img:"https://img.remediosdigitales.com/8bf08b/tesla-model_x-2017-1600-04/840_560.jpeg",
    date:"1th January 2023",
    title:"Tesla’s latest EV will fill up on subsidies"
  },
  {
    img:"https://vcdn1-sohoa.vnecdn.net/2022/12/06/im-654272-jpeg-1670334514-8962-1670334605.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=bM5qHaTIRm30SlcZGZSK-w",
    date:"30th August 2023",
    title:"Musk bị chê khi trang bị phòng ngủ cho nhân viên"
  },

  
]
  // console.log(feature)
  
  useEffect(()=>{
    setNews(newsApp);
    dispatch(fetchData(page));
  },[dispatch,page,news,hasMore])
  return (
    
    <div className='container' >
   
    <div className='line' ></div>
 
      <span>Featured Artikel</span>
    <div className='features' >
      <div className='main' >
        <img src="https://c.biztoc.com/p/57014b478b393445/og.webp" alt="" />
        <p>30th August 2023</p>
        <p>Nearly 2,000 Ford Dealers Buy Into EVs</p>
        <p>Apple has scaled back ambitious self-driving plans for its future electric vehicle and postponed the cars target launch date by about a year to 2026, according to people with knowledge of the matter.… [+7056 chars]</p>
     
      </div>
      
      <div className='news' >
          {
            data && data.map((e)=>(
              
              <div>
              <div>
              <img className='img1'  src={e.img} />
              </div>
              <div className='newsfeeds' >
              <p>{e.date}</p>
              <p><b>{e.title}</b></p> 
              </div>
            </div>
            ))
          }
      </div>
    </div>

    <div className='line' ></div>

    <span>Artikel Terbaru</span>
    <div className='articals' >
      {
        newsApp && newsApp.map((e)=>(
          <div className='artical' >
          <img className='img' src={e.urlToImage} />
          <p>{moment(e.publishedAt).format("Do MMMM YYYY")}</p>
          <p>{e.title}</p>
          <p>{e.content}</p>
           <p><i>{e.author}</i></p>
          </div>
        ))
      }

    </div>
 
    </div>
  )
}

export default Home