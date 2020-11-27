import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, CardPost, Categories, ConvertCategory2Id, ConvertId2Category, ConvertDate} from "../../Models/Card";
import {ChangeEvent} from "react"
import "../../CSS/Card.scss"
import "../../CSS/Base.scss"
import {DetailedArguments} from "yargs-parser";
import {number} from "prop-types";
import {getUserLogin} from "../../Actions/UserActions";
import {updateCard, createCard, getCards} from "../../Actions/CardActions";
import Popup from "reactjs-popup";
import * as ReactModal from 'react-modal';

interface CardFormProps {
    card: Card,
    onCancelClick: Function,
    onFormSubmit: Function,
}

interface ICardFormState {
    title: string,
    description : string,
    due: Date,
    category_id: number,
    label: string,
    with_star: boolean,
    reminder: boolean,
    is_done: boolean,
    is_repetitive: boolean,
    repeat_days: string[]
}


class CardForm extends React.Component<CardFormProps, ICardFormState> {


    constructor(props: CardFormProps) {
        super(props);
        this.state = {
            title: this.props.card.title || "" as string,
            description: this.props.card.description || "" as string,
            category_id: this.props.card.category_id || 4,
            is_done: this.props.card.is_done || false,
            due: this.props.card.due || new Date(),
            with_star: this.props.card.with_star || false,
            is_repetitive: this.props.card.is_repetitive || false,
            label: this.props.card.label || "" as string,
            reminder: this.props.card.reminder || false,
            repeat_days: this.props.card.repeat_days || []
        }
    }

    handleFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        console.log("-----------------")
        e.preventDefault();
        this.props.onFormSubmit({...this.state});
        var newCard: CardPost ={
            id: this.props.card.id,
            title: this.state.title,
            description: this.state.description,
            due: ConvertDate(this.state.due),
            //due: this.state.due,
            category_id: this.state.category_id,
            label: this.state.label,
            with_star: this.state.with_star,
            reminder: this.state.reminder,
            is_done: this.state.is_done,
            is_repetitive: this.state.is_repetitive,
            repeat_days: this.state.repeat_days
        }
        var cardCreateResponse : number = await createCard(newCard)
        if(cardCreateResponse == 0)
            alert("card didnt saved to database successfully")
        console.log(newCard)
        console.log(cardCreateResponse)
    }


    c: Card = {
        id: this.props.card.id,
        title: this.props.card.title,
        description: this.props.card.description,
        due: this.props.card.due,
        category_id: 2,
        label: "",
        with_star: false,
        reminder: false,
        is_done: false,
        is_repetitive: false,
        repeat_days: []
    }

    handleTitleUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({title: e.target.value});
    }
    handleLabelUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({label: e.target.value});
    }
    handleReminderUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({reminder: e.target.checked});
    }
    handleImportantUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({with_star: e.target.checked});
    }
    handleRepetitiveUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({is_repetitive: e.target.checked});
    }
    handlecategory_idUpdate = (e: ChangeEvent<HTMLSelectElement>): void => {
        this.setState({category_id: ConvertCategory2Id(e.target.value)});
    }
    handleDescriptionUpdate = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({description: e.target.value});
    }
    handleDateUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        var date = e.target.value
        console.log(e.target.value)
        var newDate = date.split(/-|T|:/)
        console.log(newDate[0])
        console.log(parseInt(date[0], 10))
        //date.toISOString() = e.target.value;
        var nowDate = new Date();
        e.target.checked = true

            //(Number(newDate[0]) == nowDate.getFullYear() && Number(newDate[1]) == nowDate.getMonth()-1 && Number(newDate[2]) == nowDate.getDay() && Number(newDate[3]) < nowDate.getHours()) ||
            //(Number(newDate[0]) == nowDate.getFullYear() && Number(newDate[1]) == nowDate.getMonth()-1 && Number(newDate[2]) == nowDate.getDay() && Number(newDate[3]) == nowDate.getHours() && Number(newDate[4]) < nowDate.getMinutes())
        // if(Number(newDate[0]) < nowDate.getFullYear() || Number(newDate[1]) < nowDate.getMonth()-1 || Number(newDate[2]) < nowDate.getDay() || Number(newDate[3]) < nowDate.getHours() || Number(newDate[4]) < nowDate.getMinutes()){
        //     this.setState({due: null as any})
        // }
        // else {

            this.setState({due: new Date(Number(newDate[0]), Number(newDate[1]) - 1, Number(newDate[2]), Number(newDate[3]), Number(newDate[4]))})
        // }

    }
    handleisDoneUpdate = async () => {
        console.log("-0-")
        var updatedCard: Card = {
            id: this.props.card.id,
            title: this.props.card.title,
            description: this.props.card.description,
            due: this.props.card.due,
            category_id: this.props.card.category_id,
            label: this.props.card.label,
            with_star: this.props.card.with_star,
            reminder: this.props.card.reminder,
            is_done: this.props.card.is_done,
            is_repetitive: this.props.card.is_repetitive,
            repeat_days: this.props.card.repeat_days
        }
        this.setState({is_done: !this.state.is_done});
        //var cardUpdateResponse : number = await updateCard(updatedCard)
    }
    handlerepeat_daysUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        const repeat_days = this.state.repeat_days
        let index

        if (e.target.checked) {
            repeat_days.push(e.target.value)
        } else {
            index = repeat_days.indexOf(e.target.value)
            repeat_days.splice(index, 1)
        }
        this.setState({ repeat_days: repeat_days })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const buttonText = this.props.card.id ? 'Update Card': 'Create Card';
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label id="title" style={{textDecoration:"underline"}}>
                        Title
                    </label>
                    <input type="text" placeholder="Enter a title"
                           value={this.state.title} onChange={this.handleTitleUpdate}
                           className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label style={{textDecoration:"underline"}}>
                        Label
                    </label>
                    <input type="text" placeholder="Enter a Label"
                           value={this.state.label} onChange={this.handleLabelUpdate}
                           className="form-control"
                    />
                </div>

                <div className="row" style={{marginBottom:30, marginTop:30}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <label className="col-lg-8">
                            Reminder:
                        </label>
                        <input type="checkbox"
                               onChange={this.handleReminderUpdate}
                               className="col-lg-4"
                               defaultChecked={this.props.card.reminder ? true : false}
                               style={{height: 15, width: 15, marginTop:-1}}
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <label className="col-lg-8">
                            Important:
                        </label>
                        <input type="checkbox"
                               onChange={this.handleImportantUpdate}
                               className="col-lg-4"
                               defaultChecked={this.props.card.with_star ? true : false}
                               style={{height: 15, width: 15, marginTop:-1}}
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <label className="col-lg-8">
                            Repetitive:
                        </label>
                        <input type="checkbox"
                               onChange={this.handleRepetitiveUpdate}
                               className="col-lg-4"
                               defaultChecked={this.props.card.is_repetitive ? true : false}
                               style={{height: 15, width: 15, marginTop:-1}}
                        />
                    </div>
                </div>
                {
                    this.state.is_repetitive ?
                        <div className="row" style={{marginTop: 30}}>
                            <label className="col-lg-12" style={{textDecoration: "underline"}}>
                                repeat_days
                            </label>
                        </div>
                        :
                        <div></div>
                }

                {
                    this.state.is_repetitive ?
                        <div className="row d-flex justify-content-center" style={{marginBottom: 30}}>

                            <div className="col-lg">
                                <label>sat</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("sat") > -1 ? true : false}
                                       value={"sat"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>sun</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("sun") > -1 ? true : false}
                                       value={"sun"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>mon</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("mon") > -1 ? true : false}
                                       value={"mon"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>tue</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("tue") > -1 ? true : false}
                                       value={"tue"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>wed</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("wed") > -1 ? true : false}
                                       value={"wed"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>thu</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("thu") > -1 ? true : false}
                                       value={"thu"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>fri</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.repeat_days.indexOf("fri") > -1 ? true : false}
                                       value={"fri"} onChange={this.handlerepeat_daysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                        </div>
                        :
                        <div></div>
                }

                <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom:30}}>
                    <label className="col-lg-12" style={{textDecoration:"underline"}}>
                        Category
                    </label>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label className="col-lg-4"></label>
                        <select defaultValue={ConvertId2Category(this.props.card.category_id)} onChange={this.handlecategory_idUpdate} className="col-lg-4" name="category_id" style={{height: 30, borderRadius: 5, cursor: "pointer"}}>
                            <option value="others" style={{backgroundColor: "lightgray"}}>others</option>
                            <option value="sport" style={{backgroundColor: "lightgreen"}}>Sport</option>
                            <option value="work" style={{backgroundColor: "lightpink"}}>Work</option>
                            <option value="study" style={{backgroundColor: "lightblue"}}>Study</option>
                            <option value="educational" style={{backgroundColor: "lightyellow"}}>educational</option>
                        </select>
                        <label className="col-lg-4"></label>
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom:30}}>
                    <label className="col-lg-12" style={{textDecoration:"underline"}}>
                        Due date
                    </label>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {/*<label className="col-lg-1" style={{paddingTop: 8}}>Date:</label>*/}
                        {/*<input className="col-lg-4" type="date" style={{height: 30}}/>*/}
                        {/*<label className="col-lg-1"></label>*/}
                        {/*<label className="col-lg-1" style={{paddingTop: 8}}>Time:</label>*/}

                        <label className="col-lg-4"></label>
                        <input className="col-lg-4" type="datetime-local" onChange={this.handleDateUpdate} style={{height: 30}}/>
                        <label className="col-lg-4"></label>
                    </div>
                </div>

                <div className="form-group">
                    <label style={{textDecoration:"underline"}}>
                        Description
                    </label>
                    <textarea className="form-control" placeholder="Card Description"
                              rows={5} value={this.state.description}
                              onChange={this.handleDescriptionUpdate}>
                        {this.state.description}
                    </textarea>
                </div>
                <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="createbtn" disabled={this.state.title == "" ? true : false} style={{backgroundColor: this.state.title == "" ? "lightgray" : ""}}>
                        {buttonText}
                    </button>
                    <button type="button" className="canclebtn" onClick={() => this.props.onCancelClick()}>
                        Cancel
                    </button>
                </div>
                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className="is_donebtn" disabled={this.state.title == "" ? true : false} style={{backgroundColor: this.state.title == "" ? "lightgray" : ""}} onClick={this.handleisDoneUpdate}>
                        {
                            this.state.is_done ?
                                <span>Undo</span>
                                :
                                <span>is_done</span>
                        }
                    </button>
                </div>

            </form>
        )
    }
}


export default CardForm;