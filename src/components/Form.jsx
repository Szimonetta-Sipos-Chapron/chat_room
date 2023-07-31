import message from "../img/message.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/actions/chatActions';

const Form = ({ user }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    dispatch(addMessage({ author: user, message: inputValue }));
  };

  return (
    <form
      className='flex justify-center items-center h-[10vh]'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='votre message...'
        className='input input-bordered input-accent w-full max-w-xs'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='btn btn-accent btn-square'><img src={message} alt='icon-message'/></button>
    </form>
  );
};

export default Form;
