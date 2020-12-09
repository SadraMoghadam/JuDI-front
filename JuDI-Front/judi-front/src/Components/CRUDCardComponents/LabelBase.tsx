import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, ConvertId2Category, Label} from "../../Models/Card";
import "../../CSS/Card.scss"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import CardForm from "./CardForm";
import ToggleableCardForm from "./ToggleableCardForm";
import LabelForm from "./LabelForm";

interface CardBaseProps {
    label: Label,
    onDeleteClick: Function,
}



interface ICardBaseState{
    label: Label
    inCreateMode: boolean
}

const newlabel: Label ={
    id: 0,
    title: ""
}

class LabelBase extends React.Component<CardBaseProps, ICardBaseState> {
    constructor(props: CardBaseProps) {
        super(props);
        this.state= {
            label: props.label,
            inCreateMode: false
            //date: (props.card.due.getFullYear() + '-' + ((props.card.due.getMonth() + 1)) + '-' + props.card.due.getDate() + ' ' +props.card.due.getHours() + ':' + props.card.due.getMinutes()+ ':' + props.card.due.getSeconds())
        }
    }

    // renderSwitch(param: string) {
    //     switch(param) {
    //         case "sport":
    //             return "lightgreen";
    //         case "work":
    //             return "lightpink";
    //         case "study":
    //             return "lightblue";
    //         case "educational":
    //             return "lightyellow";
    //         default:
    //             return "lightgray";
    //     }
    // }




    handleCreateClick = () => {
        this.setState({inCreateMode: true});
    }
    leaveCreateMode = () => {
        this.setState({inCreateMode: false});
    }
    handleCancleClick = () => {
        this.leaveCreateMode();
    }
    handleFormSubmit = (card: Card) => {
        this.leaveCreateMode();
        var id = Math.floor(Math.random() * 1000)
    }




    render() {
        if (this.state.inCreateMode) {
            return (
                <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                    <LabelForm label={newlabel} onFormSubmit={this.handleFormSubmit} onCancelClick={this.handleCancleClick}/>
                </div>
            )
        }
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between" >
                    <span>
                        <strong style={{fontSize: 12}}>{this.props.label.title}</strong>
                    </span>
                    <div>
                        <span onClick={() => this.props.onDeleteClick()} style={{cursor:"pointer"}}><i style={{fontSize:14, margin: 0, marginRight: -30, padding: 0}} className="fa fa-trash-o"></i></span>
                    </div>
                </div>
            </div>
        );
    }
}


export default LabelBase;