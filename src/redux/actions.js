export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime(),
      text,
      completed: false,
    },
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};
