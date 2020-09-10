import React,{Component} from 'react';
export class RegisterComponent extends Component{
constructor(){
super();
this.state={
username:"",
firstname:"",
lastname:"",
email:"",
age:"",
gender:"",
terms:""
}
}
//onchange handler event binding

handleInputChange=(e)=>{
console.log(e.target.value);
let currentstate = this.state;
currentstate[e.target.name]=e.target.value;
this.setState(currentstate);
}
render(){
return <div>
<h1>Registration</h1>
<form>
<div>
<label>UserName : </label>
<input type="text" placeholder="username" name="username" onChange={this.handleInputChange}/>
</div>
<div>
<label>First Name : </label>
<input type="text" placeholder="firstname" name="firstname" onChange={this.handleInputChange}/>
</div>
<div>
<label>Last Name : </label>
<input type="text" placeholder="lastname" name="lastname" onChange={this.handleInputChange}/>
</div>
<div>
<label>Email : </label>
<input type="email" placeholder="Email" name="email" onChange={this.handleInputChange}/>
</div>
<div>
<label>Age: </label>
<input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
</div>
<div>
<input type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
<label for="male">Male</label>
</div>
<div>
<input type="radio" id="female" name="gender" value="female" onChange={this.handleInputChange}/>
<label for="female">Female</label>
</div>
<div>
<input type="checkbox" id="terms" name="terms" value="terms" onChange={this.handleInputChange}/>
<label> I agree to Terms & conditions</label>
</div>
<div>
<button type="button" onClick={this.handleInputChange}>Register</button>
</div>
</form>
<h1>{this.state.username}</h1>
<h1>{this.state.firstname}</h1>
<h1>{this.state.lastname}</h1>
<h1>{this.state.email}</h1>
<h1>{this.state.age}</h1>
<h1>{this.state.gender}</h1>
</div>
}
}


/*import React,{Component} from 'react';

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
          <label>UserName : </label>
           <input type="text" placeholder="username" name="username" onChange={this.handleInputChang} /><br></br>

           <label>Password : </label>
           <input type="text" placeholder="password" name="password" onChange={this.handleInputChang} /><br></br>

           <label>First Name : </label>
           <input type="text" placeholder="Firstname" name="Firstname" onChange={this.handleInputChang} /><br></br>

           <label>Last Name : </label>
           <input type="text" placeholder="Lastname" name="Lastname" onChange={this.handleInputChang} /><br></br>

           <label>Email : </label>
           <input type="email" />
           <input type="text" placeholder="password" name="password" onChange={this.handleInputChang} />
            <h1> { this.state.username} </h1>
            <h1> {this.state.password} </h1>
    </div>
}
}
*/