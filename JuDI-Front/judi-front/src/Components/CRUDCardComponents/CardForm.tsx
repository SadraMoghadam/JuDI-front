import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import {ChangeEvent} from "react"

interface CardFormProps {
    card: Card,
    onCancelClick: Function,
    onFormSubmit: Function,
}



class CardForm extends React.Component<CardFormProps> {
    state = {
        title: this.props.card.title || '',
        description: this.props.card.description || ''
    }
    handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.onFormSubmit({...this.state});
    }
    handleTitleUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({title: e.target.value});
    }
    handleDescriptionUpdate = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({description: e.target.value});
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const buttonText = this.props.card.id ? 'Update Card': 'Create Card';
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>
                        Title
                    </label>
                    <input type="text" placeholder="Enter a title"
                           value={this.state.title} onChange={this.handleTitleUpdate}
                           className="form-control"
                    />
                </div>

                {/*<div className="form-group">*/}
                {/*    <label>*/}
                {/*        Author*/}
                {/*    </label>*/}
                {/*    <input type="text" placeholder="Author's name"*/}
                {/*           value={this.state.card.author} onChange={this.handleAuthorUpdate}*/}
                {/*           className="form-control"*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="form-group">
                    <label>
                        Description
                    </label>
                    <textarea className="form-control" placeholder="Book Description"
                              rows={5} value={this.state.description}
                              onChange={this.handleDescriptionUpdate}
                    >
            {this.state.description}
          </textarea>
                </div>
                <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="btn btn-md btn-primary">
                        {buttonText}
                    </button>
                    <button type="button" className="btn btn-md btn-secondary" onClick={() => this.props.onCancelClick}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}


export default CardForm;