import React,{Component} from 'react';

export class LoginComponent extends Component{
constructor()
{
    super();
    this.state={
        username:"",
        password:""
    }

}
handleInputChang=(e)=>{
    console.log(e.target.value);
    let currentState =this.state;
    currentState[e.target.name]=e.target.value;
    this.setState(currentState);
}
render()
{
    return <div>
           <h1>Login</h1>
        
           <input type="text" placeholder="username" name="username" onChange={this.handleInputChang} />
           <input type="text" placeholder="password" name="password" onChange={this.handleInputChang} />
            <h1> { this.state.username} </h1>
            <h1> {this.state.password} </h1>
    </div>
}
}
