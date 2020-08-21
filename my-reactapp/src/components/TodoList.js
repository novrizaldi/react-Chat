import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList (props){
    const todos = props.data.map(item => 
    <TodoItem 
        key = {item.id}
        id = { item.id} 
        name = { item.name} 
        message={item.message} 
        sent = {item.sent}
        hapus={ () => props.remove(item.id)}
        resend={ () => props.resend(item.id, item.name, item.message)} /> )
    return (
        <ol> {todos}</ol>
    )
}