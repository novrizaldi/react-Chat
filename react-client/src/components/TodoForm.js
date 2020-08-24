import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {this.setState({name: event.target.value});  }

    handleChangeMessage(event) {this.setState({message: event.target.value});  }

    handleSubmit(event) {
      event.preventDefault();
      this.props.add(this.state.name, this.state.message );
      this.setState ({name : '', message: ''})
    }
  
    render() {
      return (
        <div class="row comment-box-main p-3 rounded-bottom">
           <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="col comment-box">
                  <input type="text" className="form-control mb-2" placeholder="nama" value={this.state.name} onChange={this.handleChangeName}/>
              </div>
              <div className="form-inline align-items-center col-xs-4 col-7 comment-box">
                  <input type="text" className="form-control" placeholder="masukkan pesan..." value={this.state.message} onChange={this.handleChangeMessage}/>
                  <button type="submit" className="input-group-text btn btn-info">Send</button>
              </div> 
            </form>
        </div>
      );
    }
  }