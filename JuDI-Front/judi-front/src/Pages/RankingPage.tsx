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
import {createCard, getCards, deleteCard, updateCard, createRepetitiveCard} from "../Actions/CardActions";
import {async} from "q";
import {User, UserProfile, UserRanking} from "../Models/user";
import {getRanking, getUserProfile} from "../Actions/UserActions";
import AddLabel from "../Components/CRUDCardComponents/AddLabel";
import RankList from "../Components/RankingComponents/RankList";

interface IRankPageState {
    users: UserRanking[],
}



class RankingPage extends React.Component<RouteComponentProps, IRankPageState> {


    constructor(props: RouteComponentProps) {
        super(props);
        //new Date(2020, 0O5, 0O5, 17, 23, 42)
        this.state = {
            users: []
            // users: [
            //     {
            //         rank: 1,
            //         xp: 250,
            //         user_name: "sadra",
            //         avatar: ""
            //     },
            //     {
            //         rank: 2,
            //         xp: 220,
            //         user_name: "mohammadMohammadi123",
            //         avatar: ""
            //     }
            // ]
        }
    }



    componentWillMount = async() =>{
        var ranking: UserRanking[] = await getRanking()
        this.setState({
            users: ranking
        })
        console.log(this.state.users)
        window.scrollTo(0, 0)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
        <div>
            <DashboardHeader state={"ranking"}/>
            <div className="row col-6" style={{ margin: "0 auto", backgroundColor: "#3EECAC", borderRadius: 20, borderColor: "#404040", border: "solid 2px", height: 40, marginTop: 40}}>
                <div className="col-1" style={{fontSize: 20, height: "100%"}}>
                    Rank
                </div>
                <div className="col-3" style={{ left: "2%", fontSize: 20, height: "100%"}}>
                    Avatar
                </div>
                <div className="col-6" style={{fontSize: 20, height: "100%"}}>
                    Username
                </div>
                <div className="col-2" style={{fontSize: 20, height: "100%"}}>
                    XP
                </div>
            </div>
            <main className="row justify-content-center">

                <div className="col-6" >
                    <RankList users={this.state.users}/>
                </div>
            </main>;
        </div>
        )
    }
}


export default RankingPage;