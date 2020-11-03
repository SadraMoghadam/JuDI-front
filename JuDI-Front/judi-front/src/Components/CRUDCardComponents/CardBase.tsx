import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";

interface CardBaseProps {
    card: Card,
    onEditClick: Function,
    onDeleteClick: Function,
}

class CardBase extends React.Component<CardBaseProps> {
    render() {
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between">
          <span>
            <strong>Title: </strong>{this.props.card.title}
          </span>
                    <div>
                        <span onClick={() => this.props.onEditClick} className="mr-2"><i
                            className="far fa-edit"></i></span>
                        <span onClick={() => this.props.onDeleteClick}><i className="fas fa-trash"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    {this.props.card.description}
                </div>
                <div className="card-footer">
                    <strong>---:</strong>
                </div>
            </div>
        );
    }
}


export default CardBase;