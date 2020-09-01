import React, {useState} from 'react'
import './App.css'
import {connect} from 'react-redux'



const TodoItem = (props) => {
    const {el, i, deleteTodo, markTodo, moveUpTodo, updateTodo} = props
    const [editedTodo, setEditedTodo] = useState('')
    return (
        <li>
            {el.name}
            <input type='checkbox' checked={el.done} onClick={() => markTodo(el._id)}/>
            <button onClick={() => deleteTodo(el.id)}>delete</button>
            <input/>
            <button onClick={() => {
                updateTodo(el.id, editedTodo);
                setEditedTodo('')
            }}>edit</button>
            <button onClick={() => moveUpTodo(i, i - 1)}>UP</button>
            <button onClick={() => moveUpTodo(i, i + 1)}>DOWN</button>
        </li>
    )
}
const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    markTodo: (todoId) => dispatch({type: 'MARK_TODO', payload: todoId}),
    moveUpTodo: (todoIndexCurrent, todoIndexPrevious) => dispatch({
        type: 'MOVE_UP_TODO',
        payload: {todoIndexCurrent, todoIndexPrevious}
    })

})


export default connect(null, mapDispatchToProps)(TodoItem)
              // функция диспатч отправляет в редьюсер
