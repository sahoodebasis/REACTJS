// import { Button } from 'react-bootstrap';
import * as rb from "react-bootstrap";
import {Link} from  'react-router-dom';
import { NavLink } from 'react-router-dom';
// export const isLoggedIn =false; 
export default function MenuComponent(props){

        console.log("menucomponenttttt &&&&&&"+JSON.stringify(props));
   
        if(!props.isLoggedIn)
        return(
            <div>
           <rb.Navbar bg="dark" variant="dark">
             <rb.Navbar.Brand href="#home">mStock App</rb.Navbar.Brand>
             <rb.Nav className="mr-auto">
             <rb.Nav.Link >
             <NavLink   className="text-muted"  to={{
               pathname:"/users"}}>
             Login
             </NavLink>
             </rb.Nav.Link>
             {/* <rb.Nav.Link href="/companiesanon">Companies</rb.Nav.Link>     */}
             <rb.Nav.Link>   <NavLink  className="text-muted" to={{
                    pathname:'/companiesanon',
                    state:{
                      userid:0
                     }
                    }}>Companies </NavLink>
              </rb.Nav.Link>
               
             </rb.Nav>
           </rb.Navbar>
          </div>
        );
else
    return(

    <div>
 
  <rb.Navbar bg="dark" variant="dark">
    <rb.Navbar.Brand href="#home">mStock App</rb.Navbar.Brand>
    <rb.Nav className="mr-auto">
      {/* <rb.Nav.Link href="/companies">Companies</rb.Nav.Link> */}
      <rb.Nav.Link><NavLink   className="text-muted" to={{
                    pathname:'/companies',
                    state:{
                      userid:props.userid
                     }
                    }}>Companies</NavLink>
       </rb.Nav.Link>
      {/* <rb.Nav.Link href="/watchList">Watch List</rb.Nav.Link> */}
      <rb.Nav.Link><NavLink   className="text-muted" to={{
                    pathname:'/watchList',
                    state:{
                      userid:props.userid
                     }
                    }}>Watch List</NavLink>
     </rb.Nav.Link>
      <rb.Nav.Link><NavLink   className="text-muted" to={{
                    pathname:'/stocks/compare-performance',
                    state:{
                      userid:props.userid
                     }
                    }}>Compare Performance</NavLink> 
      </rb.Nav.Link>              
      {/* <rb.Nav.Link href="/stocks/compare-performance">Compare Performance</rb.Nav.Link> */}
      <rb.Nav.Link href="/users">Logout</rb.Nav.Link>
      {/* <rb.Nav.Link> 
      <NavLink   className="text-muted"  to={{
               pathname:'/users'}}>
             Logout
             </NavLink>
             </rb.Nav.Link>  */}
    </rb.Nav>
  </rb.Navbar>

 </div>
);
}
