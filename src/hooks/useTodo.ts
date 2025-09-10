import { useEffect, useState, type FormEvent } from "react"

export interface Todo {
  id: number,
  text: string,
  completed: boolean
  parsed: boolean
}

const STORAGE_KEY = "todoList:v1"

export const useTodo = () => {

      const loadInitialTodos = (): Todo[] => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return []
        const parsed = JSON.parse(raw) as { todos: Todo[] } | Todo[] 
        if (Array.isArray(parsed)) return parsed
        if ("todos" in parsed && Array.isArray((parsed).todos)) return (parsed).todos
        return []
      } catch {
        return []
      }
    }

    const [todoList, setTodoList] = useState<Todo[]>(loadInitialTodos)
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

     useEffect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList))
      } catch {
        // fail silently: storage pode falhar em modo privado etc.
      }
    }, [todoList])

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const todoItem = formData.get("todo") as string

        if (!todoItem.trim()) return

        setTodoList(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false,
            parsed:false

        }])

        event.currentTarget.reset();

        setFilter("all")
    }

    const toggleTodoCompleted = (id: number) => {
        console.log(id);

        const newTodoList = todoList.map(todo => {
            if (id === todo.id) {
                const completed = !todo.completed;
                return {
                    ...todo,
                    completed
                }
            }

            return todo;
        });

        setTodoList(newTodoList)
    }

    const filteredTodos = todoList.filter(todo => {
        if (filter === "active") return !todo.completed
        if (filter === "completed") return todo.completed
        return true
    })

    const clearCompleted = () => {
        setTodoList((prev) => prev.filter((todo) => !todo.completed))
    }

    const removeTodo = (id: number) => {
        setTodoList(prev => prev.filter(todo => todo.id !== id))

    }


    return {
        addTodo,
        todoList,
        filteredTodos,
        clearCompleted,
        setFilter,
        filter,
        toggleTodoCompleted,
        removeTodo
    }

}