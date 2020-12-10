import * as React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, repeat_days, CardGet, CardPost, ConvertDate} from "../Models/Card";
import CardList from "../Components/CRUDCardComponents/CardList";
import ToggleableCardForm from "../Components/CRUDCardComponents/ToggleableCardForm";
import { createCard, getCards, deleteCard, updateCard} from "../Actions/CardActions";
import {async} from "q";
import {UserProfile} from "../Models/user";
import {getUserProfile} from "../Actions/UserActions";
import AddLabel from "../Components/CRUDCardComponents/AddLabel";

interface ICRUDPageState {
    cards: Card[],
    addLabel: boolean
}



class CRUDPage extends React.Component<RouteComponentProps, ICRUDPageState> {


    constructor(props: RouteComponentProps) {
        super(props);
        //new Date(2020, 0O5, 0O5, 17, 23, 42)
        this.state = {
            addLabel: false,
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
        //var newCards: CardGet[] = []
        var cardForm: Card[] = []
        for (let i = 0; i < newCards.length; i++)
        {
            var c: Card = {
                id: newCards[i].id,
                due: newCards[i].due,
                is_done: newCards[i].is_done,
                reminder: newCards[i].reminder,
                with_star: newCards[i].with_star,
                label: "",
                category_id: newCards[i].category_id,
                description: newCards[i].description,
                title: newCards[i].title,
                is_repetitive: newCards[i].is_repetitive,
                repeat_days: []
            }
            cardForm.push(c)
        }
        this.setState({cards:cardForm})
        window.scrollTo(0, 0)
    }

    //convertToCardFormat = () => {
    //    var cards: Card[]{
    //
    //    }
    //}

    createNewCard = async(card: Card) => {
        console.log("----//////////aaaaaaaaaaaa")
        // card.id = Math.floor(Math.random() * 1000);

        var newCard: CardPost ={
            id: card.id,
            title: card.title,
            description: card.description,
            due: card.due,
            //due: this.state.due,
            category_id: card.category_id,
            label: card.label,
            with_star: card.with_star,
            reminder: card.reminder,
            is_done: card.is_done,
            is_repetitive: card.is_repetitive,
            repeat_days: card.repeat_days
        }
        console.log(card.due)
        // console.log("id ==== " + this.props.card.id)
        var cardCreateResponse : CardGet = await createCard(newCard)

        console.log("Res ========== " + cardCreateResponse);
        console.log("CardID ========== " + card.id);
        console.log("repeatDays ========== " + card.repeat_days);

        card.id = cardCreateResponse.id
        this.state.cards.push(card)
        this.setState({cards: this.state.cards});
        if(cardCreateResponse == null)
            alert("card didnt saved to database successfully")
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
        console.log(newCard.id)
        var cardDeleteResponse = await updateCard(newCard.id)

        if(newCard != null) {
            this.setState({cards: newCards});
        }
        if(cardDeleteResponse == 0)
            alert("card is not updated")
        //const n: Card[] = [];
        //for (let k of Array.from(newCards.values())) {
        //    let card: Card = await k;
        //    n.push(card)
        //}
    }

    deleteCard = async(cardID: number) => {
        var cardDeleteResponse = await deleteCard(cardID)
        if(cardDeleteResponse == 1)
            this.setState({cards: this.state.cards.filter(card => card.id !== cardID)})
        else
            alert("card is not deleted")
    }

    copyCard = async(card: Card) => {

        var newCard: CardPost ={
            id: card.id,
            title: card.title,
            description: card.description,
            due: card.due,
            //due: this.state.due,
            category_id: card.category_id,
            label: card.label,
            with_star: card.with_star,
            reminder: card.reminder,
            is_done: card.is_done,
            is_repetitive: card.is_repetitive,
            repeat_days: card.repeat_days
        }
        var cardCreateResponse : CardGet = await createCard(newCard)
        var c: Card = {
            id: cardCreateResponse.id,
            due: card.due,
            is_done: card.is_done,
            reminder: card.reminder,
            with_star: card.with_star,
            label: "",
            category_id: card.category_id,
            description: card.description,
            title: card.title,
            is_repetitive: card.is_repetitive,
            repeat_days: []
        }
        this.state.cards.push(c)
        this.setState({
            cards: this.state.cards
        })
        // if(cardCreateResponse == 0)
        //     alert("card didnt saved to database successfully")
        // console.log("id ==== " + this.props.card.id)

    }

    handleLabelButton = (): void => {
        console.log("-----------" + this.state.addLabel)
        if(this.state.addLabel == false)
        {
            this.setState({
                addLabel: true
            })
        }
        else
        {
            this.setState({
                addLabel: false
            })
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
        <div>
            <div className="labels_button" onClick={() => this.handleLabelButton()}>Labels</div>
            {this.state.addLabel ? <AddLabel /> : ""}
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