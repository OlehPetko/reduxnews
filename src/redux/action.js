import axios from 'axios'

export function deleteTodo(todoId) {
    // const newTodos = state.todos.filter(el => el.id !== action.payload)
    // dispatch({type: 'DELETE_TODO', payload: todoId})

}
export function getTodos() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo')
            .then(result => {
                dispatch({
                    type: 'GET_TODO', payload: result.data
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }
}
export function addTodo(newTitle) {
    return (dispatch) => {
        axios.post('http://localhost:5000/todo',{name: newTitle}  )
            .then(result => {
                dispatch(getTodos())
            })
            .catch(err =>{
                console.log(err)
            })
    }
}

