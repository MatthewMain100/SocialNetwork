import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import sideBarReducer from "./sidebar-reducer";


let store={
    _state:{
        profilePage:{
           posts:[
            {id: 1, message: 'Hello!', likesCount: 12},
            {id: 2, message: "It's my first post.", likesCount: 3},
            {id: 3, message: 'F*ck u', likesCount: 0}
        ],
        newPostText:'Write there.'
        },
    
        dialogsPage:{
            dialogs:[
            {
                id: 1, 
                name: 'Даниил Лапаев',
                avatar:"https://sun9-43.userapi.com/impg/b5lHTMWI3pxrVu3FdOOQSK5zH6aIINaInd1oqw/4YMLTVf62es.jpg?size=567x694&quality=95&sign=f49290de900d4d8f3b354dfc8bbb4225&type=album"
            },
            {
                id: 2, 
                name: 'Arsen',
                avatar:"https://sun9-2.userapi.com/impg/tTq_6uf0vHaHpFKLPim-H2W370HxUk3hiBhHGA/w88YG-XAa_4.jpg?size=1500x1000&quality=96&sign=a9e8c7ab047c45839bb99776dc9d11b9&type=album"
            },
            {
                id: 3, 
                name: 'Максим Рябов',
                avatar:"https://sun9-26.userapi.com/impg/grIXsqgcyIG77KY_Tlx0p1IJF0SaE7oEIe7qvg/m3TbHnsNXOQ.jpg?size=216x196&quality=96&sign=f5b862ee1b6ec7032dd799f6d20f44f3&type=album"
            }
            ],
        
            messages:[
            { id: 1, message: 'Макс лох.' },
            { id: 2, message: 'Даня лох!' },
            { id: 3, message: 'Обы вы лошки..' },
            ],

            newMessageBody:'Write something'
        }, 
    
        newsPage:{
            posts:[
             {id: 1, message: 'Hello!', likesCount: 12},
             {id: 2, message: "It's my first post.", likesCount: 3},            
             {id: 3, message: 'F*ck u', likesCount: 0}
             ],
             newPostText:'Write there.'
             },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState(){
        return this._state;
    },
    ////Паттерн
    subscribe(observer) {
        this._callSubscriber=observer;
    },

    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.newsPage=newsReducer(this._state.newsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;