import {FETCH_ALL,CREATE,DELETE,UPDATE} from '../constants/actionTypes.js';

// state gonna be posts 
 const post= (posts=[],action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
     
        case CREATE:
            return [...posts,action.payload];

        case UPDATE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post );    

            // case LIKE:
            //     return posts.map((post)=> post._id === action.payload._id ? action.payload : post ); 

        case DELETE:
                return posts.filter((post)=> post._id !== action.payload );  

        default:
           return posts;
    }
}

export default post


