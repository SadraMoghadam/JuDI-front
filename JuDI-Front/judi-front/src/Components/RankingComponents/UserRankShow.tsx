import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import "../../CSS/Rank.scss";
import {UserRanking} from "../../Models/user";
import profileAvatar from "../../Assets/Images/profile.png";

interface UserRankShowProps {
    key: number,
    user: UserRanking
}

interface IUserRankShowState{
    user: UserRanking
}


class UserRankShow extends React.Component<UserRankShowProps, IUserRankShowState> {
    constructor(props: UserRankShowProps) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    render() : React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined{

        return (
            <div className="user_card row">
                <div className="col-1 user_rank_card">
                    {this.state.user.rank}
                </div>
                <div className="col-3 user_avatar_card">
                    <div className="circle" style={{overflow: "hidden", height:45, width:45, borderColor: "white", backgroundImage: this.state.user.avatar == "" ? `url(${profileAvatar}")` : `url(${this.state.user.avatar})`, backgroundSize: 'cover'}}>

                    </div>
                </div>
                <div className="col-6 user_name_card">
                    {this.state.user.user_name}
                </div>
                <div className="col-2 user_xp_card">
                    {this.state.user.xp}
                </div>
            </div>
        )
    }
}


export default UserRankShow;