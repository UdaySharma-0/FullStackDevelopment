import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-ItemsStore";

const WelcomeMsg = ()=>{
    const { toDoItems} = useContext(TodoItemsContext)
    return (
        toDoItems.length === 0 && <p className="text-center text-lg font-semibold mt-15">Enjoy Your Day</p>
    )
}

export default WelcomeMsg;