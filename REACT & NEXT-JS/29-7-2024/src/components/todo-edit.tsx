"use client";

import { useState } from "react";

type TodoEditType = {
    editTodoItem: string;
    saveEditedTodo: (updatedTodo: string) => void;
}

export default function TodoEdit({
    editTodoItem,
    saveEditedTodo
}: TodoEditType) {
    const [editTodo, setEditTodo] = useState(editTodoItem)
    return (
        <>
            <label htmlFor="new-todo">Todo:</label>
            <input
                type="text"
                id="edit-todo"
                value={editTodo}
                onChange={(e) => { setEditTodo(e.target.value) }}
            />
            <button
                onClick={() => {
                    saveEditedTodo(editTodo);
                }}
            >
                Save Todo
            </button>
        </>

    )
}