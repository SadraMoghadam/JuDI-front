import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import EditableCard from "./EditableCard";

interface CardListProps {
    cards: Card[],
    onDeleteClick: Function,
    onUpdateClick: Function,
    onCopyClick: (card: Card) => void
}

interface ICardListState {
    cards: Card[]
}

class CardList extends React.Component<CardListProps, ICardListState> {
    constructor(props: any) {
        super(props)
        this.state = {
            cards: this.props.cards
        }
    }



    render() {
        const cards = this.props.cards.map(card => (
            <EditableCard
                key={card.id}
                card={card}
                onDeleteClick={this.props.onDeleteClick}
                onUpdateClick={this.props.onUpdateClick}
                onCopyClick={() => this.props.onCopyClick(card)}
            ></EditableCard>
        ));
        return (
            <div style={{margin:"auto"}}>
                {cards}
            </div>
        );
    }
}


export default CardList;