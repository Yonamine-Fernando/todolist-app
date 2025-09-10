import { useContext } from "react"
import { themeConfig } from "../../context/themeConfig"
import { ThemeContext } from "../../context/ThemeContext"
import type { Todo } from "../../hooks/useTodo"
import IconCheck from '/public/images/icon-check.svg'
import IconCross from '/public/images/icon-cross.svg'

interface TodoListProps {
    todoList: Todo[];
    toggleTodoCompleted: (id: number) => void
    setFilter: (filter: "all" | "active" | "completed") => void
    filter: "all" | "active" | "completed"
    clearCompleted: () => void
    removeTodo: (id: number) => void
}


const TodoList = ({
    todoList,
    toggleTodoCompleted,
    setFilter,
    filter,
    clearCompleted,
    removeTodo
}: TodoListProps) => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {
                        todoList.map((todo) => (
                            <li className={` 
                                flex justify-between p-6 border-b 
                                ${themeConfig[theme].todo.borderColor}
                                group`}
                                key={todo.id}
                            >
                                <div className="flex items-center gap-4 ">
                                    <span
                                        className="h-6 w-6 rounded-full 
                                        hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]"
                                    >
                                        <button
                                            onClick={() => toggleTodoCompleted(todo.id)}
                                            className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}
                                            ${todo.completed ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]' : ""}`}
                                        >
                                            {todo.completed && (<img src={IconCheck} alt="icone marcado" className="h-2 w-2 m-auto"
                                            />
                                            )}
                                        </button>
                                    </span>
                                
                                        <p className={`cursor-pointer ${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""} `}>{todo.text}</p>
                                    </div>
                                    <button
                                        onClick={() => removeTodo(todo.id)}
                                        className="cursor-pointer  group-hover:visible sm:invisible"
                                    ><img src={IconCross} alt="remover" className="h-4 w-4" />
                                    </button>
                
                            </li>
                        ))
                    }
                </ul>



                <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
                    <p>{todoList.length} items total</p>

                    <div className={`hidden sm:flex gap-6`}>
                        <button
                            onClick={() => setFilter("all")}
                            className={`${filter === "all" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>All</button>

                        <button
                            onClick={() => setFilter("active")}
                            className={`${filter === "active" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>Active</button>

                        <button
                            onClick={() => setFilter("completed")}
                            className={`${filter === "completed" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>Completed</button>
                    </div>

                    <button
                        onClick={clearCompleted}
                        className={`cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>Clear Complete</button>
                </div>

            </div>

            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor}  flex justify-center py-4 gap-5 rounded-md mt-4 sm:hidden`}>
                
                <button
                    onClick={() => setFilter("all")}
                    className={`${filter === "all" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>All</button>

                <button
                    onClick={() => setFilter("active")}
                    className={`${filter === "active" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>Active</button>

                <button
                    onClick={() => setFilter("completed")}
                    className={`${filter === "completed" ? 'text-bright-blue' : ""} cursor-pointer ${theme === "dark" ? "hover:text-purple-100-hover" : "hover:text-navy-850"}`}>Completed</button>
            </div>

        </>
    )
}

export default TodoList