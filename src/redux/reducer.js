const initialState = {
    todos: [
        {
            title: 'First todo',
            done: true,
            id: Math.random()
        },
        {
            title: 'Second todo',
            done: false,
            id: Math.random()
        },
        {
            title: '3 todo',
            done: false,
            id: Math.random()
        },
        {
            title: '4 todo',
            done: false,
            id: Math.random()
        }
    ],
    colomns:[{id:1, name:'oleh'}],
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, { title: action.payload, done: false, id: Math.random()  }]
            };
        case 'DELETE_TODO':
            const newTodos = state.todos.filter(el => el.id !==action.payload)
            return {
                ...state,
                todos: newTodos
            };

        default:
            return state;
    }
};

export default todo;
