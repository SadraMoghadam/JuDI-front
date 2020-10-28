import { IpcNetConnectOpts } from 'net';
import React from 'react';
import { useState } from 'react';
import "../../CSS/Profile.scss"
import "../../CSS/BasePage.scss"
import profileAvatar from "../../Assets/Images/profile.png";

interface IImage{
  image: string
}

class ProfilePicture extends React.Component<any, IImage>{

  constructor(props: any) {
    super(props);
    this.state = {
        image: ""
    }
  }

  handleImageChange = async (input: React.ChangeEvent<HTMLInputElement>) => {
    if(input.target.files) {
        var file = await input.target.files[0]
        let reader = new FileReader();
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
            <a href="/dashboard"><div className="button">Save Changes</div></a>
        </div>
    )
  }
};



//<div className='photo'>
//<label>
//  Click Me
//  <input
//    type='file'
//    id='photo'
//    name='photo'
//    accept='image/png, image/jpeg'
//    onChange={onChange}
//    value={photo}
//  ></input>
//  <img src="photo" alt=""/>
//</label>
//</div>




//interface IPicture{
//  file: any
//}
//
//
//class ProfilePicture extends React.Component<any,IPicture>{
//
//  constructor(props:any){
//    super(props)
//    this.state = {
//      file: null
//    }
//    this.handleChange = this.handleChange.bind(this)
//  }
//  handleChange(event:any) {
//    this.setState({
//      file: URL.createObjectURL(event.target.files[0])
//    })
//  }
//  render() {
//    return (
//      <div>
//        <input type="file" onChange={this.handleChange}/>
//        <img src={this.state.file}/>
//      </div>
//    );
//  }
//};


export default ProfilePicture