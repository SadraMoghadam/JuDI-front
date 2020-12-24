import { IpcNetConnectOpts } from 'net';
import React, {useContext, useReducer} from 'react';
import { useState } from 'react';
import "../../CSS/Profile.scss"
import "../../CSS/BasePage.scss"
import profileAvatar from "../../Assets/Images/profile.png";
import {getUserFullData, postImage, removeAvatar, userProfileUpdate} from "../../Actions/UserActions";
import {UserFullData} from "../../Models/user";
import {withRouter} from "react-router";
import {delay} from "q";

interface IImage{
    image: string,
    imageFile: File,
}

const b64toBlob = (b64Data: string, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

class ProfilePicture extends React.Component<any, IImage>{

    //profileAv = btoa(profileAvatar)
  constructor(props: any) {
    super(props);
    this.state = {
        image: "",
        imageFile: null as any,
    }
  }

    componentWillMount = async () => {
        let data = await getUserFullData();
        console.log(data.avatar)
        let img = data.avatar
        if (img == "" || img == null as any ) {

            console.log("__________>" + this.state.image)
            this.setState({image: ""})
        }
        else
        {

            console.log("------------>" + this.state.image)
            this.setState({image: img})
        }


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
                image: btoa(image),
                imageFile: file
            })

        };
    }
  }



  submit = async () => {

      var response: number = 0
      if(this.state.image == "") {
          //var blob = b64toBlob(profileAvatar);

          const byteCharacters = atob(profileAvatar);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], {type: "image/jpeg"});

          const blobParts: BlobPart[] = [blob];


          let emptyFile: File = new File(blobParts, "defaultAvatar")
          response = await postImage(emptyFile)

      }
      else {
          console.log(this.state.imageFile)
          response = await postImage(this.state.imageFile)
      }

      var userData: UserFullData = await getUserFullData();
      console.log(userData)
      if(response == 1) {
          localStorage.setItem("image", userData.avatar)
      }
      alert("profile avatar saved successfully")
      //this.props.history.push("/dashboard")

  }

  onCancleClick = async () => {
      var response: number = await removeAvatar();
      if(response == 1)
        this.setState({image: ""})

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
              <div className="circle" style={ {backgroundImage: this.state.image == "" ? `url(${profileAvatar})` : this.state.image.includes("http:") ? `url(${this.state.image})` : `url("data:image/jpeg;base64,${this.state.image}")`, backgroundSize: 'cover', height: "100%", width: "100%"}}/>
              {/**<img src={this.state.image != "" && this.state.image != null ? `data:image/jpeg;base64,${this.state.image}`: profileAvatar} style={{width:"100%", maxHeight:"100%"}} alt="avatar"/ **/}
            </div>
            {/*<a href="/dashboard"><button className="button" onClick={this.submit}>Save Changes</button></a>*/}
            <button className="canclebutton" onClick={this.onCancleClick} style={{marginRight: 5}}>Remove Image</button>
            {/*<a href="/dashboard">*/}
                <button className="button" onClick={this.submit}  style={{marginLeft: 5}}>Save Changes</button>
            {/*</a>*/}


        </div>
    )
  }
};




export default withRouter(ProfilePicture)