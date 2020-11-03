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


class EditableCard extends React.Component<EditableCardProps> {
    state = {
        inEditMode: false
    };
    enterEditMode = () => {
        this.setState({inEditMode: true});
    }
    leaveEditMode = (): any => {
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
        const component = () => {
            if(this.state.inEditMode) {
                return (
                    <CardForm card={this.props.card} onCancelClick={this.leaveEditMode()} onFormSubmit={this.handleUpdate}/>);
            }
            return (
                <CardBase card={this.props.card} onEditClick={this.enterEditMode} onDeleteClick={this.handleDelete}/>
            );
        }
        return (
            <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                {component()}
            </div>
        )
    }
}


export default EditableCard;