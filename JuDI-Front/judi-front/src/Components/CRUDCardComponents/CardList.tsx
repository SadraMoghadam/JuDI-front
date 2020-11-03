import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";

interface CardListProps {
    cards: Card[],
    onDeleteClick: Function,
    onUpdateClick: Function,
}


class CardList extends React.Component<CardListProps> {
    render() {
        // const cards = this.props.cards.map(card => (
        // ));
        return (
            <div>
                {/*{cards}*/}
            </div>
        );
    }
}


export default CardList;