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
    <>
      <h2>Messages</h2>
      <div style={{maxHeight: '400px', overflowY: 'scroll'}}>
        <ul style={{listStyleType: 'none', padding: 0}}>
          {messages.map((message) => (
            <li key={message._id} style={{marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px'}}>
              <strong>{message.author}:</strong> {message.message} [{formatDateTime(message.datetime)}]
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const formatDateTime = (datetime: string) => {
  const date = new Date(datetime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export default MessagesList;
