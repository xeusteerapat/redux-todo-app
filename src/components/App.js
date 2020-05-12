import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Todo from './Todo';

const App = ({ todos, addTodo }) => {
  let textInput = null;

  const handleChange = element => {
    textInput = element;
  };

  return (
    <div className="App">
      <h1>Redux</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(textInput.value);
          textInput.value = '';
        }}
      >
        <input type="text" ref={handleChange} />
        <button>ADD Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(App);
