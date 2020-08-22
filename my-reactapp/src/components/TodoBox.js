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
            data : [...state.data, {id, name, message, sent: true}]
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
            <div className="container">
            <div className="row mt-5">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded">
            <TodoForm add = {this.addTodo}/>
            <TodoList data={this.state.data} remove= {this.removeTodo} resend = {this.resendTodo}/>
            </div>
            </div>
            </div>
        )
    }
} 