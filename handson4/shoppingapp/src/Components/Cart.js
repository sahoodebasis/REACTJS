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
     
    // constructor(props){
    //     super(props);
    // }
//   myfunc =(props) =>{
//       //myfunc =() =>{ :this will also work instead of 33 line
//     //   alert("asdasdsa");
//    // console.log(item);
//     return(
//     this.props.item.map((x)=> {
//                 return (
                   
//                      <tr>
//                          <td>{x.itemname} </td>
//                          <td>{x.price} </td>
//                      </tr>
              
//                  )
//              })
//             );
//             }

//  render(){
//      return(
//          <div>
//               <table className="table">
//               <tbody>
//                 {this.myfunc()}
//                 {/* {this.myfunc(this.props)} */}
//             </tbody>
//             </table>
//             </div>
//      )
//  }
// }
// export default Cart;