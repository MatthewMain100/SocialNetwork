const UPDATE_NEW_NEWS_BODY ='UPDATE-NEW-NEWS-BODY'
const SEND_NEWS ='SEND-NEWS'

let initialState= {
    posts:[
     {id: 1, message: 'Hello!', likesCount: 12},
     {id: 2, message: "It's my first post.", likesCount: 3},            
     {id: 3, message: 'F*ck u', likesCount: 0}
     ],
     newPostText:'Write there.'
     }

const newsReducer =(state = initialState, action)=> {
    switch(action.type){
        case UPDATE_NEW_NEWS_BODY:{
            state.newPostText = action.body;
            return state;
        }
        case SEND_NEWS:{
            let body = state.newPostText;
            state.newPostText = '';
            state.posts.push({ id: 4, message: body, likesCount: 0});
            return state;
        }
        default:
            return state;
    }
}

export let sendNewsCreater=()=>({type: SEND_NEWS})
  
export let updateNewNewsBodyCreater=(body)=>
({type: UPDATE_NEW_NEWS_BODY, body: body})

export default newsReducer;