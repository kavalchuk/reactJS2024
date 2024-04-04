import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarsVisible: false,
    };
  }

  handleShowAvatars = () => {
    this.setState({
      isAvatarsVisible: !this.state.isAvatarsVisible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleShowAvatars}>Click!!!</button>
        {this.state.isAvatarsVisible ? (
          <div>
            <div>{this.props.userName}</div>
            <img src={this.props.imageSrc}></img>
          </div>
        ) : (
          <div>Here should be list of avatars</div>
        )}
      </>
    );
  }
}

export { Avatar };
