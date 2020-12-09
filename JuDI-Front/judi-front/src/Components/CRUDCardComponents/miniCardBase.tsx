import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card} from "../../Models/Card";
import "../../CSS/Card.scss"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import CardBase from "./CardBase";

class miniCardBase extends CardBase {
    render(){
        return(
            <div className="minicard">
                <div className="card-header d-flex justify-content-between" >
                    <span>
                        <strong>Title: </strong>{this.props.card.title}
                    </span>
                </div>
            </div>
        );
    }

}

export default miniCardBase;