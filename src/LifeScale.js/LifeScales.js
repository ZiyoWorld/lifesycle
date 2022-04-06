import React from "react";
import Note from "./Note";


class LifeScales extends React.Component{
    state = {
       status : true
    }
    
    changeStatus = (type)=>{
       this.setState({
        status: type === "show"
       })
    }
     render(){
        return(
           <div>
                 <div className="wrapper">
                    <h1>React LifeScale</h1>
                    <button onClick={()=> this.changeStatus("show")}>Show</button>
                    <button onClick={()=> this.changeStatus("hide")}>Hide</button>
                       {
                         this.state.status ? <Note /> : "" 
                       }
                 </div>
           </div>
        )
     }
  }
  export default LifeScales;