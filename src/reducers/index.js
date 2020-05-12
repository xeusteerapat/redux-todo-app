import produce from 'immer';

let initialTodos = [
  {
    id: '1',
    text: 'first redux',
    completed: false
  }
];

export const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return produce(state, draftState => {
        draftState.push({
          id: action.id,
          text: action.text,
          completed: false
        });
      });
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
