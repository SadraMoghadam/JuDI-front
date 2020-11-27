import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories} from "../../Models/Card";
import CardForm from "./CardForm";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface ToggleableCardFormProps {
    onCardCreate: Function
}

interface IToggleableCardFormState{
    inCreateMode: boolean
}

const card: Card ={
    id: 0,
    title: "",
    description: "",
    due: new Date(),
    category_id: Categories[4],
    label: "",
    with_star: false,
    reminder: false,
    is_done: false,
    isRepetitive: false,
    weekDays: []
}

class ToggleableCardForm extends React.Component<ToggleableCardFormProps, IToggleableCardFormState> {
    constructor(props: ToggleableCardFormProps) {
        super(props);
        this.state = {
            inCreateMode: false
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
        this.props.onCardCreate(card);
    }
    render() {
        if (this.state.inCreateMode) {
            return (
                <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                    <CardForm card={card} onFormSubmit={this.handleFormSubmit} onCancelClick={this.handleCancleClick}/>
                </div>

            )
        }
        return (
          
            <button onClick={this.handleCreateClick} className="createbtn">
                <i className="fa fa-plus"></i>
            </button>
            
        );
    }
}


export default ToggleableCardForm;