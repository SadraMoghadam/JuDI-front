import * as React from "react";
import NotesList from "./NotesList";
import {NoteGet, stickyNote} from "../../Models/StickyNote";
import {getNote} from "../../Actions/NoteAction";

interface NoteAppState {
  notes: NoteGet
}

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class NoteApp extends React.Component<any, NoteAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      notes:
        {
          note: "",
        },
    }
  }


  // onType = (editMeId: number, updatedKey:string, updatedValue: string) => {
  //   /* this event handler updates the sticky note text fields
  //     - editMeId: the id of the note that the user typed in
  //     - updatedKey: which field was edited? 'title' or 'description'
  //     - updatedValue: new value of edited field */
  //   var updateIdMatch = (note: NoteGet) : NoteGet => {
  //     if (note.id !== editMeId) {
  //       return note;
  //     } else {
  //       if (updatedKey === "title") {
  //         return {
  //           ...note,
  //         };
  //       } else {
  //         return {
  //           ...note,
  //           note: updatedValue
  //         };
  //       }
  //     }
  //   };
  //   var updatedNotes: NoteGet[] = this.state.notes.map(updateIdMatch);
  //   this.setState({ notes: updatedNotes });
  // };

  // componentDidUpdate() {
  //   /* Using lifecycle methods. after each render, save notes data to local storage */
  //   var stringifiedNotes = JSON.stringify(this.state.notes);
  //   localStorage.setItem("savedNotes", stringifiedNotes);
  // }
  // componentDidMount() {
  //   /* after rendering for the first time, read saved
  //   notes data from local storage and pass that data
  //   to component state if it exists */
  //   var stringifiedNotes = localStorage.getItem("savedNotes");
  //   if (stringifiedNotes) {
  //     var savedNotes = JSON.parse(stringifiedNotes);
  //     this.setState({ notes: savedNotes });
  //   }
  // }

  componentWillMount = async () => {
    var note: NoteGet = await getNote() 
    console.log(note)
    this.setState({
      notes: note
    })
    console.log(this.state.notes)
  }

  render() {
    return (
      <div>
        <NotesList
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default NoteApp;
