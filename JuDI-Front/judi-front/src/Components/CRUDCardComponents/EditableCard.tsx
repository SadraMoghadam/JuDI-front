import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import CardForm from "./CardForm";
import CardBase from "./CardBase";

interface EditableCardProps {
    key: number,
    card: Card,
    onDeleteClick: Function,
    onUpdateClick: Function,
}

interface IEditableCardState{
    inEditMode: boolean
}


class EditableCard extends React.Component<EditableCardProps, IEditableCardState> {
    constructor(props: EditableCardProps) {
        super(props);
        this.state = {
            inEditMode: false
        }
    }
    enterEditMode = () => {
        console.log("000")
        this.setState({inEditMode: true});
    }
    leaveEditMode = () => {
        this.setState({inEditMode: false});
    }
    handleDelete = () => {
        this.props.onDeleteClick(this.props.card.id);
    }
    handleUpdate = (card: Card) => {
        this.leaveEditMode()
        card.id = this.props.card.id;
        this.props.onUpdateClick(card);
    }
    render() : React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined{

        return (
            <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc', margin: "auto", alignItems:"center", alignContent:"center", width:"100%"}} >
                {
                    this.state.inEditMode ?
                    <CardForm card={this.props.card} onCancelClick={this.leaveEditMode} onFormSubmit={this.handleUpdate}/>

                    : (
                    <CardBase card={this.props.card} onEditClick={this.enterEditMode} onDeleteClick={this.handleDelete}/>
                    )
                }
            </div>
        )
    }
}


export default EditableCard;