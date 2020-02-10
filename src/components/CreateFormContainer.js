import React from "react";
import { connect } from "react-redux";
import { createImage } from "../actions";
import CreateForm from "./CreateForm";
class CreateFormContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state, this.props.user);
    this.props.createImage(this.state, this.props.user);
    this.setState({
      title: "",
      url: ""
    });
  };
  render() {
    return (
      <CreateForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { createImage })(CreateFormContainer);
