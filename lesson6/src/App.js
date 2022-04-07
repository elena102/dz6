import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { messageReducer } from './store/reducers/messages';
import { chatReducer } from './store/reducers/chats';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const mapChat = useSelector (state => state.chat.chat);
  const dispatch = useDispatch;
  const plus = (name) =>{
   const obj = {
    name: name
   }
   dispatch ({type:'plus', payload:obj})
  }
  return(
  <div>
    {
    mapChat.map((chat)=>(
      <li>
        {chat.name}
        <button onClick={() =>dispatch({type:'delete', payload:chat.id})}>удалить</button>
      </li>
    ))
}
<button onClick={() => plus((prompt)())}>добавить</button>
  </div>
  )
};

         
 
  


export default App;
