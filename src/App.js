import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed'
import './App.css';


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;


    return (
        <ChatEngine 
            height="100vh"
            projectID="010f5970-d1de-4bed-90f4-8e5ff7a85244"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
};

export default App;