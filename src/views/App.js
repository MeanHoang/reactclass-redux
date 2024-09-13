import logo from './logo.svg';
import './App.scss';
import MyComponent from '../views/Example/MyComponents'
import ListToDo from './ToDoApp/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    // JSX
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Simple ToDo App List with React-Class</p>
                {/* <MyComponent /> */}

                <ListToDo></ListToDo>
            </header>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <ToastContainer />
        </div>
    );
}

export default App;
