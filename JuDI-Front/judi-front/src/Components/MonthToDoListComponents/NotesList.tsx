import * as React from "react";
import Note from "./Note";
import {stickyNote} from "../../Models/StickyNote";



interface NotesListState {
  notes: stickyNote[]
}

interface INotesListProps {
  notes: stickyNote[],
  onType: Function
}

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class NotesList extends React.Component<INotesListProps, NotesListState> {
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




  render() 
  {
    return (
      <div>
        {
          this.state.notes.map(note => (
            <ul className="notes-list">
            <Note
              note={note}
              key={note.id}
              onType={this.props.onType}
            />
            </ul>))
        }
      </div>
    );
  }
}

export default NotesList;



{/* var NotesList = props => {
  var renderNote = note => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      remove={props.remove}
    />
  ); */}

  {/* return <ul className="notes-list">{renderNote}</ul>;
};

export default NotesList; */}
