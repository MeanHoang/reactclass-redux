import logo from './logo.svg';
import './App.scss';
import MyComponent from '../views/Example/MyComponents'
import ListToDo from './ToDoApp/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { connect } from 'react-redux';
import {
    increaseCounter,
    decreaseCounter,
} from "../action/actions"

import {
    BrowserRouter as Router,
    //Switch bị xóa mẹ rồi
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

function App(props) {
    // JSX
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>Count: {props.count}</div>

                    <button onClick={() => props.increaseCounter()}>Increase Count</button>

                    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

                    {/* <Home /> */}
                    {/* <MyComponent /> */}

                    {/* <ListToDo /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<ListToDo />} />
                        <Route path="/about" element={<MyComponent />} />
                        <Route path="/listuser" element={<ListUser />} />
                        <Route path="/listuser/:id" element={<DetailUser />} />


                    </Routes>
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
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),

        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
