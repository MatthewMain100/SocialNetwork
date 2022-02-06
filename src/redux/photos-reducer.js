const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'
const LIKE='LIKE'

let initialState = {
    users:
    [],
 }

const usersReducer = (state = initialState, action)=> {
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                 users: state.users.map( u => {
                     if (u.id===action.userId){
                        return{...u, likesCount:2}
                     }
                 return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                 users: state.users.map( u => {
                     if (u.id===action.userId){
                        return{...u, likesCount:2}
                     }
                 return u;
                })
            }
        }
        case LIKE:{
            return {
                ...state,
                 users: state.users.map( u => {
                     if (u.id===action.userId){
                        return{...u, likesCount: 2}
                     }
                 return u;
                })
            }
        }
        case SET_USERS:{
            return{ ...state, users:action.users}
        }
        default:{
            return state;
        }
    }   
}

export const followAC=(userId)=>({type: FOLLOW, userId})
export const unfollowAC=(userId)=>({type: UNFOLLOW, userId})
export const onLikeAC=(userId)=>({type: LIKE, userId})
export const setUsersAC=(users)=>({type: SET_USERS, users})

export default usersReducer;