import * as React from "react";
import {createRef, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories, repeat_days, CardGet, CardPost, ConvertDate, Label, LabelGet} from "../../Models/Card";
import {async} from "q";

import "../../CSS/Card.scss"
import CardList from "./CardList";
import ToggleableCardForm from "./ToggleableCardForm";
import LabelList from "./LabelList";
import ToggleableLabelForm from "./ToggleableLabelForm";
import {createCard, createLabel, deleteLabel, getCards, getLabels} from "../../Actions/CardActions";


interface IAddLabelState {
    labels: Label[]
}


class AddLabel extends React.Component<any, IAddLabelState> {


    constructor(props: any) {
        super(props);
        //new Date(2020, 0O5, 0O5, 17, 23, 42)
        this.state = {
            labels: []
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
        var newLabels: Label[] = await getLabels();
        //var newLabels: Label[] = [];
        console.log("add label page")
        console.log(newLabels)
        //var newCards: CardGet[] = []
        var labelForm: Label[] = []
        for (let i = 0; i < newLabels.length; i++)
        {
            var l: Label = {
                id: newLabels[i].id,
                name: newLabels[i].name,
            }
            labelForm.push(l)
        }
        this.setState({labels:labelForm})
        window.scrollTo(0, 0)
    }

    deleteLabel = async(labelID: number) => {
        var cardDeleteResponse = await deleteLabel(labelID)
        var cardDeleteResponse = 1;
        if(cardDeleteResponse == 1)
            this.setState({labels: this.state.labels.filter(label => label.id !== labelID)})
        else
            alert("card is not deleted")
    }



    createNewLabel = async(label: Label) => {
        label.id = Math.floor(Math.random() * 1000);

        var newLabel: Label ={
            id: label.id,
            name: label.name
        }
        // console.log("id ==== " + this.props.card.id)
        console.log("-----------------")
        console.log(newLabel)
        console.log("-----------------")
        var labelCreateResponse : Label = await createLabel(newLabel)
        label.id = labelCreateResponse.id
        this.state.labels.push(label)
        this.setState({labels: this.state.labels});
        // if(cardCreateResponse == 0)
        //     alert("card didnt saved to database successfully")
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
        <div className="Label_popup">
            <main className="d-flex justify-content-center my-4">
                <div className="col-11" style={{alignContent:"center", margin: "auto"}}>
                    <LabelList labels={this.state.labels} onDeleteClick={this.deleteLabel}/>
                    <ToggleableLabelForm onLabelCreate={this.createNewLabel}/>
                </div>
            </main>;
        </div>
        )
    }
}


export default AddLabel;