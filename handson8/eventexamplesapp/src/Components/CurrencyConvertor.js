import React,{Component} from 'react';
import '../Stylesheets/styles.css';
class CurrencyConvertor extends Component{
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
          let amt='';
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        if(this.state.value2==="Euro"){
        //this.setState({amt: this.state.value1*80});
       // console.log(this.state.amt);
       amt=this.state.value1*80;
       alert("Converting to Euro amount is "+amt);
        
        }
        else
        {
            return(alert("Euro is required in  textbox"));
        }
      }
    
    render(){
        return(
            <div>   
            <h1 className="currency"> Currency Convertor !!!</h1>
            <form onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td>
            <label>
          Amount: 
          </label>
          </td>
          <td>
          <input type="text" name="value1" value={this.state.value1} onChange={this.handleChange} />
            </td></tr>
        <br/> <br/>
        <tr>
            <td>
        <label>
            Currency:
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
export default CurrencyConvertor;
//onChange={this.handleChange}