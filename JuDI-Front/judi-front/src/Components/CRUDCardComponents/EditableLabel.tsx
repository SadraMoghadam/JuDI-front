import * as React from "react";
import {ButtonHTMLAttributes, createRef, DetailedHTMLProps, RefObject} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from 'react-router-dom';
import {Card, Label} from "../../Models/Card";
import LabelBase from "./LabelBase";

interface EditableCardProps {
    key: number,
    label: Label,
    onDeleteClick: Function,
}



class EditableLabel extends React.Component<EditableCardProps> {
    constructor(props: EditableCardProps) {
        super(props);
    }
    handleDelete = () => {
        this.props.onDeleteClick(this.props.label.id);
    }
    render() : React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined{

        return (
            <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc', margin: "0px 10px", alignItems:"center", alignContent:"center", width:"150"}} >
                {
                    <LabelBase label={this.props.label} onDeleteClick={this.handleDelete}/>
                }
            </div>
        )
    }
}


export default EditableLabel;