import React, { Component, PropTypes } from "react";
import { cordovaDot, isCordova } from "../../utils/cordovaUtils";

/*
The problem with urls in css for Apache Cordova
https://github.com/webpack-contrib/file-loader/issues/46
... cordova ...
"The core of the problem is that CSS loads assets relative to itself, and js loads
assets relative to the HTML. So if the CSS isn't in the same place as the HTML
then you can't use relative paths."
*/

export default class IntroNetworkSafety extends Component {
  static propTypes = {
    history: PropTypes.object,
    next: React.PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className="intro-story__background background--image2"
                style={isCordova() ? { backgroundImage: "url(./img/global/intro-story/slide2-lady-liberty-698x600.jpg)" } : null} >
        <div className="intro-story__h1">We Vote in Safety</div>
        <div className="intro-story__h2">You control who is in<br/>
          your <strong>We Vote</strong> network.
        </div>
        <div><br/></div>
        <div><img className="center-block intro-story__img-height"
                  src={cordovaDot("/img/global/intro-story/slide2-ignore-troll-282x282-min.png")}/></div>
        <div className="intro-story__padding-btn">
          <button type="button" className="btn btn-success" onClick={this.props.next}>Next&nbsp;&nbsp;&gt;</button>
        </div>
      </div>;
  }
}

