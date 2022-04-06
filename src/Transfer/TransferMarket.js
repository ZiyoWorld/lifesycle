import React, { Component } from 'react';
import PlayerModal from '../components/PlayerModal';

class Transfer extends Component {
    
    state = {
        players: [],
        modalVisibility: false,
        currentData: "",
    }
    
    componentDidMount(){
      const players = [
            {
                firstName: "Mbappe",
                age: 23,
                club: "PSJ",
                value: 160
            },
            {
                firstName: "Salah",
                age: 29,
                club: "Liverpool",
                value: 100
            },
            {
                firstName: "Lukaku",
                age: 28,
                club: "Chelsea",
                value: 100
            },
            {
                firstName: "Neymar",
                age: 30,
                club: "PSJ",
                value: 90
            },
        ];
        this.setState({
            players,
        })

    }
     
    removePlayer = (index)=>{
        const players = this.state.players;
        players.splice(index, 1);
        this.setState({
            players,
        })
    }
    openModal = ()=>{
      this.setState({
          modalVisibility: true
      })
    }
    closeModal = ()=>{
        this.setState({
            modalVisibility:false
        })
    }
    changeCurrentData = (type, isInc)=>{
        const newCurrentData = this.state.currentData 
        ? this.state.currentData
        : { firstName: "none", age: 0, club: "none", value: 0 };

        if(type === "age"){
            if(isInc){
                newCurrentData.age++;
            } else if(newCurrentData.age < 1){
                  newCurrentData.age = 0
            } else{
                newCurrentData.age--;
            }
        }
        if(type === "value"){
            if(isInc){
                newCurrentData.value++;
            } else if(newCurrentData.value < 1){
                newCurrentData.value = 0
            } else{
                newCurrentData.value--;
            }
        }

        this.setState({
            currentData: newCurrentData
        })

    }
    
    saveChanges = ()=>{
        const {players, currentData} = this.state;
        players.push(currentData);
        currentData.firstName = "Player"
        this.setState({
            players,
            modalVisibility: false
        })
    }
    clearCurrentData = ()=>{
        this.setState({
            currentData: ""
        })
    }
    
    render() { 
        const {players, modalVisibility, currentData } = this.state;
        return (
         <div className='market'>
             <div className="container">
                 <h1> ⚽ TRANSFER MARKET</h1>
                 <div className="row">
                     <div className="col">
                         <button className='btn btn-primary m-2' onClick={this.openModal}>Add a player</button>
                     </div>
                     {
                         modalVisibility ? <PlayerModal 
                         hideModal={this.closeModal} 
                         currentData={currentData} 
                         changeCurrentData={this.changeCurrentData} 
                         saveChanges={this.saveChanges} 
                         clearCurrentData={this.clearCurrentData}
                         
                          /> : "" 
                     }
                 </div>
            <div className="row">
                <div className="col">
                    <table className='table table-sm table-hover'>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Club</th>
                                <th>Market value</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((player, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{player.firstName}</td>
                                        <td>{player.age}</td>
                                        <td>{player.club}</td>
                                        <td>
                                            <span className='badge badge-primary'>💰 ${player.value}.00m</span>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger btn-xs py-1'
                                            onClick={()=> this.removePlayer(index)}>
                                                Remove
                                                </button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
             </div>
         </div>
        );
    }
}
 
export default Transfer;