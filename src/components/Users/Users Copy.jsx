import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from './user.png'
let Users = (props)=>{
     

let getUsers=()=>{
    if (props.users.length === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        props.setUsers(response.data.items)
    })
    }
}
        // props.setUsers([
        //     {id: 1, photoUrl:'https://sun9-43.userapi.com/impg/b5lHTMWI3pxrVu3FdOOQSK5zH6aIINaInd1oqw/4YMLTVf62es.jpg?size=567x694&quality=95&sign=f49290de900d4d8f3b354dfc8bbb4225&type=album',
        //          followed: false, name: 'Danya L.', satus: 'i am a boss', location:{city:'Moscow', country:'Russia'}},
        //     {id: 2, photoUrl:'https://sun9-2.userapi.com/impg/tTq_6uf0vHaHpFKLPim-H2W370HxUk3hiBhHGA/w88YG-XAa_4.jpg?size=1500x1000&quality=96&sign=a9e8c7ab047c45839bb99776dc9d11b9&type=album',
        //          followed: true, name: 'Arsen Ch.', satus: 'i am a perekup', location:{city:'Osetia', country:'Russia'}},
        //     {id: 3, photoUrl:'https://sun9-26.userapi.com/impg/grIXsqgcyIG77KY_Tlx0p1IJF0SaE7oEIe7qvg/m3TbHnsNXOQ.jpg?size=216x196&quality=96&sign=f5b862ee1b6ec7032dd799f6d20f44f3&type=album',
        //          followed: false, name: 'Maksim R.', satus: 'i am a MPEI student', location:{city:'Jukovski', country:'Russia'}},
        //     ],
        // )
    


    return (<div><button onClick={getUsers}>Get users</button>
        {
            props.users.map( u=> <div className={s.oneUser} key={u.id}>
            <span>
                <div><img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small: userPhoto}></img></div>
                <div>
                    {u.followed 
                    ? <button onClick={()=>{props.unfollow(u.id)}} > Unfollow </button> 
                    : <button onClick={()=>{props.follow(u.id)}} > Follow </button>}
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>
                <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
                </span>
            </span>
             </div>)
            }
        {/* Users will be here! */}

    </div>)
}

export default Users;

