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
              <div className="col-md-9 col-sm-2 col-9 pr-0 comment-box">
              <input type="text" class="form-control mb-2" placeholder="nama" value={this.state.name} onChange={this.handleChangeName}/>
              </div>
              <div className="col-md-9 col-sm-2 col-9 pr-0 comment-box">
              <input type="text" class="form-control" placeholder="masukkan pesan..." value={this.state.message} onChange={this.handleChangeMessage}/>
              </div>

              <div className="col-md-3 col-sm-2 col-2 pl-0 text-center send-btn">
                <button type="submit"class="btn btn-info">Send</button>
              </div>
            </form>
        </div>
      );
    }
  }