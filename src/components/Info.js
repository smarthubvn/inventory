import React from "react";
import { PropTypes} from "prop-types"

// Build component by Class

class Info extends React.Component {
    constructor(props) {
        super(props);
        // this.title = props.title;
        // this.showTitle = props.showTitle;
        this.state = {
            count: 0,
            title: props.title
        };
        // this.updateCounterClick = this.updateCounterClick.bind(this)
        this.updateTitleClick = this.updateTitleClick.bind(this)
    }

    updateCounterClick() {
        this.setState ({
            count: this.state.count + 1 
        });
    }

    updateTitleClick() {
        this.setState ({
            title: this.state.title = "This is updated title"
        });
    }

    render() {
        // const title = this.props.title;
        return (
          <div>
            <h1>{this.state.title}</h1>
            <p>Count in Info: {this.state.count} </p>
            <button onClick={() => this.updateCounterClick()}>Update Counter Info!</button>
            <button onClick={this.updateTitleClick}>Update Title Info</button>
          </div>
        )
    }
}

Info.defaultProps = {
    title: "This is default Title",
    showTitle: true,
};

Info.propTypes = {
    title: PropTypes.string,
    showTitle: PropTypes.bool,
}

export default Info;