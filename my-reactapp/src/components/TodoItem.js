import React from 'react'

 export default function TodoItem(props){
  return (
  <li> 
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.message}</p>
        <button onClick={props.sent ? props.hapus : props.resend}> {props.sent ? 'hapus' : 'kirim ulang'} </button>
  </li>
  )   
}