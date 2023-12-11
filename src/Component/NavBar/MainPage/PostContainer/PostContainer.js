import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';
import post_img from "../../../../images/post.jpeg";


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
         }
    }
    getData = () => {//calling the rest from our backend
        let json = [
            {
                "post_ID":1,
                "user_id":1234,
                "user_name":"LE DONG",
                "decription":"I am Le Dong",
                "post_img":post_img,
                "like":"24"

            },
            {
                
                "post_ID":2,
                "user_id":1234,
                "user_name":"Nguyen Ngoc Huyen",
                "decription":"I am Ngoc Huyen",
                "post_img":post_img,
                "like":"210"
            }
        ]
        this.setState({data : json});

    }
    componentDidMount(){
        this.getData();
    }
   

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item) =>(
                        <Post object = {item}/>

                    ))
                }
               
               
            </div>
         );
    }
}
 
export default PostContainer;
