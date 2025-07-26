
import { useGetTodosQuery } from '@/services/todos'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
  const initialTodos = await res.json()

  return {
    props: {
      initialTodos,
    },
    revalidate: 10,
  }
}

export default function ISRPage({ initialTodos }) {
  const { data: todos = initialTodos } = useGetTodosQuery({ start: 0, limit: 10 })

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List (ISR)</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
}
