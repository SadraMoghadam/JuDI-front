import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject, TextareaHTMLAttributes} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Categories} from "../../Models/Card";
import {ChangeEvent} from "react"
import "../../CSS/Card.scss"
import "../../CSS/Base.scss"
import {DetailedArguments} from "yargs-parser";
import {number} from "prop-types";

interface CardFormProps {
    card: Card,
    onCancelClick: Function,
    onFormSubmit: Function,
}

interface ICardFormState {
    title: string,
    description : string,
    dueDate: Date,
    category: string,
    label: string,
    isImportant: boolean,
    reminder: boolean,
    done: boolean,
    isRepetitive: boolean,
    weekDays: string[]
}


class CardForm extends React.Component<CardFormProps, ICardFormState> {


    constructor(props: CardFormProps) {
        super(props);
        this.state = {
            title: this.props.card.title || "" as string,
            description: this.props.card.description || "" as string,
            category: this.props.card.category || "" as string,
            done: this.props.card.done || false,
            dueDate: this.props.card.dueDate || new Date(),
            isImportant: this.props.card.isImportant || false,
            isRepetitive: this.props.card.isRepetitive || false,
            label: this.props.card.label || "" as string,
            reminder: this.props.card.reminder || false,
            weekDays: this.props.card.weekDays || []
        }
    }

    handleFormSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.onFormSubmit({...this.state});
    }


    c: Card = {
        id: this.props.card.id,
        title: this.props.card.title,
        description: this.props.card.description,
        dueDate: this.props.card.dueDate,
        category: Categories[2],
        label: "",
        isImportant: false,
        reminder: false,
        done: false,
        isRepetitive: false,
        weekDays: []
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
        this.setState({isImportant: e.target.checked});
    }
    handleRepetitiveUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({isRepetitive: e.target.checked});
    }
    handleCategoryUpdate = (e: ChangeEvent<HTMLSelectElement>): void => {
        this.setState({category: e.target.value});
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
        if(Number(newDate[0]) < nowDate.getFullYear() || Number(newDate[1]) < nowDate.getMonth()-1 || Number(newDate[2]) < nowDate.getDay() || Number(newDate[3]) < nowDate.getHours() || Number(newDate[4]) < nowDate.getMinutes()){
            this.setState({dueDate: null as any})
        }
        else {

            this.setState({dueDate: new Date(Number(newDate[0]), Number(newDate[1]) - 1, Number(newDate[2]), Number(newDate[3]), Number(newDate[4]))})
        }

    }
    handleDoneUpdate = (): void => {
        console.log("-0-")
        this.setState({done: !this.state.done});
    }
    handleWeekDaysUpdate = (e: ChangeEvent<HTMLInputElement>): void => {
        const weekDays = this.state.weekDays
        let index

        if (e.target.checked) {
            weekDays.push(e.target.value)
        } else {
            index = weekDays.indexOf(e.target.value)
            weekDays.splice(index, 1)
        }
        this.setState({ weekDays: weekDays })
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
                               defaultChecked={this.props.card.isImportant ? true : false}
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
                               defaultChecked={this.props.card.isRepetitive ? true : false}
                               style={{height: 15, width: 15, marginTop:-1}}
                        />
                    </div>
                </div>
                {
                    this.state.isRepetitive ?
                        <div className="row" style={{marginTop: 30}}>
                            <label className="col-lg-12" style={{textDecoration: "underline"}}>
                                WeekDays
                            </label>
                        </div>
                        :
                        <div></div>
                }

                {
                    this.state.isRepetitive ?
                        <div className="row d-flex justify-content-center" style={{marginBottom: 30}}>

                            <div className="col-lg">
                                <label>sat</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("sat") > -1 ? true : false}
                                       value={"sat"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>sun</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("sun") > -1 ? true : false}
                                       value={"sun"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>mon</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("mon") > -1 ? true : false}
                                       value={"mon"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>tue</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("tue") > -1 ? true : false}
                                       value={"tue"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>wed</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("wed") > -1 ? true : false}
                                       value={"wed"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>thu</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("thu") > -1 ? true : false}
                                       value={"thu"} onChange={this.handleWeekDaysUpdate}
                                       style={{height: 15, width: 15}}/>
                            </div>
                            <div className="col-lg">
                                <label>fri</label><br/>
                                <input type="checkbox"
                                       defaultChecked={this.props.card.weekDays.indexOf("fri") > -1 ? true : false}
                                       value={"fri"} onChange={this.handleWeekDaysUpdate}
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
                        <select defaultValue={this.props.card.category} onChange={this.handleCategoryUpdate} className="col-lg-4" name="category" style={{height: 30, borderRadius: 5, cursor: "pointer"}}>
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
                    <button type="submit" className="donebtn" disabled={this.state.title == "" ? true : false} style={{backgroundColor: this.state.title == "" ? "lightgray" : ""}} onClick={this.handleDoneUpdate}>
                        {
                            this.state.done ?
                                <span>Undo</span>
                                :
                                <span>Done</span>
                        }
                    </button>
                </div>
            </form>
        )
    }
}


export default CardForm;