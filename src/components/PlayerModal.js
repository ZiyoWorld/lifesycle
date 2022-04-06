import React, {Component} from "react";

class PlayerModal extends Component {
    state = {};

    closeBtn = ()=>{
        this.props.hideModal();
    }
    changeCurrentData(type, isInc){
        this.props.changeCurrentData(type, isInc);
    }
    saveChanges = ()=>{
        this.props.saveChanges();
        
    }
    componentWillUnmount(){
        this.props.clearCurrentData();
    }
   
    render() { 
        const {currentData} = this.props;

        return ( <div className="container">
            <div className="card">
                <div className="card-header"> + Add Player Modal</div>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-5">
                            <h5>Player's age</h5>
                            <div className="btn-group">
                                <button className="btn btn-secondary" onClick={()=> this.changeCurrentData("age", false)}>-</button>
                                <button className="btn">{currentData ? currentData.age : 0}</button>
                                <button className="btn btn-info" onClick={()=> this.changeCurrentData("age", true)}>+</button>
                            </div>
                        </div>
                        <div className="col-2 ">
                            <img className="img-fluid" src="https://www.sportyfied.com/thumbs/regular/select_player_shirt_ss_argentina_striped_redwhite_700x700.png" alt="" />
                        </div>

                        <div className="col-5">
                            <h5>Player's value</h5>
                            <div className="btn-group">
                                <button className="btn btn-secondary" onClick={()=> this.changeCurrentData("value", false)}>-</button>
                                <button className="btn"> $💰{currentData ? currentData.value : 0}.00m</button>
                                <button className="btn btn-info" onClick={()=> this.changeCurrentData("value", true)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-warning mr-2" onClick={this.closeBtn}>Cancel</button>
                    <button className="btn btn-success" onClick={this.saveChanges}>Save changes</button>
                </div>
            </div>
        </div> );
    }
}
 
export default PlayerModal;