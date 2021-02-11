import React,{Component} from 'react';

 class  ListofPlayers extends Component {
    render(){
        return(
            this.props.players.map((item)=>{
                return(
                    <div>
                        <li>Mr. {item.name} <span>{item.score}</span></li>
                    </div>
               
                )
      
            })

        );
    }

}

class Scorebelow70 extends Component {
    render(){
         var players70=[];
        return(
            <div>
          
           { this.props.players.map((item)=>
        {
            if(item.score<=70)
            {
                players70.push(item);
            }
        })
    }        
        <ListofPlayers players={players70}/>
        </div>
    );
    }
}

export {ListofPlayers,Scorebelow70};
