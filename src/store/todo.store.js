import { Todo } from "../todos/models/todo"

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Make articule module'),
        new Todo('Make product module'),
        new Todo('Make CRUDs')
    ],
    filter: Filters.All,
}

const initStore = () =>{
    console.log('Init store');
}

const loadStore = () =>{
    throw new Error('Not implemented'); 
}

const getTodos = ( filter = Filters.All ) =>{
    throw new Error('Not implemented'); 
}
/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) =>{
    throw new Error('Not implemented'); 
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) =>{
    throw new Error('Not implemented'); 
}

/**
 * 
 * @param {Stirng} todoId 
 */
const toggleTodo = ( todoId ) =>{
    throw new Error('Not implemented'); 
}

const deleteCompleted = () =>{
    throw new Error('Not implemented'); 
}

const setFilter = ( newFilter = Filters.All) =>{
    throw new Error('Not implemented'); 
}

const getCurrentFilter = () =>{
    throw new Error('Not implemented'); 
}

export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}