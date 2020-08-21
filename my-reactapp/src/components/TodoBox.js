import React, { useLayoutEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: {'token': 'foobar'}
  });

export default class TodoBox extends React.Component {
    constructor(props){
        super (props)
        this.state = {data : []}   
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.resendTodo = this.resendTodo.bind(this)
    }

    componentDidMount(){
        request.get('chats').then(data => {
            const completeData = data.data.map(item => {
                item.sent = true;
                return item
            })
            console.log('complete data', completeData);
            this.setState({data : data.data})
        }).catch(err => {
            console.log('eror komponen',err);
        })
    }

    addTodo(name, message){
        const id = Date.now()
        this.setState((state, props) => ({
            data : [{id, name, message, sent: true}, ...state.data]
        }))

        request.post('chats', {
            id, name, message
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log('err add', err);
            this.setState((state, props) => ({
                data : state.data.map(item => {
                    if(item.id === id){
                        item.sent = false;
                    }
                    return item;
                })
            }))
        })
    }

    removeTodo(id){
        this.setState((state, props) => ({
            data : state.data.filter(item => item.id !== id )
        }));
        request.delete(`chats/${id}`).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    resendTodo(id, name, message){

        request.post('chats', {
            id, name, message
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log('err add', err);
            this.setState((state, props) => ({
                data : state.data.map(item => {
                    if(item.id === id){
                        item.sent = true;
                    }
                    return item;
                })
            }))
        })
    }

    render(){
        return (
            <div>
            <TodoForm add = {this.addTodo}/>
            <TodoList data={this.state.data} remove= {this.removeTodo} resendTodo = {this.resendTodo}/>
            </div>
        )
    }
} 