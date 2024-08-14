"use client";

type TodoListType = {
    todoList: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (editTodoIndex: number) => void;
}

export default function TodoList({
    todoList,
    deleteTodo,
    setEditIndex
}: TodoListType) {
    return (
        <>
            {todoList.map((todo, index) => (
                <div key={todo + index}>
                    <b>{todo}</b>
                    <button onClick={
                        () => { setEditIndex(index) }}>
                        Edit
                    </button>
                    <button onClick={
                        () => { deleteTodo(index) }}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}