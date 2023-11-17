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
    <form>
      <h2>New Message</h2>
      <div>
        <label>
          Author:
          <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          Message:
          <input type="text" value={message} required onChange={(e) => setMessage(e.target.value)}/>
        </label>
      </div>
      <button type="submit" onClick={handleSendMessage}>Send</button>
    </form>
  );
};

export default NewMessageInput;
