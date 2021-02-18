import React,{Component} from 'react';
import MenuComponent from './menucomponent';
import axios from 'axios';
import {WatchList} from './watchlistcomponent';
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
export default class LoginComponent extends Component{
    
    constructor(props) {
        super(props);
        this.state = {   
          email: '',
          password: '',
          errors: {
            email: '',
            password: '',
          },
          userid:0,
          isLoggedIn:false
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
      
      handleSubmit = (event) => {
        event.preventDefault();
        const data={
          
            email: this.state.email,
            password: this.state.password
        
        }
        // try{  <WatchList/>
        axios.post("http://localhost:8080/users",data)
        .then(res=>{
           const userdataid=res.data.id;
          console.log("userdataid "+ userdataid);
          this.setState({userid:userdataid});
          console.log("set state of login page "+this.state.userid);
          if(res.status===200){
            this.setState({isLoggedIn:true})
          }
          // return(res)
        })
        //  .then(res=>console.log("res "+JSON.stringify(res)))
      .catch((e)=>{ 
        console.log("Error: "+e.toString())
        this.setState({ errors: { ...this.state.errors, email: "Invalid username/password"} }) 
      })

        
        }

    
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
         switch (name) {
          case 'email': 
          const validEmailRegex = 
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : '* Email is required';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? '* Password is required'
                : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
            
        })
      }
      render() {
       
        return (
            <div>
              
           {this.state.isLoggedIn==false&& <div>
           <MenuComponent isLoggedIn={false}/>
         <div  className="mx-5 ">
        <form onSubmit={this.handleSubmit}>
         <div className="form-group text-left col-4">
         <h1 >Let's get started by login </h1>
         <div className="text-danger"> Fields marked with * are mandatory </div>
         <div className="text-danger"> {this.state.errors.email}</div>
         <div className="text-danger" >{this.state.errors.password}</div>
         </div>
             <div className="form-group text-left col-4">
                <label htmlFor="exampleInputEmail1">Email address</label><label className="text-danger">*</label>
                <input type="text" name = "email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange}/>
                
            </div>

            <div className="form-group text-left col-4">
                <label htmlFor="exampleInputPassword1">Password</label><label className="text-danger">*</label>
                <input type="password" name = "password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleChange}/>
               
            </div>
          
            <div className="form-group text-left col-4">
                
                <button type="submit" className="btn btn-primary">Submit</button> 
            </div>
          
        </form> 
        </div>
          </div>}
          { console.log("before watchlist  "+this.state.userid)}
          {this.state.isLoggedIn==true&& <WatchList userid={this.state.userid}/>}
          
          </div>
        );
      }
    
}