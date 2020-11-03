import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, WeekDays} from "../Models/Card";
import CardList from "../Components/CRUDCardComponents/CardList";
import ToggleableCardForm from "../Components/CRUDCardComponents/ToggleableCardForm";


class CRUDPage extends React.Component<RouteComponentProps> {

    state = {
        cards: [
            {
                id: 1,
                title: "read a book",
                description: "i want to read a book",
                dueDate: "",
                category: Categories[2],
                label: "",
                isImportant: false,
                reminder: false,
                done: false,
                isRepetitive: false,
                weekDays: []
            },
            {
                id: 2,
                title: "run for 30 minutes",
                description: "i want to run everyday to lose some weight",
                dueDate: "",
                category: Categories[0],
                label: "",
                isImportant: true,
                reminder: false,
                done: false,
                isRepetitive: true,
                weekDays: [WeekDays[0], WeekDays[2], WeekDays[4]]
            }
        ]
    }

    //convertToCardFormat = () => {
    //    var cards: Card[]{
    //
    //    }
    //}

    createNewCard = (card: Card) => {
        card.id = Math.floor(Math.random() * 1000);
        this.setState({cards: this.state.cards.concat([card])});
    }

    updateCard = (newCard: Card) => {
        const newBooks = this.state.cards.map(card => {
            if(card.id === newCard.id) {
                return Object.assign({}, newCard)
            } else {
                return card;
            }
        });

        this.setState({cards: newCard});
    }

    deleteCard = (cardID: number) => {
        this.setState({cards: this.state.cards.filter(card => card.id !== cardID)})
    }

    componentWillMount = async () => {
        window.scrollTo(0, 0)
    }



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
        <div>
            <DashboardHeader state={"CRUDCard"}/>
            <main className="d-flex justify-content-center my-4">
                <div className="col-5" >

                    <CardList cards={this.state.cards} onDeleteClick={this.deleteCard} onUpdateClick={this.updateCard}/>

                </div>
            </main>;
        </div>
        )
    }
}


export default CRUDPage;