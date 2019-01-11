import React, { Component } from 'react'
var AWS = require("aws-sdk")


class Aws extends Component {

    constructor() {
        this.state = {

        }
        super()
    }

    const rekognition = new AWS.Rekognition()
    const dynamodb = new AWS.DynamoDB.DocumentClient()

    componentWillMount() {
        AWS.config.update({region: 'us-east-1'})
    }

    render() {
        return (
            <div className="App">
            {/*<Form container="form"></Form>*/}
            <Facebook />
            </div>
        );
    }
}

export default Aws;
