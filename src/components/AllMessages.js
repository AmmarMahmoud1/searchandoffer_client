import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {toastError}  from '../lib/toastError';
import React  from "react";


const AllMessages = () => {
    const [messages, setMessages] = useState();

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios('http://localhost:5000/api/messages/all',{withCredentials: true});
          console.log(data);
          setMessages(data);
          console.log(messages,'messages');
          
        } catch (error) {
          toastError(
            error.message || 'No messages,  Sorry..!'
          );
          
        }
      })().catch(e => {console.error(e)});
    }, []);



      return (
        <>
        {!messages ? <div>loading</div> : 
       messages.map(
        (message) => {
          return (
            <div> {message.message.text} </div>
          )
        }
        
        )}
        </>
      )





}

export default AllMessages;