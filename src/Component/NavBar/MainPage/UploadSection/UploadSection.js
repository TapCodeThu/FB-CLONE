import React, {Component } from 'react';
import "./UploadSection.css";
import { Avatar, Paper } from '@mui/material';
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";


class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <Paper  className="upload_container">
               <div className="upload__top">
                    <div>
                        <Avatar className="upload__img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind ?" type="text"/>
                    </div>
               </div>
               <div className="upload__bottom">
                    <div className="upload__tabs">
                        <img src={live} width="35px"/>
                        <div className="upload__text">Live Video</div>

                    </div>
                    <div className="upload__tabs">
                    <img src={image} width="35px"/>
                    <div className="upload__text">Photo/Video</div>


                    </div>
                    <div className="upload__tabs">
                    <img src={feeling} width="35px"/>
                    <div className="upload__text">Feeling/Activity</div>


                    </div>

               </div>
               </Paper>
            </div>
         );
    }
}
 
export default UploadSection;
