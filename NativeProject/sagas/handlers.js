import { call, takeEvery, put } from "redux-saga/effects";
import { addTodo as postTodo, deleteTodo as delTodo, editTodo, fetchTodos as getTodos, markComplete as togTodo} from "./requests"
import { addTodo, deleteTodo, updateTodo, fetchTodos, markComplete } from "../slices/todoSlices"

function* handleAddTodo(action) {
    try {
        const result = yield call(postTodo, action.payload.title, action.payload.description)
        // console.log(result.data,"add data resposne")
        yield put(addTodo(result.data))
    } catch (err) {
        console.log(err)
    }
}

function* handleDeleteTodo(action) {
    const id  = action.payload.id
    try {
        const res = yield call(delTodo, id)
        if (res.status === 200) {
            yield put(deleteTodo({ id }))
        }
    } catch (err) {
        console.log(err)
    }
}
function* handleEditTodo(action) {
    const { id, title, description } = action.payload
    // console.log(id,title,description, "Handler");
    try {
        const res = yield call(editTodo, id, title, description)
        if (res.status === 200) {
            yield put(updateTodo({ id, title, description }))
        }
    } catch (err) {
        console.log(err)
    }
}
function* handleFetchTodos() {
    try {
        const result = yield call(getTodos)
        yield put(fetchTodos(result.data.data))
    } catch (err) {
        console.log(err)
    }
}
function* handleToggleTodo(action) {
    const { id, is_complete } = action.payload
    // console.log(action.payload, "HANDLER CALLED");
    try {
        const res = yield call(togTodo, id, is_complete)
        if (res.status === 200) {
            yield put(markComplete({ id, is_complete }))
        }
    } catch (err) {
        console.log(err)
    }
}
function* watcherTodoSaga() {
    yield takeEvery('ADD_TODO', handleAddTodo);
    yield takeEvery('DELETE_TODO', handleDeleteTodo);
    yield takeEvery('EDIT_TODO', handleEditTodo);
    yield takeEvery('FETCH_TODOS', handleFetchTodos);
    yield takeEvery('TOGGLE_TODO', handleToggleTodo);
}
export default watcherTodoSaga