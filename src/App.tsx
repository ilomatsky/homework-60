import React, {useState, useEffect} from 'react';
import MessagesList from './components/MessagesList/MessagesList';
import NewMessageInput from './components/NewMessageInput/NewMessageInput';
import {ServerResponse} from './types';
import './App.css';

const apiUrl = 'http://146.185.154.90:8000/messages';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ServerResponse[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const newMessages: ServerResponse[] = await response.json();
        setMessages(newMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    const intervalId = setInterval(fetchMessages, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = async (message: string, author: string) => {
    try {
      const data = new URLSearchParams();
      data.set('message', message);
      data.set('author', author);

      const response = await fetch(apiUrl, {
        method: 'post',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newMessage: ServerResponse = await response.json();
      setMessages([...messages, newMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="app-container">
      <MessagesList messages={messages}/>
      <NewMessageInput onSendMessage={sendMessage}/>
    </div>
  );
};

export default App;
