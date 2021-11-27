
import React from 'react';

function registrationElement({ reg }) {
  /*  console.log("element", todo); */
  /* const dispatch = useDispatch();
  const onRemove = (todo) => {
    dispatch(removeTodo(todo));
  };

  const onToggle = async (todo) => {
    const newTodo = { ...todo, completed: !todo.completed };
    try {
      const res = await dispatch(toggleTodo(newTodo)).unwrap();
      console.log("RES erro try", res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const completed = todo.completed ? (
    <i className="bi bi-check-square"></i>
  ) : (
    <i className="bi bi-square"></i>
  ); */

  //sollevo un errore per testare ErrorBoundary
  /* throw new Error('Error'); */

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>
        <span className="fs-6"> ticket: {reg.ticket}</span>
        <span > date: {reg.date}</span>
      </span>
      <button type="button" className="btn btn-danger btn-sm">
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

/* const matchStateToProps = (state) => {
    return { todos: [...state] }
}
/* const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: todo => dispatch(removeTodo(todo))
    }
} */

/* export default connect(matchStateToProps, {removeTodo})(TodoElement); */

export default registrationElement;
