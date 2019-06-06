import React from "react";
import { Image } from "semantic-ui-react";

class OptionBox extends React.Component {

  render() {
    return (
      <Image
        style={{ borderRadius: "10px", margin: "10px", height: "200px", width: "200px" }}
        src={this.props.img}
        onClick={() => {
          this.props.optionClick(this.props.name);
        }}
      />
    );
  }
}

export default OptionBox;
