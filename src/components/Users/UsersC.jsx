import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from './user.png'

     
class Users extends React.Component{

    // constructor(props){
    //     super(props)
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
    //             this.props.setUsers(response.data.items)
    //         })
            

    // }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return (<div>
            {
                this.props.users.map( u=> <div className={s.oneUser} key={u.id}>
                <span>
                    <div><img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small: userPhoto}></img></div>
                    <div>
                        {u.followed 
                        ? <button onClick={()=>{this.props.unfollow(u.id)}} > Unfollow </button> 
                        : <button onClick={()=>{this.props.follow(u.id)}} > Follow </button>}
                        
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

}

export default Users;

