import React from 'react';
import { createStore } from 'redux';

const initialState = {
   
  chat:[
    {id: 1,
      name:'Иван'},
    {
      id: 2,
      name: 'Павел'}

  ],
  message: [{
    chatId:1,
    text: 'Привет'
  },
{chatId:2,
  text: 'как дела?'}]

};

export const chatReducer = (state = initialState, action) => {
  switch(action.type){
    case'delete':
    return{
      ...state,
      chat: state.chat.filter((item)=> item.id !==action.payload)
    }
    case'add':
    return{
      ...state,
      chat: [...state.chat, action.payload]
    }
    default:
    return state
  }
}