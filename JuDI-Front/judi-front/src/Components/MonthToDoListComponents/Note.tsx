import * as React from "react";
import {NotePost, stickyNote, NoteGet} from "../../Models/StickyNote";
import "../../CSS/notes.css"
import {postNote} from "../../Actions/NoteAction"

interface NoteProps{
  note: NoteGet,
}

interface INoteState{
  note: NoteGet
}

class Note extends React.Component<NoteProps, INoteState> {
  constructor(props: NoteProps) {
    super(props);
    this.state= {
        note: props.note,
    }
}

componentWillMount= async() => {
  console.log(this.props.note)
}

    // updateDescription = (e:  React.ChangeEvent<HTMLFormElement>) => {
    //     var updatedValue = e.target.value;
    //     var editMeId = this.props.note.id;
    //     this.props.onType(editMeId, "description", updatedValue);
    //   };
    handleDescriptionUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      this.setState({note: {
        note: e.target.value
      }});
    }

     SubmitNote = async ()  => {
       var note: NotePost = {
         note: this.state.note.note
       }
        var response: Number = await postNote(note)
        console.log(response)
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
                <label>Month Note {this.state.note.note}</label>
              </div>
            </div>
            
          <textarea className="note__description" placeholder="Description..."
                    rows={5} 
                    onChange={this.handleDescriptionUpdate}>
                      {this.state.note.note}
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
        );
      }
}

export default Note;