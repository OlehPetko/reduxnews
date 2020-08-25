import React, {useState} from 'react'
import './App.css'
import {connect} from 'react-redux';

function DashBoard(props) {
    const [newTodo, setNewTodo] = useState('')
    const {todos = [], colomns, addTodo, deleteTodo} = props
    const addButtonHandler = () => {
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <div className="App">
            {todos.map(el => <li>
                {el.title}
                <input type='checkbox'/>
                <button onClick={() => deleteTodo(el.id)}>delete</button>
                <input/>
                <button>edit</button>
            </li>)}
            <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button onClick={addButtonHandler}>create</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    colomns: state.colomns
})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId})
})


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
