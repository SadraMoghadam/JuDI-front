import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";

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
    render() {

        return (
            <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                
            </div>
        )
    }
}


export default EditableCard;