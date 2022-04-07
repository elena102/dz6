import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react';

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
  
  export const messageReducer = (state = initialState, action) => {
    switch(action.type){
      default:
      return state
    }
  }
  
  
