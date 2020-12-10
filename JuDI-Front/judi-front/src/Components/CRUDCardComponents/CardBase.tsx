import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, ConvertId2Category} from "../../Models/Card";
import "../../CSS/Card.scss"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import CardForm from "./CardForm";
import ToggleableCardForm from "./ToggleableCardForm";
import {faBold} from "@fortawesome/free-solid-svg-icons/faBold";

interface CardBaseProps {
    card: Card,
    onEditClick: Function,
    onDeleteClick: Function,
    onCopyClick: () => void
}



interface ICardBaseState{
    card: Card
    inCreateMode: boolean
}

const newcard: Card ={
    id: 0,
    title: "",
    description: "",
    due: "",
    category_id: 4,
    label: "",
    with_star: false,
    reminder: false,
    is_done: false,
    is_repetitive: false,
    repeat_days: []
}

class CardBase extends React.Component<CardBaseProps, ICardBaseState> {
    constructor(props: CardBaseProps) {
        super(props);
        this.state= {
            card: props.card,
            inCreateMode: false
            //date: (props.card.due.getFullYear() + '-' + ((props.card.due.getMonth() + 1)) + '-' + props.card.due.getDate() + ' ' +props.card.due.getHours() + ':' + props.card.due.getMinutes()+ ':' + props.card.due.getSeconds())
        }
    }

    renderSwitch(param: string) {
        switch(param) {
            case "sport":
                return "lightgreen";
            case "work":
                return "lightpink";
            case "study":
                return "lightblue";
            case "educational":
                return "lightyellow";
            default:
                return "lightgray";
        }
    }




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
        this.props.onCopyClick();
    }




    render() {
        if (this.state.inCreateMode) {
            return (
                <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                    <CardForm card={newcard} onFormSubmit={this.handleFormSubmit} onCancelClick={this.handleCancleClick}/>
                </div>
            )
        }
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between" style={{backgroundColor: this.renderSwitch(ConvertId2Category(this.props.card.category_id))}}>
                    <span style={{height:25}}>
                        <strong>Title: </strong>{this.props.card.title}
                    </span>
                    <div>
                        <span onClick={() => this.props.onEditClick()} className="mr-2" style={{cursor:"pointer"}}><i style={{fontSize:13, margin: 0, marginRight: -35, padding: 0}} className="fa fa-edit"></i></span>

                        <span onClick={() => {
                            this.props.onCopyClick()
                        }} className="mr-2" style={{cursor:"pointer"}}><i style={{fontSize:11, margin: 0, marginRight: -35, padding: 0}} className="fa fa-copy"></i></span>
                        <span onClick={() => this.props.onDeleteClick()} style={{cursor:"pointer"}}><i style={{fontSize:11, margin: 0, marginRight: -30, padding: 0}} className="fa fa-trash-o"></i></span>
                    </div>
                </div>
                <div className="card-header d-flex justify-content-between" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div>Label: {this.props.card.label}</div>
                    <span><i className="fa fa-star" style={{color: this.props.card.with_star ? "gold" : "black", fontSize:10, margin: "0px -30px", padding: 0, right:0, left:0}}></i></span>
                </div>
                <div className="card-body"  style={{textDecoration: "underline", height: 15}}>
                    Description
                </div>
                <div className="card-body"  style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    {this.props.card.description}
                </div>
                <div className="row card-body" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div className="col-lg-6 col-md-6 col-sm-12">{this.props.card.is_repetitive ? "Is" : "Is not"} repetitive{this.props.card.is_repetitive ? ": [" : ""} {this.props.card.is_repetitive ? this.props.card.repeat_days.map(day => {
                        return <span> {day} </span>
                    }) : ""}{this.props.card.is_repetitive ? "]" : ""}</div>

                    <div className="col-lg-6 col-md-6 col-sm-12">reminder: {this.props.card.reminder ? "On" : "Off"}</div>
                </div>
                <div className="row card-body" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">Due date: {this.props.card.is_repetitive ? "already assigned" : this.props.card.due == null ? "not assigned" : this.props.card.due.replace("00:00:00", "")}</div>
                </div>
                <div className="card-footer" style={{backgroundColor: this.props.card.is_done ? "#3EECAC" : "lightgray"}}>
                    <div>{this.props.card.is_done ? "is_done" : "Ongoing"}</div>
                </div>
            </div>
        );
    }
}


export default CardBase;