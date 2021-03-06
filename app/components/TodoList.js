/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id, todo.title, !todo.completed)} />
            ))}
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;