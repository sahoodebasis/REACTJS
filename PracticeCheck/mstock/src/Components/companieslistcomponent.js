  
import React,{Component} from 'react';
import axios from 'axios';
import CompanyDetailsComponent from './companydetailscomponent';
import MenuComponent from './menucomponent';

export default class CompaniesListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            companylist:[]
            // isLoggedIn:false
        };
    }

    componentWillMount(){
        axios.get('http://localhost:8080/companies').then(res=>{
            const companydata=res.data;
            console.log(companydata);
            this.setState({companylist:companydata});
        })
    }
    render(){
    console.log(this.state.companylist);
    return(
        <div>
        {/* <MenuComponent isLoggedIn={this.state.isLoggedIn}/> */}
        <CompanyDetailsComponent companies={this.state.companylist} isLoggedIn={this.props.isLoggedIn} userid={this.props.location.state.userid}/>
        </div>
    );
}
}
