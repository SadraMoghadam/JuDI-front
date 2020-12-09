import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {
    Card,
    CardPost,
    Categories,
    ConvertCategory2Id,
    ConvertId2Category,
    ConvertDate,
    Label
} from "../../Models/Card";
import {ChangeEvent} from "react"
import "../../CSS/Card.scss"
import "../../CSS/Base.scss"
import {DetailedArguments} from "yargs-parser";
import {number} from "prop-types";
import {getUserLogin} from "../../Actions/UserActions";
import { createCard, getCards} from "../../Actions/CardActions";
import Popup from "reactjs-popup";
import * as ReactModal from 'react-modal';

interface CardFormProps {
    label: Label,
    onCancelClick: Function,
    onFormSubmit: Function,
}

interface ILabelFormState {
    title: string
}


class LabelForm extends React.Component<CardFormProps, ILabelFormState> {


    constructor(props: CardFormProps) {
        super(props);
        this.state = {
            title: this.props.label.title || "" as string
        }
    }

    handleFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        console.log("-----------------")
        e.preventDefault();
        this.props.onFormSubmit({...this.state});
        // console.log(newCard)
        // console.log(cardCreateResponse)
    }


    c: Label = {
        id: this.props.label.id,
        title: this.props.label.title,
    }

    handleTitleUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({title: e.target.value});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const buttonText = 'Create Label';
        return (
            <form onSubmit={this.handleFormSubmit} style={{backgroundColor: "a7a7a7"}}>
                <div className="form-group">
                    <label id="title" style={{textDecoration:"underline"}}>
                        Label Name
                    </label>
                    <input type="text" placeholder="Enter a title"
                           value={this.state.title} onChange={this.handleTitleUpdate}
                           className="form-control"
                    />
                </div>

                <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="createbtn" disabled={this.state.title == "" ? true : false} style={{width: "30%", backgroundColor: this.state.title == "" ? "lightgray" : ""}}>
                        {buttonText}
                    </button>
                    <button type="button" className="canclebtn" onClick={() => this.props.onCancelClick()} style={{width: "30%"}}>
                        Cancel
                    </button>
                </div>

            </form>
        )
    }
}


export default LabelForm;