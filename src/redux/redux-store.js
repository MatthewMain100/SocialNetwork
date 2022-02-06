
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import newsReducer from "./news-reducer"
import usersReducer from "./users-reducer"
import photosReducer from "./photos-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    photosPage: photosReducer,
});

let store = createStore(reducers);

export default store;