const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'

let initialState = {
    users:
    [],
    //  {id: 1, photoUrl:'https://sun9-43.userapi.com/impg/b5lHTMWI3pxrVu3FdOOQSK5zH6aIINaInd1oqw/4YMLTVf62es.jpg?size=567x694&quality=95&sign=f49290de900d4d8f3b354dfc8bbb4225&type=album',
    //   followed: false, name: 'Danya L.', satus: 'i am a boss', location:{city:'Moscow', country:'Russia'}},
    //  {id: 2, photoUrl:'https://sun9-2.userapi.com/impg/tTq_6uf0vHaHpFKLPim-H2W370HxUk3hiBhHGA/w88YG-XAa_4.jpg?size=1500x1000&quality=96&sign=a9e8c7ab047c45839bb99776dc9d11b9&type=album',
    //   followed: true, name: 'Arsen Ch.', satus: 'i am a perekup', location:{city:'Osetia', country:'Russia'}},
    //  {id: 3, photoUrl:'https://sun9-26.userapi.com/impg/grIXsqgcyIG77KY_Tlx0p1IJF0SaE7oEIe7qvg/m3TbHnsNXOQ.jpg?size=216x196&quality=96&sign=f5b862ee1b6ec7032dd799f6d20f44f3&type=album',
    //   followed: false, name: 'Maksim R.', satus: 'i am a MPEI student', location:{city:'Jukovski', country:'Russia'}},
   
//  newPostText:'Write there.'
 }

const usersReducer = (state = initialState, action)=> {
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                //  users: [...state.users],
                 users: state.users.map( u => {
                     if (u.id===action.userId){
                        return{...u, followed: true}
                     }
                 return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                //  users: [...state.users],
                 users: state.users.map( u => {
                     if (u.id===action.userId){
                        return{...u, followed: false}
                     }
                 return u;
                })
            }
        }
        case SET_USERS:{
            return{ ...state, users:[...state.users, ...action.users]}
        }
        default:{
            return state;
        }
    }   
}

export const followAC=(userId)=>({type: FOLLOW, userId})
export const unfollowAC=(userId)=>({type: UNFOLLOW, userId})
export const setUsersAC=(users)=>({type: SET_USERS, users})
  
// export let updateNewPostTextActionCreater=(text)=>
// ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default usersReducer;