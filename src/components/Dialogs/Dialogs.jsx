import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';


const Dialogs =(props)=>{

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = state.messages.map( m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (elem) =>{
        let body = elem.target.value;
        props.updateNewMessageBody(body);
    }

return(
<div className={s.dialogs}> 

    <div className={s.dialogsItems}>
        {dialogsElements}
    </div>

    <div className={s.messages}>
        <div>{messagesElements}</div>
        <div><textarea value={newMessageBody} onChange={onNewMessageChange}> </textarea></div>
        
        <div><button onClick={onSendMessageClick}> Send </button></div>
    </div>
    
</div>
    );
}

export default Dialogs;