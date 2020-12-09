import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {miniCard} from "../../Models/miniCard";
import "../../CSS/schedule.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface miniCardBaseProps {
    mcard: miniCard,
}

interface IminiCardBaseState{
    mcard: miniCard
}

const newcard: miniCard ={
    id: 0,
    title: "",
}

class MiniCardBase extends React.Component<miniCardBaseProps, IminiCardBaseState> {

    // constructor(props: miniCardBaseProps) {
    //     super(props);
    //     this.state= {
    //         card: props.card,
    //         //date: (props.card.due.getFullYear() + '-' + ((props.card.due.getMonth() + 1)) + '-' + props.card.due.getDate() + ' ' +props.card.due.getHours() + ':' + props.card.due.getMinutes()+ ':' + props.card.due.getSeconds())
    //     }
    // }

    constructor (props: miniCardBaseProps) {
        super(props);
        this.state={
            mcard:props.mcard,
        }
      }
      
    render(){
        return(
            <div className="card">
            <div className="card-header">
              <h3>Example Card</h3>
            </div>
            <div className="card-body">
              <p>{this.props.mcard.title}</p>
            </div>
          </div>
        );
    }

}

export default MiniCardBase;