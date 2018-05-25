import React, { Component } from 'react';
import './UserLogo.css';

export class UserLogo extends Component {
    render() {

        var logoStyle = {
            background: `url(${this.props.userImage}) no-repeat`
        };
        return (
            <div>
                <div className="Infographic-UserLogo" style={logoStyle}> </div>
              {/* <img className="Infographic-UserLogo" 
                    src={this.props.userImage || "https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-128.png"}
                    alt={this.props.userName} aria-label={this.props.userName} role="img"/> */}
            </div>
        );
    }
}

// export default UserLogo;