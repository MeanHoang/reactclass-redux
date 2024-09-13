import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listToDo: [
            { id: '123', title: 'Doing homework' },
            { id: '623', title: 'Fixing bugs' },
            { id: '565', title: 'Hustlte Fk Code' },
        ],

        editTodo: {

        }
    }

    addNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

        toast.success("Wow so easy!");
    }

    handeleDeleteToDo = (todo) => {
        console.log('check to do: ', todo)

        let currentTodo = this.state.listToDo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listToDo: currentTodo
        })

        toast.success("Delete Success!");
    }

    handeleEditToDo = (todo) => {
        let { editTodo, listToDo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //click save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listToDoCopy = [...listToDo];

            //Find index of specific object using findIndex method.    
            let objIndex = listToDoCopy.findIndex(item => item.id == todo.id);

            //Update object's name property.
            listToDoCopy[objIndex].title = editTodo.title;

            this.setState({
                listToDo: listToDoCopy,
                editTodo: {}
            })
            return;
        }

        //click edit
        this.setState({
            editTodo: todo
        })
    }

    handeleOnChangEditToDo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listToDo, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("check empty Obj: ", isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewToDo={this.addNewToDo}
                />

                <div className="todo-content">
                    {listToDo && listToDo.length > 0 &&
                        listToDo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id == item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handeleOnChangEditToDo(event)} />

                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="editBtn"
                                        onClick={() => this.handeleEditToDo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="deleteBtn"
                                        onClick={() => this.handeleDeleteToDo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        )
    }
}

export default ListToDo;