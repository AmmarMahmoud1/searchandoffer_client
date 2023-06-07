import React, {useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
// import { toastError } from '..toastError/lib/toastError';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Chat({gotCookie}) {
  let { id } = useParams();

const [messages, setMessages] = useState([]);
const [title, setTitle] = useState('');
const [sender, setSender] = useState('');
const [receiver, setReceiver] = useState('');
const [receiverId, setReceiverId] = useState('');
const [message, setMessage] = useState('');
const [postId, setPostId] = useState('');
const chatContainerRef = useRef(null);
const scrollToBottom = () => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
};

useEffect(() => {
  scrollToBottom();
}, [messages]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios(`http://localhost:8080/api/messages/post/allmessages/${id}`, { withCredentials: true });

      const sortedMessages = data.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));

      setMessages(sortedMessages);
      setPostId(id);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(); // Initial fetch

  const interval = setInterval(fetchData, 4000); // Fetch data every 4 seconds

  return () => {
    clearInterval(interval); // Cleanup interval on component unmount
  };
}, [id]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios(`http://localhost:8080/api/${id}`, { withCredentials: true });

      console.log(data.userId);
      setTitle(data.title);
      setReceiverId(data.userId);
    } catch (error) {
      console.log(error);
      // toastError(error.message || 'No posts, Sorry..!');
    }
  };

  fetchData();
}, [id]);

useEffect(() => {
  const fetchData = async () => {
    try {
      if (receiverId !== '') {
        const { data } = await axios(`http://localhost:8080/api/user/${receiverId}`, { withCredentials: true });

        console.log(data);
         setReceiver(data.name)
      }
    } catch (error) {
      console.log(error);
      // toastError(error.message || 'No posts, Sorry..!');
    }
  };

  fetchData();
}, [receiverId]);


const handleChange = (event) =>{
  setMessage(event.target.value);
  console.log(message);
}

const handleSubmit = async () => {
  try {

    await axios.post(
      'http://localhost:8080/api/messages/addmsg',
     {message, receiverId, postId},
      { withCredentials: true }
    );
    setMessage('');
   
  } catch (error) {
    console.log(error);
  }
};
  
const options = {
  items: 1, // Display one item per slide
  loop: true, // Enable loop
  nav: true, // Show navigation arrows
  dots: true, // Show dots navigation
  autoplay: true, // Enable autoplay
  autoplayTimeout: 3000, // Autoplay interval in milliseconds
  responsive: {
    0: {
      items: 1, // Display one item per slide on small screens
    },
    768: {
      items: 1, // Display two items per slide on medium screens
    },
    1024: {
      items: 1, // Display three items per slide on large screens
    },
  },
};
  return (
    <>
   

     
     { !messages ? <div>please wait</div> :

          

            <MDBContainer className="py-5">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="8" lg="6" xl="4">
                <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                  <MDBCardHeader
                    className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  >
                    <MDBIcon fas icon="angle-left" />
                    <p className="mb-0 fw-bold">{title}</p>
                    <MDBIcon fas icon="times" />
                  </MDBCardHeader>
                  
                 
                  <MDBCardBody  ref={chatContainerRef}>
                  {messages.map((item) => (
    <div
      className={`p-3 ${item.senderId === receiverId ? "me-3" : "ms-3"} ${
        item.senderId === receiverId ? "border" : ""
      }`}
      style={{
        borderRadius: "15px",
        backgroundColor:
          item.senderId === receiverId ? "#fbfbfb" : "rgba(57, 192, 237,.2)",
      }}
      key={item._id}
    >
      <p className="small mb-0">
        {item.senderId === receiverId ? receiver : "You"} wrote: {item.message},{" "}
        at: {new Date(item.updatedAt).toLocaleString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
      </p>
    </div>
  ))}

                  <MDBTextArea
                    className="form-outline"
                    label="Type your message"
                    id="textAreaExample"
                    rows={4}
                    onChange={handleChange}
                    value={message}
                  />
                  <button onClick={handleSubmit}>send</button>
                </MDBCardBody>

                 
                  
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBContainer>





          
            
            
            
            
     }
                

           
                                          
                                        
            
      


    
    </>

  );
}