import axios from "axios"
import { GETERROR, GETPRODUCT, LOADPRODUCT } from "./newsActionType"

const loadProduct = () =>{
    return {
        type:LOADPRODUCT
    }
}

export const getProduct = (payload) =>{
    return {
        type:GETPRODUCT,
        payload
    }
}

const getError =(payload)=>{
    return{
        type:GETERROR,
        payload
    }
}




// let apiKey="931fbce678064a7086b88ee319710c5a";
export const fetchData = (payload) =>(dispatch)=>{
  dispatch(loadProduct())
  return axios(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&apiKey=931fbce678064a7086b88ee319710c5a`)
  .then((r)=>dispatch(getProduct(r.data.articles)))
  .catch(e=>dispatch(getError(e)))
}
