import React, { useState, useEffect } from 'react'
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		const getLocalTodos = () => {
			if (localStorage.getItem("todos") === null) {
				localStorage.setItem("todos", JSON.stringify([]));
			} else {
				let todoLocal = JSON.parse(localStorage.getItem("todos"));
				setTodos(todoLocal)
			}
		};
		getLocalTodos();
	}, [])

	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case "completed":
					setFilteredTodos(todos.filter(todo => todo.completed === true));
					break;
				case "uncompleted":
					setFilteredTodos(todos.filter(todo => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};
		const saveLocalTodos = () => {
			localStorage.setItem("todos", JSON.stringify(todos))
		};
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	return (
			<div className="App">
				<header>
					<h1>du's Todo List</h1>
				</header>
				<Form
						inputText={inputText}
						setInputText={setInputText}
						todos={todos}
						setTodos={setTodos}
						setStatus={setStatus}
				/>
				<TodoList
						todos={todos}
						setTodos={setTodos}
						filterTodos={filteredTodos}
				/>
			</div>
	);
}

export default App;
