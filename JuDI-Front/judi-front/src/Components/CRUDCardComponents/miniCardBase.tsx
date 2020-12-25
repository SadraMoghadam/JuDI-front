import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {miniCard} from "../../Models/miniCard";
import "../../CSS/schedule.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {CardGet} from "../../Models/Card";

interface miniCardBaseProps {
    mcard: CardGet,
}

interface IminiCardBaseState{
    mcard: CardGet
}

const newcard: miniCard ={
    id: 0,
    title: "",
    due: "",
    label: "",
}

class MiniCardBase extends React.Component<miniCardBaseProps, IminiCardBaseState> {

    // constructor(props: miniCardBaseProps) {
    //     super(props);
    //     this.state= {
    //         card: props.card,
    //         //date: (props.card.due.getFullYear() + '-' + ((props.card.due.getMonth() + 1)) + '-' + props.card.due.getDate() + ' ' +props.card.due.getHours() + ':' + props.card.due.getMinutes()+ ':' + props.card.due.getSeconds())
    //     }
    // }
  componentWillMount = async () => {
    console.log("/////////////")
    console.log(this.props.mcard)
  }

    constructor (props: miniCardBaseProps) {
        super(props);
        this.state={
            mcard:props.mcard,
        }
      }
      
    render(){
        return(
            <div className="card" >
            <div className="card-header" style={{backgroundColor: this.props.mcard.category_id == 0 ? "lightgreen" : this.props.mcard.category_id == 1 ? "lightpink" : this.props.mcard.category_id==2 ? "lightblue" : this.props.mcard.category_id ==3 ? "lightyellow" : "lightgray" }}>
              <h3>{this.props.mcard.title}</h3>
            </div>
            
            <div className="card-body">
              <p style={{width:"30%",margin:"auto auto 5px",borderRadius:5, backgroundColor: this.props.mcard.is_done ? "#3EECAC" : "cyan"}}>{this.props.mcard.is_done ? "Done" : "onGoing"}</p>
            </div>
            
            <div className="card-body" style={{backgroundColor: this.props.mcard.category_id == 0 ? "lightgreen" : this.props.mcard.category_id == 1 ? "lightpink" : this.props.mcard.category_id==2 ? "lightblue" : this.props.mcard.category_id ==3 ? "lightyellow" : "lightgray" }}>
              <p></p>
              <p>{this.props.mcard.label_name}</p>
            </div>
          </div>
        );
    }

}

export default MiniCardBase;