import Dialogs from './Dialogs';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreater(body));
        },
        sendMessage: (body)=>{
            dispatch(sendMessageCreater());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;