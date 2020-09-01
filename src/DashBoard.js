import React, {useEffect, useState} from 'react'
import './App.css'
import {connect} from 'react-redux';
import TodoItem from "./TodoItem";
import {getTodos, addTodo} from "./redux/action";

function DashBoard(props) {
    const [newTodo, setNewTodo] = useState('')
    const {todos = [], addTodo, editTodo} = props
    const updateTodo = (todoId, newTitle) => {
        editTodo(todoId, newTitle)
    }
    const addButtonHandler = () => {
        addTodo(newTodo)
        setNewTodo('')
    }
    useEffect(() => {
        console.log('Hello useFffect')
        props.getList()
    }, [])

    return (
        <div className="App">
            <h1>TODO LIST</h1>
            {todos.map((el, i) => <TodoItem key={el._id} el={el} i={i} updateTodo={updateTodo}/>)}
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
    addTodo: (newTitle) => dispatch(addTodo(newTitle)),
    editTodo: (todoId, newtitle) => dispatch({type: 'EDIT_TODO', payload: {todoId, newtitle}
    }),
    getList: () =>  dispatch(getTodos())

})


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
