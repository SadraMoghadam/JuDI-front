import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, Label} from "../../Models/Card";
import CardForm from "./CardForm";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import LabelForm from "./LabelForm";

interface ToggleableCardFormProps {
    onLabelCreate: Function
}

interface IToggleableCardFormState{
    inCreateMode: boolean
}

const label: Label ={
    id: 0,
    title: ""
}

class ToggleableLabelForm extends React.Component<ToggleableCardFormProps, IToggleableCardFormState> {
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
        this.props.onLabelCreate(card);
    }
    render() {
        if (this.state.inCreateMode) {
            return (
                <div className="mb-3 p-4" style={{borderRadius: 10, boxShadow: '0 0 10px #ccc'}} >
                    <LabelForm label={label} onFormSubmit={this.handleFormSubmit} onCancelClick={this.handleCancleClick}/>
                </div>
            )
        }
        return (
          
            <button onClick={this.handleCreateClick} className="createbtn" style={{width: 70, margin: "auto", height: 25}}>
                <i style={{fontSize:13, right: "23%", position: "relative", padding: 0}} className="fa fa-plus"></i>
            </button>
            
        );
    }
}


export default ToggleableLabelForm;