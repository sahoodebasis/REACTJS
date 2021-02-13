import React,{Component} from 'react';
import '../Stylesheets/mystyle.css';
export default class ComplaintRegister extends Component{
    constructor(props) {
        super(props);
        this.state = {value1: '',value2:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        //this.setState({value: event.target.value});
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
        alert("Thanks "+this.state.value1+"."+"\nYour complaint is submitted. \n"+"Transaction ID is "+RandomNumber +".");
      }


        render(){
            return(
                <div className="center">   
                <h1 className="complaints"> Register your complaints here!!!</h1>
                <form onSubmit={this.handleSubmit}>
                <table className="table">
                    <tr>
                        <td>
                <label>
              Name: 
              </label>
              </td>
              <td>
              <input type="text" name="value1" value={this.state.value1} onChange={this.handleChange} />
                </td></tr>
            <br/> <br/>
            <tr>
                <td>
            <label>
                Complaint:
                </label>
                </td>
                <td>
                <textarea name="value2" value={this.state.value2}  onChange={this.handleChange} /> <br/>
                </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
            <input type="submit" value="Submit" />
            </td>
            </tr>
            </table>
          </form>
          </div>
            );
        }
    }