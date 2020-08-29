import React from 'react'
import logoikwan from '../gambar/logoikwan.jpeg'
import doktor from '../gambar/doktor.png'
import moment from 'moment';
import ReactMarkdown from 'react-markdown';


function dateConvert(date){
      if(date === moment().format('YYYY-MM-DD')){
            return date = 'today'
      } else if (date === moment().subtract(1, 'days').format('YYYY-MM-DD')){
            return date = 'yesterday'
      } else { 
            return date = moment(date).format('MMM Do, YYYY')
      }
}

 export default function TodoItem(props){
  return (
      <ul className="p-0">
      <ul className="p-0">
            <li>
                  <div className="row comments mb-2">
                        <div className={`${props.index % 2 === 0 ? "col-md-2 offset-md-2 col-sm-2 offset-sm-2 col-3 offset-1 text-center user-img" : "col-md-2 col-sm-2 col-3 text-center user-img"}`}>
                        <img id="profile-photo" alt="gambar" src={`${props.index % 2 === 0 ? doktor : logoikwan }`} className="rounded-circle" />
                        </div>
                        <div className="col-md-7 col-sm-7 col-8 comment rounded mb-2">
                              <h4 className="m-0">{props.name}</h4>
                              <time className="text-white ml-3 msg-time"> {dateConvert(props.message.time)}</time>
                        {/* <p >{props.message}</p> */}
                        <ReactMarkdown className="mb-0 text-white"source={props.message} />
                        </div>
        
                        {props.sent ? 
                        <a onClick= {props.hapus}> <span className="glyphicon glyphicon-trash"></span></a> 
                        :
                        <a onClick= {props.resend}> <span className="glyphicon glyphicon-repeat"></span></a> }
                  </div>
            </li>
      </ul>
      </ul>
  )   
}