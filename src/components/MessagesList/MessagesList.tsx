import React from 'react';

interface Message {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

interface MessagesListProps {
  messages: Message[];
}

const MessagesList: React.FC<MessagesListProps> = ({messages}) => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <strong>{message.author}:</strong> {message.message} ({message.datetime})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
