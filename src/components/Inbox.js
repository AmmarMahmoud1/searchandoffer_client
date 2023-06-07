import { useState, useEffect } from "react";
import axios from "axios";
import AllMessages from "./AllMessages";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { toastError } from '../lib/toastError';
import { Button } from "bootstrap";

const Inbox = () => {
  const [messages, setAllMessages] = useState([]);
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('https://searchandoffer.onrender.com/api/messages/all', { withCredentials: true });
        setAllMessages(data);
      } catch (error) {
        toastError(
          error.message || 'No messages...'
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('https://searchandoffer.onrender.com/api');
        setAllPosts(data);
      } catch (error) {
        toastError(
          error.message || 'No posts available now'
        );
      }
    })();
  }, []);

  const groupedMessages = {};

  // Group messages by postId
  messages.forEach((message) => {
    if (!groupedMessages[message.postId]) {
      groupedMessages[message.postId] = [];
    }
    groupedMessages[message.postId].push(message);
  });

  return (
    <>
      {messages.length === 0 ? (
        <div className="empty-inbox">Your inbox is empty</div>
      ) : (
        posts.map((post) => {
          const postMessages = groupedMessages[post._id] || [];

          if (postMessages.length === 0) {
            return null; // Hide titles with no messages
          }

          return (
            <div key={post._id} className="container mt-4">
              <h2>Subject: {post.title}</h2>
              <div>Number of messages: {postMessages.length}</div>
              <Link to={`/message/${post._id}`}> <button className="btn secondary m-3">REPLY</button></Link>
              <hr></hr>
            </div>
          );
        })
      )}
    </>
  );
};

export default Inbox;
