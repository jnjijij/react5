// FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await axios.post('/api/feedback', { message });
      alert('Message sent successfully!');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error.message);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div>
      <h3>Send Feedback</h3>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default FeedbackForm;
