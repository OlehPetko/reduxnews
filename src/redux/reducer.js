const initialState = {
    todos: [
        // {
        //     title: 'First todo',
        //     done: false,
        //     id: Math.random()
        // },
        // {
        //     title: 'Second todo',
        //     done: false,
        //     id: Math.random()
        // },
        // {
        //     title: '3 todo',
        //     done: false,
        //     id: Math.random()
        // },
        // {
        //     title: '4 todo',
        //     done: false,
        //     id: Math.random()
        // }
    ],
    // colomns: [{id: 1, name: 'oleh'}],
}

const todo = (state = [], action) => {
    switch (action.type) {

        // case 'TODO_ADD':
        //     return {
        //         ...state,
        //         todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]
        //     }
        case 'DELETE_TODO':
            const newTodos = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: newTodos
            }
        case 'MARK_TODO':
            return {
                ...state, todos: state.todos.map(el => {
                    if (el.id === action.payload)
                        return ({...el, done: !el.done})
                    return el
                })
            }
        case 'EDIT_TODO':
            const newTodo = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: newTodo
            }

        case 'MOVE_UP_TODO':
            const newTodon = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: newTodon
            }
        case 'GET_TODO' :
            return {...state, todos: action.payload
        }

        default:
            return state;
    }
}

export default todo;
