import * as React from "react";
import NotesList from "./NotesList";
import {stickyNote} from "../../Models/StickyNote";

interface NoteAppState {
  notes: stickyNote[]
}

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class NoteApp extends React.Component<any, NoteAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      notes: [
        {
          id: Date.now(),
          description: "",
        }
      ],
    }
  }


  onType = (editMeId: number, updatedKey:string, updatedValue: string) => {
    /* this event handler updates the sticky note text fields
      - editMeId: the id of the note that the user typed in
      - updatedKey: which field was edited? 'title' or 'description'
      - updatedValue: new value of edited field */
    var updateIdMatch = (note: stickyNote) : stickyNote => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          return {
            ...note,
          };
        } else {
          return {
            ...note,
            description: updatedValue
          };
        }
      }
    };
    var updatedNotes: stickyNote[] = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };

  componentDidUpdate() {
    /* Using lifecycle methods. after each render, save notes data to local storage */
    var stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  }
  componentDidMount() {
    /* after rendering for the first time, read saved
    notes data from local storage and pass that data
    to component state if it exists */
    var stringifiedNotes = localStorage.getItem("savedNotes");
    if (stringifiedNotes) {
      var savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div>
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
        />
      </div>
    );
  }
}

export default NoteApp;
