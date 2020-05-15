import { v4 as uuid } from 'uuid';

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    text,
    completed: false
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
