import { IpcNetConnectOpts } from 'net';
import React, {useContext, useReducer} from 'react';
import { useState } from 'react';
import "../../CSS/Profile.scss"
import "../../CSS/BasePage.scss"
import profileAvatar from "../../Assets/Images/profile.png";
import {postImage, postUser} from "../../Actions/UserActions";

interface IImage{
  image: string
}

class ProfilePicture extends React.Component<any, IImage>{

    //profileAv = btoa(profileAvatar)
  constructor(props: any) {
    super(props);
    this.state = {
        image: ""
    }
  }

    componentWillMount = async () => {
        let img = await localStorage.getItem("image");
        if (img != null ) {
            this.setState({image: img})
        }
        else
            this.setState({image: ""})
    }

  handleImageChange = async (input: React.ChangeEvent<HTMLInputElement>) => {
    if(input.target.files) {
        var file = await input.target.files[0]
        let reader = new FileReader();
        if(reader != null)
            reader.readAsBinaryString(file)
        var image = ""
        reader.onload =  () => {
            image = reader.result != null ? reader.result.toString() : ""
            this.setState({
                image: btoa(image)
            })

        };
    }
  }

  submit = async () => {
      //var profileImage: string = await postImage(this.state.image)
      localStorage.setItem("image", this.state.image)
  }

  onCancleClick = () => {
      this.setState({image: ""})
      localStorage.setItem("image", this.state.image)

  }
  
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    return(
        <div>
            <div className="inside-profile-alt" style={{textAlign:"center"}}>
              Upload Image
            </div>
            <div className="profile-picture-input" style={{height:25, width:200, cursor:"pointer"}}>
              <div style={{position:"absolute", cursor:"pointer", textAlign:"center", width:200}}>Click Here</div>
              <input type="file" style={{opacity:0, height:"100%", width:"100%", margin:0, padding:0, cursor:"pointer"}} onChange={this.handleImageChange}/>
            </div>
            <div className="circle" style={{alignItems:"center", height:200, width:200, margin:"auto", marginTop:30}}>
              <div className="circle" style={ {backgroundImage: this.state.image == "" ? `url(${profileAvatar})` : `url("data:image/jpeg;base64,${this.state.image}")`, backgroundSize: 'cover', height: "100%", width: "100%"}}/>
              {/**<img src={this.state.image != "" && this.state.image != null ? `data:image/jpeg;base64,${this.state.image}`: profileAvatar} style={{width:"100%", maxHeight:"100%"}} alt="avatar"/ **/}
            </div>
            {/*<a href="/dashboard"><button className="button" onClick={this.submit}>Save Changes</button></a>*/}
            <button className="canclebutton" onClick={this.onCancleClick} style={{marginRight: 5}}>Remove Image</button>
            <a href="/dashboard"><button className="button" onClick={this.submit}  style={{marginLeft: 5}}>Save Changes</button></a>


        </div>
    )
  }
};




export default ProfilePicture