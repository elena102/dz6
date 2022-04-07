import { createStore, combineReducers } from 'redux';
import { chatReducer } from './reducers/chats';
import { messageReducer } from './reducers/messages';

export const createRootReducer = combineReducers({
   chat: chatReducer,
 message:  messageReducer

})

export const store = createStore(createRootReducer)

