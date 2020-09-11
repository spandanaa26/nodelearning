import React, { Component } from 'react';
import axios from 'axios';
export class RegisterComponent extends Component {
constructor() {
super();
this.state = {
userName: "",
email: "",
firstName: "",
lastName: "",
age: "",
gender: "",
country: "",
agreeTerms: "",
countryList:[]
}

}
async componentDidMount() {
/* fetch("https://restcountries.eu/rest/v2/all%22).then(result=>{
console.log(result);
return result.json();
}).catch(err =>{
console.log(err)
}).then(finalResult=>{
console.log(finalResult);
})*/

let countryList = await axios("https://restcountries.eu/rest/v2/all");
console.log(countryList);
this.setState({countryList: countryList.data});
}
handleChange =(e)=>{
let currentState = this.state;
currentState[e.target.name]=e.target.value;
this.setState(currentState);
console.log(this.state);
}
bindDataToDropdown = ()=>{
return this.state.countryList.map((item,index)=>{
return <option value={item.alpha2Code}>{item.name}</option>
});
}
render() {
return <div>
<div className="form-group row">
<label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Name</label>
<div className="col-sm-10">
<input type="email" className="form-control form-control-sm"
name="userName"
id="userName" placeholder="Username"
onChange={this.handleChange}/>
</div>
</div>
<div className="form-group row">
<label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="email" className="form-control form-control-sm"
name="email"
id="email" placeholder="Email"
onChange={this.handleChange}/>

</div>
</div>
<div className="form-group row">
<label for="colFormLabel" className="col-sm-2 col-form-label">First Name</label>
<div className="col-sm-10">
<input type="text" className="form-control form-control-sm"
name="firstName"
id="firstName" placeholder="First Name"
onChange={this.handleChange}/>

</div>
</div>
<div className="form-group row">
<label for="colFormLabel" className="col-sm-2 col-form-label">Last Name</label>
<div className="col-sm-10">
<input type="text" className="form-control form-control-sm"
name="lastName"
id="lastName" placeholder="Last Name" />
</div>
</div>
<div className="form-group row">
<label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="text" className="form-control form-control-sm"
name="age"
id="age" placeholder="Age" onChange={this.handleChange}/>
</div>
</div>
<div className="form-group row">
<label for="countryList" className="col-sm-2 col-form-label">countryList</label>
<div className="col-sm-10">
<select className="form-control" name="country" id="countryList" onChange={this.handleChange}>
{this.bindDataToDropdown()}
</select>
</div>
</div>
<div className="form-group row">
<label for="colFormLabel" className="col-sm-2 col-form-label">Gender</label>
<div className="col-sm-10">
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="gender1" name="gender" className="custom-control-input"
value="M"
onChange={this.handleChange} />
<label className="custom-control-label" for="gender1">Male</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio"
value="F"
id="gender2" name="gender" className="custom-control-input" onChange={this.handleChange}/>
<label className="custom-control-label" for="gender2">Female</label>
</div>
</div>
</div>

</div>
}
}



/*import React,{Component} from 'react';
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
var list =["red","yellow","white","orange"];
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
 <select>
   {
       list.map((item,index)=>
       {
           return <option value={index}>{item}</option>
       }
       )
   }


    </select>

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
*/


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