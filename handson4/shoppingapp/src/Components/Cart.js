import React,{Component} from 'react';
import '../styles.css';
class Cart extends Component {
    
    render() {
       return (
           <div>
               <table className="table">
        {
            this.props.item.map((item)=> {
            return (
                <tr>
                    <td>{item.itemname} </td>
                    <td>{item.price} </td>
                </tr>
        
          
            )
        })
    }
              </table>
              </div>
         
    );  
        }
    }
    export default Cart;
//   myfunc =(props) =>{
//     props.item.map((item)=> {
//                 return (
//                      <tr>
//                          <td>{item.itemname} </td>
//                          <td>{item.price} </td>
//                      </tr>
            
              
//                  )
//              })
//  }

//  render(){
//      return(
//          <div>
//               <table className="table">
//                 {this.myfunc}
//             </table>
//             </div>
//      )
//  }
// }
// export default Cart;