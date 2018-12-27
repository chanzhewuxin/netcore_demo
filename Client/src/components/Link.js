import React, { Component } from "react";

export default class Link extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.link.text} ({this.props.link.title})
                </div>
            </div>
        )
    }
}