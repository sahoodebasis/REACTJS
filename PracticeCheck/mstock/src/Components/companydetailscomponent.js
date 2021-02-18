// import * as cd from "react-bootstrap";
import {Row,Card,Col} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import MenuComponent from './menucomponent';
import axios from 'axios';

const handleSubmit=(e, userid,companyid) =>{
    console.log("USERID OF COMPANYDETAILSCOMPONENT "+userid+" companyid "+companyid);
    const data={
          
        userId: userid,
        companyId: companyid
    
    }
    axios.post("http://localhost:8080/watchList",data)
    .then(res=>{res.status===200?
    alert("Successfully added to the watch list. "):
    alert("Adding Failed")
    })
}
function CompanyDetailsComponent(props){
        const companydetanonymous=(
                props.companies.map((company)=>
                <Col lg={4}>
                <Card key={company.companyId} className="text-left mt-3">
                <Card.Header style={{fontWeight:'bold'}}>{company.companyName}</Card.Header>
                <Card.Body>
                <Card.Text>
                    {company.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                 <span style={{fontWeight:'bold'}}>Today's Price : ${company.currentStockPrice}</span>
                 
                </Card.Footer>
                </Card>
                </Col>
                
                )
            )
                const companydet=(
                    props.companies.map((company)=>
                    <Col lg={4}> 
                    <Card key={company.companyId} className="text-left mt-3">
                    <Card.Header style={{fontWeight:'bold'}}>{company.companyName}</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        {company.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                     <span style={{fontWeight:'bold'}}>Today's Price : ${company.currentStockPrice}
                      <Button id={props.id} className="ml-1" onClick={(e)=>handleSubmit(e,props.userid,company.companyId)} variant="primary" type = "submit" >Watch
                      </Button>
                      </span>
                     
                    </Card.Footer>
                    </Card>
                    </Col>
                
            )
        )
                          
           
                
    if(props.isLoggedIn) {
        return(
            <div>
                <MenuComponent isLoggedIn={props.isLoggedIn} userid={props.userid}/>
            <div className=" m-3">
            <h2 className="text-left m-3"> Companies List</h2>
          <CardDeck >
             
          {companydet}
        
          </CardDeck>
          </div>
          </div>
        )
    }
    else {
        return (
            <div>
                <MenuComponent isLoggedIn={props.isLoggedIn} userid={props.userid}/>
            <div className=" m-3">
              <h2 className="text-left m-3"> Companies List</h2>
            <CardDeck >
               
            {companydetanonymous}
          
            </CardDeck>
            </div>
            </div>
        );
    }
}
export default CompanyDetailsComponent;