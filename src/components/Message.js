
import jwt_decode from "jwt-decode";
import React from "react";


const Message = (props) => {


    const messages = props.messages;
    const token = props.token;
//    const decode = jwt_decode(token);
//    const userId = decode.userId;

  
    return (

        <>
       {/* {!messages ? <div>loading.... </div> 
       : messages.map(
        (message) =>{ if(userId ===message.receiverId || userId ===message.senderId) 
        return (
            <>
            <p> from : {message.senderId}</p>
            <p>  {message.text}</p>          
            
            </>
           
        )

        }
        
        
        
        
        )} */}

        </>
    )
}

export default Message;