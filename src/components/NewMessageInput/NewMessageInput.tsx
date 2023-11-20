import React, {useState} from 'react';

interface NewMessageInputProps {
  onSendMessage: (message: string, author: string) => void;
}

const NewMessageInput: React.FC<NewMessageInputProps> = ({onSendMessage}) => {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  const handleSendMessage = () => {
    if (message && author) {
      onSendMessage(message, author);
      setMessage('');
    }
  };

  return (
    <form style={{marginTop: '20px', textAlign: 'center'}}>
      <h2>New Message</h2>
      <div style={{marginBottom: '10px'}}>
        <label style={{marginRight: '10px'}}>
          Author:
          <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)}/>
        </label>
      </div>
      <div style={{marginBottom: '10px'}}>
        <label style={{marginRight: '10px'}}>
          Message:
          <input type="text" value={message} required onChange={(e) => setMessage(e.target.value)}/>
        </label>
      </div>
      <button type="button" onClick={handleSendMessage} style={{padding: '5px 10px', fontSize: '14px'}}>
        Send
      </button>
    </form>
  );
};

export default NewMessageInput;
