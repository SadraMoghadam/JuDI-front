import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Label} from "../../Models/Card";
import EditableLabel from "./EditableLabel";
import {deleteCard} from "../../Actions/CardActions";

interface CardListProps {
    labels: Label[],
    onDeleteClick: Function
}

interface ICardListState {
    labels: Label[]
}

class LabelList extends React.Component<CardListProps, ICardListState> {
    constructor(props: any) {
        super(props)
        this.state = {
            labels: this.props.labels
        }
    }





    render() {
        const labels = this.props.labels.map(label => (
            <EditableLabel
                key={label.id}
                label={label}
                onDeleteClick={this.props.onDeleteClick}
            ></EditableLabel>
        ));
        return (
            <div style={{margin:"auto"}}>
                {labels}
            </div>
        );
    }
}


export default LabelList;