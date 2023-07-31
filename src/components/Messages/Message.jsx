import PropTypes from 'prop-types';

const Message = ({ author, message, date, user }) => {

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div
      className={`chat ${user === author ? 'self-end chat-end' : 'chat-start'}`}
    >
      <div className='chat-header'>
        {author}
        {date && (
          <time className='text-xs ml-2 opacity-50'>{formatDate(date)}</time>
        )}
      </div>
      <div
        className={`chat-bubble w-64 ${
          user === author ? 'chat-bubble-accent' : 'chat-bubble-primary'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.number,
};

export default Message;
