import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, repeat_days, CardGet} from "../Models/Card";
import CardList from "../Components/CRUDCardComponents/CardList";
import ToggleableCardForm from "../Components/CRUDCardComponents/ToggleableCardForm";
import {updateCard, createCard, getCards} from "../Actions/CardActions";
import {async} from "q";
import {UserProfile} from "../Models/user";
import {getUserProfile} from "../Actions/UserActions";

interface ICRUDPageState {
    cards: Card[]
}



class CRUDPage extends React.Component<RouteComponentProps, ICRUDPageState> {


    constructor(props: RouteComponentProps) {
        super(props);
        //new Date(2020, 0O5, 0O5, 17, 23, 42)
        this.state = {
            cards: []
            // cards: [
            //     {
            //         id: 1,
            //         title: "read a book",
            //         description: "i want to read a book",
            //         due: new Date(),
            //         category_id: 2,
            //         label: "",
            //         with_star: false,
            //         reminder: true,
            //         is_done: true,
            //         is_repetitive: false,
            //         repeat_days: []
            //     },
            //     {
            //         id: 2,
            //         title: "run for 30 minutes",
            //         description: "i want to run everyday to lose some weight",
            //         due: new Date(2020, 0o12, 0o10, 17, 23, 42),
            //         category_id: 1,
            //         label: "",
            //         with_star: true,
            //         reminder: false,
            //         is_done: false,
            //         is_repetitive: true,
            //         repeat_days: [repeat_days[0], repeat_days[2], repeat_days[4]]
            //     }
            // ]
        }
    }



    componentWillMount = async() =>{
        console.log(localStorage.getItem("token"))
        var newCards: CardGet[] = await getCards();
        this.setState({cards:[]})
        window.scrollTo(0, 0)
    }

    //convertToCardFormat = () => {
    //    var cards: Card[]{
    //
    //    }
    //}

    createNewCard = (card: Card) => {
        card.id = Math.floor(Math.random() * 1000);
        this.state.cards.push(card)
        this.setState({cards: this.state.cards});
    }

    updateCard = async (newCard: Card) => {
        const newCards = this.state.cards.map((card)  =>  {
            if(card.id === newCard.id) {
                // var cardCreateResponse : Promise<number> = createCard(newCard)
                return Object.assign({}, newCard)
            } else {
                //var cardUpdateResponse : number = await updateCard(card)
                return card;
            }
        });
        //const n: Card[] = [];
        //for (let k of Array.from(newCards.values())) {
        //    let card: Card = await k;
        //    n.push(card)
        //}
        if(newCard != null) {
            this.setState({cards: newCards});
        }
    }

    deleteCard = (cardID: number) => {
        this.setState({cards: this.state.cards.filter(card => card.id !== cardID)})
    }

    copyCard = (card: Card) => {
        this.state.cards.push(card)
        this.setState({
            cards: this.state.cards
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
        <div>
            <DashboardHeader state={"CRUDCard"}/>
            <main className="d-flex justify-content-center my-4">
                <div className="col-6" style={{alignContent:"center", margin: "auto"}}>
                    <CardList cards={this.state.cards} onDeleteClick={this.deleteCard} onUpdateClick={this.updateCard} onCopyClick={this.copyCard}/>
                    <ToggleableCardForm onCardCreate={this.createNewCard} onCopyClick={this.createNewCard}/>
                </div>
            </main>;
        </div>
        )
    }
}


export default CRUDPage;