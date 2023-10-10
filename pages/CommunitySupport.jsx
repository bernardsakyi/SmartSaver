import React, { useState, useEffect } from 'react';
import './CommunitySupport.css';
import { io } from 'socket.io-client'; // Import Socket.io client library

const socket = io('YOUR_SOCKET_SERVER_ENDPOINT'); // Replace with your Socket.io server endpoint

const CommunitySupport = () => {
  const [forumPosts, setForumPosts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [userContent, setUserContent] = useState('');

  // Listen for new forum posts
  useEffect(() => {
    socket.on('newForumPost', (newPost) => {
      setForumPosts([...forumPosts, newPost]);
    });

    // Listen for new chat messages
    socket.on('newChatMessage', (message) => {
      setChatMessages([...chatMessages, message]);
    });

    // Clean up on unmount
    return () => {
      socket.off('newForumPost');
      socket.off('newChatMessage');
    };
  }, [forumPosts, chatMessages]);

  const handleForumPost = (post) => {
    socket.emit('forumPost', post); // Emit new forum post to the server
  };

  const handleChatMessage = (message) => {
    socket.emit('chatMessage', message); // Emit new chat message to the server
  };

  const handleUserContentSubmit = () => {
    // Handle submission of user-generated content
    // You can send the content to your server or integrate with a backend service
    console.log('User content submitted:', userContent);
    // Reset the userContent state after submission
    setUserContent('');
  };

  return (
    <div className="community-support-container">
      <h2>Community Support</h2>
      <div className="forum-chat">
        <div className="forum">
          <h3>User Forums</h3>
          <ul>
            {forumPosts.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
          {/* Forum component */}
          <button onClick={() => handleForumPost('New forum post')}>Post in Forum</button>
        </div>
        <div className="chat">
          <h3>Live Chat</h3>
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          {/* Chat component */}
          <input
            type="text"
            placeholder="Type your message..."
            value={userContent}
            onChange={(e) => setUserContent(e.target.value)}
          />
          <button onClick={() => handleChatMessage(userContent)}>Send</button>
        </div>
      </div>
      <div className="user-content">
        <h3>User-Generated Content</h3>
        {/* Interactive component for user content submission */}
        <textarea
          placeholder="Share your insights, tips, or success stories..."
          value={userContent}
          onChange={(e) => setUserContent(e.target.value)}
        />
        <button onClick={handleUserContentSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CommunitySupport;
