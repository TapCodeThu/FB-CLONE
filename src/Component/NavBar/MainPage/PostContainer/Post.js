import React, { Component } from 'react';
import "./PostContainer.css";
import { Avatar, Paper } from '@mui/material';
import post from "../../../../images/post.jpeg";
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import sharebutton from "../../../../images/share.png";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    isImageAvailable=(data) => {
        return data == "" ? false : true;
    }
  
    render() { 
        return ( 
            <div>
                <Paper className="post__container">
                    <div className="post__header">
                        <div className="post__header__img">
                            <Avatar className="post__img"/>
                        </div>
                        <div className="post__header__text">
                           {this.props.object.user_name}
                        </div>

                    </div>
                    {/**decription */}
                    <div className="post__decription">
                    {this.props.object.decription}

                    </div>
                    {/**image */}

                    <div className="post__image">
                        {
                            this.isImageAvailable() ?  <img src= {this.props.object.post_img} width="600px"/> : <span></span>
                        }
                       

                    </div>
                     {/**Like count */}
                    <div className="post__likecountContainer">
                        <div className="post__like">
                            <img className="post__imgl" src={like}/>
                        </div>
                        <div className="post__likecount">
                        {this.props.object.like}
                        </div>

                    </div>
                    {/**Like share box */}
                    <div className="post__likeShare">
                        <div className="post__tabs">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={likebutton}/>
                            </div>
                            <div className="post__tabtext">
                                Like
                            </div>
                        </div>
                        <div className="post__tabs">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={commentbutton}/>
                            </div>
                            <div className="post__tabtext">
                                comment
                            </div>
                        </div>
                        <div className="post__tabs">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={sharebutton}/>
                            </div>
                            <div className="post__tabtext">
                                Share
                            </div>
                        </div>

                    </div>
                     {/**comment */}
                    <div className="upload__comment">
                    <div className="upload__top">
                    <div>
                        <Avatar className="upload__img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind ?" type="text"/>
                    </div>
               </div>

                    </div>

                </Paper>
            </div>
         );
    }
}
 
export default Post;
