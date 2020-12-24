import * as React from "react";
import Note from "./Note";
import {NoteGet} from "../../Models/StickyNote";



interface NotesListState {
  notes: NoteGet
}

interface INotesListProps {
  notes: NoteGet,
}

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class NotesList extends React.Component<INotesListProps, NotesListState> {
  constructor(props: any) {
    super(props)
    this.state = {
      notes: 
        {
          note: "",
        },
    }
  }




  render() 
  {
    return (
      <div>
          
            <ul className="notes-list">
            <Note
              note={this.state.notes}
            />
            </ul>
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
