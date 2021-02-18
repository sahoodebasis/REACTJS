import React from 'react';
import axios from 'axios';

export default class PerformanceComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyData:[]
            // isLoggedIn:true
        };
        console.log("inside");
    }
    
    componentWillMount(){
        let url='http://localhost:8080/stocks/compare-performance?companyCode1='+this.props.companyCode1+'&companyCode2='+this.props.companyCode2+'&from='+this.props.from+'&to='+this.props.to
        console.log(url);
        axios.get(url)
    .then(res=>{
        console.log(res.data);
        const companydata=res.data;
        this.setState({companyData:companydata});
    })
}


render(){
    return(
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Company</th>
                    <th scope="col">Stock Price </th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.companyData.map(company=><RowCreator item={company} companyCode1={this.props.companyCode1}/>)}
                    </tbody>
                    </table>
            </div>
    )
}
}

class RowCreator extends React.Component{
    render(){
        var companylist=this.props.item;
        return(
            <tr>
                <td>{this.props.companyCode1==companylist.company.companyId?companylist.date:""}</td>
                <td>{companylist.company.companyName}</td>
                <td>${companylist.stockPrice}</td>
                </tr>
        )

    }
}