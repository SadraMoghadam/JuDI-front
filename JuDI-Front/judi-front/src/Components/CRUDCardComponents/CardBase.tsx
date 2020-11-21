import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import "../../CSS/Card.scss"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import CardForm from "./CardForm";
import ToggleableCardForm from "./ToggleableCardForm";

interface CardBaseProps {
    card: Card,
    onEditClick: Function,
    onDeleteClick: Function,
    onCopyClick: Function
}




class CardBase extends React.Component<CardBaseProps> {
    constructor(props: CardBaseProps) {
        super(props);
        this.state= {
            card: props.card,
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


    render() {
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between" style={{backgroundColor: this.renderSwitch(this.props.card.category_id)}}>
                    <span>
                        <strong>Title: </strong>{this.props.card.title}
                    </span>
                    <div>
                        <span onClick={() => this.props.onEditClick()} className="mr-2" style={{cursor:"pointer"}}><i className="fa fa-edit"></i></span>

                        <span onClick={() => {this.props.onCopyClick}} className="mr-2" style={{cursor:"pointer"}}><i className="fa fa-copy"></i>
                            {/*<ToggleableCardForm onCardCreate={this.props.onCopyClick}/>*/}
                        </span>
                        <span onClick={() => this.props.onDeleteClick()} style={{cursor:"pointer"}}><i className="fa fa-trash-o"></i></span>
                    </div>
                </div>
                <div className="card-header d-flex justify-content-between" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div>Label: {this.props.card.label}</div>
                    <span><i className="fa fa-star" style={{color: this.props.card.with_star ? "gold" : "black"}}></i></span>
                </div>
                <div className="card-body"  style={{textDecoration: "underline", height: 15}}>
                    Description
                </div>
                <div className="card-body"  style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    {this.props.card.description}
                </div>
                <div className="row card-body" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div className="col-lg-6 col-md-6 col-sm-12">{this.props.card.isRepetitive ? "Is" : "Is not"} repetitive{this.props.card.isRepetitive ? ": [" : ""} {this.props.card.isRepetitive ? this.props.card.weekDays.map(day => {
                        return <span> {day} </span>
                    }) : ""}{this.props.card.isRepetitive ? "]" : ""}</div>

                    <div className="col-lg-6 col-md-6 col-sm-12">reminder: {this.props.card.reminder ? "On" : "Off"}</div>
                </div>
                <div className="row card-body" style={{borderBottom: "solid", borderWidth: 1, borderColor: "#3EECAC"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">Due date: {this.props.card.isRepetitive ? "already assigned" : this.props.card.due == null ? "not assigned" : this.props.card.due.toLocaleString()}</div>
                </div>
                <div className="card-footer" style={{backgroundColor: this.props.card.is_done ? "#3EECAC" : "lightgray"}}>
                    <div>{this.props.card.is_done ? "is_done" : "Ongoing"}</div>
                </div>
            </div>
        );
    }
}


export default CardBase;