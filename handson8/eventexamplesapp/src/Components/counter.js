import React,{Component} from 'react';
import CurrencyConvertor from './CurrencyConvertor';
// var c=1;
class Counter extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        };
         this.updateEntry=this.updateEntry.bind(this);
         this.exitEntry=this.exitEntry.bind(this);
         //this.sayHello=this.sayHello.bind(this);
    }
    updateEntry(){
        this.setState((prevState,props)=>{
            return {count:prevState.count+1}
        });
        //this.setState
    }
    exitEntry(){
        this.setState((prevState,props)=>{
            return {count:prevState.count-1}
        });
        //this.setState
    }
    sayHello=(name)=>{
        return(
            alert('Hello! '+ name));
    }
    handleClick = () => {
        return(
            alert('I was clicked!'));
    }

    render(){
        return(
            <div>
                {this.state.count} <br/> <br/>
              <button onClick={()=>{this.updateEntry();this.sayHello("Member1");}} >Increment </button> <br/>  
              <button onClick={this.exitEntry} >Decrement </button> <br/>  
              <button value="welcome" onClick={(x)=>alert(x.target.value)} >Say welcome </button>   <br/>   
              <button onClick={this.handleClick}>Click on Me </button> <br/> <br/>
              {/* <Button onPress={this.handleClick} title="Click on Me" color="blue"/> <br/> */}
                {/* <CustomButton onPress={this.handleClick} /> */}
                <CurrencyConvertor />
            </div>
        );
    }
    
}

export default Counter;