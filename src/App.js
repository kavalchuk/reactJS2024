import React from "react";
import { Avatar } from "./components/Avatar/Avatar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarList: [
        {
          imageSrc: "https://i.imgur.com/1bX5QH6.jpg",
          userName: "Lin Lanying",
        },
        {
          imageSrc: "https://i.imgur.com/YfeOqp2.jpg",
          userName: "Test user",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.avatarList.map((avatar) => (
          <Avatar userName={avatar.userName} imageSrc={avatar.imageSrc} />
        ))}
      </div>
    );
  }
}

export default App;
