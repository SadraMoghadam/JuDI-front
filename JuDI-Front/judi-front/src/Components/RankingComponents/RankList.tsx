import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import {UserRanking} from "../../Models/user";
import UserRankShow from "./UserRankShow";

interface RankListProps {
    users: UserRanking[],
}

interface IRankListState {
    users: UserRanking[]
}

class RankList extends React.Component<RankListProps, IRankListState> {
    constructor(props: any) {
        super(props)
        this.state = {
            users: this.props.users
        }
    }



    render() {
        const users = this.props.users.map(user => (
            <UserRankShow
                key={user.rank}
                user={user}
            ></UserRankShow>
        ));
        return (
            <div>
                {users}
            </div>
        );
    }
}


export default RankList;