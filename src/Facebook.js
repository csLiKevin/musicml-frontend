import React, { Component } from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook'
import Button from '@material-ui/core/Button'
var AWS = require("aws-sdk")
var S3 = require('aws-sdk/clients/s3')

class Facebook extends Component {

    constructor() {
        super()
        this.handleResponse = this.handleResponse.bind(this)
    }

    componentWillMount() {
        AWS.config.update({
            region: 'us-east-1',
            credentials: {
                accessKeyId: 'AKIAIODIZTQE26XO7CIA',
                secretAccessKey: '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'
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
        <FacebookProvider appId="303498723488562">
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