import React,{Component} from 'react';
import Cart from '../Components/Cart';

 class OnlineShopping extends Component {
    render() {
        const CartInfo = [{itemname:"Laptop",price:80000
    },{itemname:"Laptop",price:80000}
];
    return (
        <div className="mydiv">
        <h1> Items Ordered :</h1>
         <Cart item={CartInfo} />
         </div>   
            );
    }
}

export default OnlineShopping;