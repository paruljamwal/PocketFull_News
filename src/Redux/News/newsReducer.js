import { GETERROR, GETPRODUCT, LOADPRODUCT } from "./newsActionType";

const init = {
  loading : false,
  error : false,
  news : []
}

export const newsReducer = (store=init,{type,payload}) =>{
  // console.log(payload);
  switch (type) {
    case LOADPRODUCT :
     return{
      ...store,
      loading:true,
      error:false
     }
     case GETPRODUCT :
      return{
       ...store,
       loading:false,
       error:false,
       news:payload
      }
      case GETERROR :
        return{
         ...store,
         loading:false,
         error:true
        }  
    default:
     return store;
  }
}