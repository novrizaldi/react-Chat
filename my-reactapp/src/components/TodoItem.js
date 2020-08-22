import React from 'react'

 export default function TodoItem(props){
  return (
      <ul class="p-0">
      <ul className="p-0">
            <li>
                  <div className="row comments mb-2">
                        <div className={`${props.index % 2 === 0 ? "col-md-2 offset-md-2 col-sm-2 offset-sm-2 col-3 offset-1 text-center user-img" : "col-md-2 col-sm-2 col-3 text-center user-img"}`}>
                        <img id="profile-photo" alt="gambar" src={`${props.index % 2 === 0 ? "http://nicesnippets.com/demo/man04.png" : "http://nicesnippets.com/demo/man01.png"}`} className="rounded-circle" />
                        </div>
                        <div className="col-md-7 col-sm-7 col-8 comment rounded mb-2">
                              <h4 className="m-0"><a href="#">{props.name}</a></h4>
                        <time className="text-white ml-3">1 min ago</time>
                        <like></like>
                        <p className="mb-0 text-white">{props.message}</p>
                        </div>
        
                        {props.sent ? 
                        <a href="#" onClick= {props.hapus}> <span class="glyphicon glyphicon-trash"></span></a> 
                        :
                        <a href="#" onClick= {props.resend}> <span class="glyphicon glyphicon-repeat"></span></a> }
                  </div>
            </li>
      </ul>
      </ul>
  )   
}