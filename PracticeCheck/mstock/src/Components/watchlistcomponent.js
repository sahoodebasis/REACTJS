
import React from 'react';
import { Card,Col } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MenuComponent from './menucomponent'; 

var userid;
export class WatchList extends React.Component{
    
    constructor(props){
        
        super(props);

        this.state={
            companyData:[],
        };
        // var userId=this.props.user.id;
        // console.log("state "+this.state.map;
    //    console.log("inside watchlist constructor "+this.props.location.state);
    }

    componentDidMount(){
        
    try{
        userid = this.props.location.state.userid;
        console.log("UserIDDDDDDDDDDDDdd"+JSON.stringify(this.props.location.state))
    }
    catch(e){
        console.log(e);
        userid = this.props.userid;
    }
        axios.get('http://localhost:8080/watchList/'+userid)
        .then(res=>{
            const companydata=res.data;
            this.setState({companyData:companydata});
        })
        .catch((e)=> console.log("Error: "+e.toString()))
    }

        render(){
            console.log(this.state.companyData);
            if(this.state.companyData.length!=0){
            return(
                <div>
                <MenuComponent isLoggedIn={true} userid={userid}/>
                <CompanyDetails companies={this.state.companyData}/>
                </div>
            );
        }
            else{
                return(
                    <div>
                <MenuComponent isLoggedIn={true} userid={userid}/>
                        
                    <div className=" m-3">

                    <h2 className="text-left m-3">My Companies List</h2>
                    <h3 className="text-left m-3">No companies stock prices added to watch list</h3>
                    </div>
                    </div>
                )
            }
        }
}
        //REMOVE ENDPOINT IS NOT MENTIONED IN THE BACKEND REST API THEREFORE I HAVE NOT IMPLEMENTED THAT. RATHER I USED ALERT TO SHOW.
function CompanyDetails(props){
    const companydet=(
        props.companies.map((item)=>
        <Col lg={4}>
        <Card key={item.company.companyId} className="text-left mt-3">
        <Card.Header style={{fontWeight:'bold'}}>{item.company.companyName}</Card.Header>
        <Card.Body>
        <Card.Text>
            {item.company.description}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
         <span style={{fontWeight:'bold'}}>Today's Price : ${item.company.currentStockPrice}
          <Button id={item.id} className="ml-1" onClick={(event)=>handleSubmit(event,item.user.id)} variant="danger" type = "submit" >Remove
          </Button>
          </span>
         
        </Card.Footer>
        </Card>
        </Col>
    
)
)

return(
    <div className=" m-3">
    <h2 className="text-left m-3">My Companies List</h2>
    
  <CardDeck >
     
  {companydet}

  </CardDeck>
  </div>
)

}



const handleSubmit=(event, userId) =>{
  
  console.log("Handle Submit: "+event.target.id);
  alert("deleted successfully!!");
}

