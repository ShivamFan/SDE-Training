import axios from "axios"
const addTodo = async (title, description) => {
    try {
        return  await axios.post('http://localhost:8080/task', {
            title: title,
            description: description
        })
        
    }
    catch (err) {
        console.log(err)
    }
}
const deleteTodo = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/task/${id}`)
    }
    catch (err) {
        console.log(err)
    }
}
const editTodo = async (id, title, description) => {
    try {
        console.log(id);
        return await axios.patch(`http://localhost:8080/task/${id}`, {
            title: title,
            description: description
        })
    }
    catch (err) {
        console.log(err)
    }
}
const fetchTodos = async () => {
    try {
        return await axios.get('http://localhost:8080/tasks')
    }
    catch (err) {
        console.log(err)
    }
}
const markComplete = async (id, is_complete) => {
    try {
        return await axios.patch(`http://localhost:8080/completetask/${id}`, {
            is_complete: is_complete
        })
    }
    catch (err) {
        console.log(err)
    }
}
export { addTodo, deleteTodo, editTodo, fetchTodos, markComplete }