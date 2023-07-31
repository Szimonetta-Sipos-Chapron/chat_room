import './App.css';
import Form from './components/Form';
import MessagesContainer from './components/Messages';

function App() {

  const user = 'Moi';
  return (
    <>
      <MessagesContainer user={user} />
      <Form user={user} />
    </>
  );
}

export default App;
