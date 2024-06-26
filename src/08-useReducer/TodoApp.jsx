import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo()

    return (
        <>
            <h1>Tareas: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <TodoList
                            todos={todos}
                            onDeleteTodo={handleDeleteTodo}
                            onToggleTodo={handleToggleTodo}
                        />
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
