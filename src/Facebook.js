import React, { Component } from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook'
var AWS = require("aws-sdk")

class Facebook extends Component {

    constructor() {
        super()
        this.handleResponse = this.handleResponse.bind(this)
    }

    componentWillMount() {
        AWS.config.update({
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
            }
        })
    }

    handleResponse = (data) => {
        this.props.handleLogin()
        window.FB.api('/me?fields=picture.width(1000).height(1000)', function(res){
            var lambda = new AWS.Lambda();
            // create JSON object for parameters for invoking Lambda function
            var lambdaParams = {
                FunctionName : "team4-get-user-image",
                InvocationType : "RequestResponse",
                LogType : "None",
                Payload : JSON.stringify({
                    "user_id": data.profile.id,
                    "email": data.profile.email,
                    "firstname": data.profile.first_name,
                    "lastname": data.profile.last_name,
                    "url": res.picture.data.url
                })
            };
            lambda.invoke(lambdaParams, function(error, data) {
                console.log(data)
            });
        })
    }

  render() {
    return (
      <div className="facebook-login">
        <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID}>
            {
                this.props.status ? null :
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    >
                        <span className="mdc-button__label">Sign up via Facebook</span>
                    </LoginButton>
            }
      </FacebookProvider>
      </div>
    );
  }
}

export default Facebook;