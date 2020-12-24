import * as React from "react";
import NotesList from "./NotesList";
import {stickyNote} from "../../Models/StickyNote";

interface NoteAppState {
<<<<<<< Updated upstream
  notes: stickyNote[]
=======
    notes: string,
    noteGet: string
>>>>>>> Stashed changes
}

/* This container component manages all of the state
for this application, delegating rendering logic to
presentational components. */
class NoteApp extends React.Component<any, NoteAppState> {
<<<<<<< Updated upstream
  constructor(props: any) {
    super(props)
    this.state = {
      notes: [
        {
          id: Date.now(),
          description: "",
        }
      ],
=======
    constructor(props: any) {
        super(props)
        this.state = {
            notes: "",
            noteGet: ""
        }
>>>>>>> Stashed changes
    }


<<<<<<< Updated upstream
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
=======
// onType = (editMeId: number, updatedKey:string, updatedValue: string) => {
// /* this event handler updates the sticky note text fields
// - editMeId: the id of the note that the user typed in
// - updatedKey: which field was edited? 'title' or 'description'
// - updatedValue: new value of edited field */
// var updateIdMatch = (note: NoteGet) : NoteGet => {
// if (note.id !== editMeId) {
// return note;
// } else {
// if (updatedKey === "title") {
// return {
// ...note,
// };
// } else {
// return {
// ...note,
// note: updatedValue
// };
// }
// }
// };
// var updatedNotes: NoteGet[] = this.state.notes.map(updateIdMatch);
// this.setState({ notes: updatedNotes });
// };

// componentDidUpdate() {
// / Using lifecycle methods. after each render, save notes data to local storage /
// var stringifiedNotes = JSON.stringify(this.state.notes);
// localStorage.setItem("savedNotes", stringifiedNotes);
// }
// componentDidMount() {
// /* after rendering for the first time, read saved
// notes data from local storage and pass that data
// to component state if it exists */
// var stringifiedNotes = localStorage.getItem("savedNotes");
// if (stringifiedNotes) {
// var savedNotes = JSON.parse(stringifiedNotes);
// this.setState({ notes: savedNotes });
// }
// }

    componentWillMount = async () => {
        var note: string = await getNote()
        if(note == "type your month goals here")
            note = ""
        console.log("+++" + note)
        this.setState({
            noteGet: note
        })
        console.log(this.state.notes)

    }

    handleDescriptionUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({notes: e.target.value});
    }

    SubmitNote = async () => {
        var note: NotePost = {
            note: this.state.notes
        }
        var response: Number = await postNote(note)
        console.log(response)
    }

    render() {
        return (
            <div>
                <div className="note">

                    <div className="hero-image">
                        <div className="hero-text">
                            <label>Month Note</label>
                        </div>
                    </div>

                    <textarea className="note__description" placeholder="type your month goals here"
                              rows={5} defaultValue={this.state.noteGet}
                              onChange={this.handleDescriptionUpdate}>

                    </textarea>
                    <div className="hero-image">
                        <button type="submit" className="c-smileyButton" onClick={this.SubmitNote}>
                            <div className="c-smileyButton__hoverListener"></div>
                            <div className="c-smileyButton__hoverListener"></div>
                            <span className="c-smileyButton__face"></span>

                            &nbsp;Save Me
                        </button>
                    </div>
                </div>
            </div>
        );
    }
>>>>>>> Stashed changes
}

export default NoteApp;