import * as React from "react";
import {stickyNote} from "../../Models/StickyNote";
import "../../CSS/notes.css"

interface NoteProps{
  note: stickyNote,
  key: number,
  onType: Function
}

interface INoteState{
  note: stickyNote
}

class Note extends React.Component<NoteProps, INoteState> {
  constructor(props: NoteProps) {
    super(props);
    this.state= {
        note: props.note,
    }
}

    // updateDescription = (e:  React.ChangeEvent<HTMLFormElement>) => {
    //     var updatedValue = e.target.value;
    //     var editMeId = this.props.note.id;
    //     this.props.onType(editMeId, "description", updatedValue);
    //   };
    handleDescriptionUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      this.setState({note: {
        id: 0,
        description: e.target.value
      }});
    }
      
      render() {
        return (
          // <li className="note">
          //   <textarea
          //     value={this.props.note.description}
          //     onChange={() => this.updateDescription}
          //     placeholder="Description..."
          //     className="note__description"
          //   />
          //     <button> Save </button>
          // </li>
          <div className="note">
            <div className="hero-image">
              <div className="hero-text">
                <label>Month Note</label>
              </div>
            </div>
            
          <textarea className="note__description" placeholder="Description..."
                    rows={5} 
                    onChange={this.handleDescriptionUpdate}>
          </textarea>
          <div className="hero-image">
          <button className="c-smileyButton">
          <div className="c-smileyButton__hoverListener"></div>
          <div className="c-smileyButton__hoverListener"></div>
          <span className="c-smileyButton__face"></span>

            &nbsp;Save Me
        </button>
        </div>
          </div>
        );
      }
}

export default Note;