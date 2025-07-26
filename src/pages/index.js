import { useGetTodosQuery, useAddTodoMutation } from "@/services/todos";
import { useState } from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  const page = Number(context.query.page || 1);
  return {
    props: {
      page,
    },
  };
}

export default function Home({ page }) {
  const limit = 10;
  const start = (page - 1) * limit;

  const { data: todos = [], isLoading } = useGetTodosQuery({ start, limit });
  const [addTodo] = useAddTodoMutation();
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = async () => {
    if (newTitle.trim()) {
      await addTodo({ title: newTitle, completed: false, userId: 1 });
      setNewTitle("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo List (SSR)</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTitle}
          placeholder="New todo"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} — {todo.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "2rem" }}>
        {page > 1 ? (
          <Link href={`/?page=${page - 1}`} style={{ marginRight: "1rem" }}>
            Previous
          </Link>
        ) : (
          <span
            style={{
              marginRight: "1rem",
              color: "#ccc",
              cursor: "not-allowed",
            }}
          >
            Previous
          </span>
        )}
        <Link href={`/?page=${page + 1}`}>Next</Link>
      </div>
    </div>
  );
}
