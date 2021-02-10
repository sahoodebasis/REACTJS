import React,{Component} from 'react';
import '../App.css';
class CountPeople extends Component {
    constructor(){
        super();
        this.state={
            entrycount:0,
            exitcount:0,
            c:0
        };
    }
    updateEntry(){
        this.setState((prevState,props)=>{
            return {entrycount:prevState.entrycount+1}
        });
    }
    updateExit=()=> {
        this.setState((prevState,props)=> {
            return {exitcount: prevState.exitcount+1}
        });
    }
    render(){
        return (
            <div>
                <span className="update">
            <button onClick={this.updateEntry.bind(this)} >Login </button>
            <label>{this.state.entrycount} people Entered!! </label>
           </span>
           <span className="exit">
            <button onClick={this.updateExit} >Exit </button>
            <label>{this.state.exitcount} people Left!! </label>
            </span>
            </div>
        );
        }
}
export default CountPeople;