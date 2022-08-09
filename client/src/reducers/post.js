
// state gonna be posts 
 const post= (posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
     
        case 'CREATE':
            return [...posts,action.payload];

        default:
           return posts;
    }
}

export default post


