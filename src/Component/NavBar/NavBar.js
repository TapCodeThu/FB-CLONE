import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import "./NavBar.css";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@mui/material';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <Grid container className="navbar__main">
                <Grid item xs = {3}>
                   <div className="navbar__leftbar">
                        <img className="navbar__logo" src={fblogo} width="40px"/>
                        <input className="navbar__search" type="text" placeholder="Search Facebook"/>
                   </div>
                </Grid>
                <Grid item xs = {6}>
                  <div className="navbar__container">
                  <div className="navbar__tabs active">
                        <img src={home} height="35px" width="35px"/>
                   </div>
                   <div className="navbar__tabs">
                        <img src={page} height="35px" width="35px"/>
                   </div>
                   <div className="navbar__tabs">
                        <img src={watch} height="35px" width="35px"/>
                   </div>
                   <div className="navbar__tabs">
                        <img src={market} height="35px" width="35px"/>
                   </div>
                   <div className="navbar__tabs">
                        <img src={group} height="35px" width="35px"/>
                   </div>
                  </div>
                </Grid>
                <Grid item xs = {3}>
                    <div className="navbar__right">
                        <div className="navbar__righttab">
                            <Avatar className="navbar__rightimg" src="https://www.bing.com/images/search?view=detailV2&ccid=ZwmnXBnF&id=6527A1183CC3FF88011858E9FEF77C5D40445C01&thid=OIP.ZwmnXBnFYWI_cYzZsOcuSAHaHa&mediaurl=https%3a%2f%2favatarfiles.alphacoders.com%2f193%2f193352.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6709a75c19c561623f718cd9b0e72e48%3frik%3dAVxEQF189%252f7pWA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1080&q=avatar&simid=607998891029438322&FORM=IRPRST&ck=59BCBCDDB870A8070E722BD7D016590D&selectedIndex=52"/>
                            <div className="navbar_profilename">Dong Le</div>
                        </div>

                    </div>
                </Grid>

            </Grid>
        </div> );
    }
}
 
export default NavBar;
