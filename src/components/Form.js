import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos}) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value)
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				id: Math.random() * 1000,
				text : inputText,
				completed : false
			}
		]);
		setInputText("");
	};
	return (
			<div>
				<form>
					<input onChange={inputTextHandler} type="text" className="todo-input"/>
					<button onClick={submitTodoHandler} className="todo-button" type="submit">
						<i className="fas fa-plus-square"/>
					</button>
					<div className="select">
						<select name="todos" className="filter-todo">
							<option value="all">All</option>
							<option value="completed">Completed</option>
							<option value="uncompleted">Uncompleted</option>
						</select>
					</div>
				</form>
			</div>
	)
}

export default Form;
