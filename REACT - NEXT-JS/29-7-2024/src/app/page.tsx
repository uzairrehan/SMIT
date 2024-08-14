"use client";

import TodoEdit from "@/components/todo-edit";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";


export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const [editIndex, setEditIndex] = useState(-1);


  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (todoIndex: number) => {
    let todoClone = [...todos];
    todoClone.splice(todoIndex, 1);
    setTodos([...todoClone]);
  }

  const saveEditedTodo = (updatedTodo: string) => {
    console.log(updatedTodo, editIndex);
    let todoClone = [...todos];
    todoClone.splice(editIndex, 1, updatedTodo);
    setTodos([...todoClone]);
    setEditIndex(-1);
  }

  return (
    <>
      {
        editIndex === -1 ?
          < TodoInput
            addTodo={addTodo}
          />
          :
          <TodoEdit
            editTodoItem={todos[editIndex]}
            saveEditedTodo={saveEditedTodo}
          />

      }


      <TodoList
        todoList={todos}
        deleteTodo={deleteTodo}
        setEditIndex={setEditIndex}
      />
    </>
  )
}