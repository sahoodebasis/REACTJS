import logo from './logo.svg';
import './App.css';
import sr from './office.jpg';


const element="Office Space";
const image=<img src={sr} width="25%" height="25%" alt="Officer Space"/>
const ItemName={Name:"DBS", Rent:50000, Address:"Chennai"};
function App() {
    //const ColorTest=()=>{
    //const mystyle={
    
      let colors=[];
     
      if(ItemName.Rent<=60000)
      {
        colors.push('textRed');
      }
      else{
        colors.push('textGreen');
      }
    
      //return(colors);
    //}

 

  return (
    <div className="App">
     
       
     <h1>{element},at Affordable Range </h1>
     {image}
     <h1>Name:{ItemName.Name}</h1>
     <h3 className={colors} >Rent: Rs.{ItemName.Rent}</h3>
     <h3>Adddress: {ItemName.Address}</h3>
    
    </div>
  );
}

export default App;
//style={ColorTest()}
// style={{colors}}
//className={colors}