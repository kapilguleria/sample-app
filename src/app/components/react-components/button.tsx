import React from 'react';

export default class FeelingForm extends React.Component<any> {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;

    onSubmit();
  }

  render() {
    return (
      <button onClick={() => this.handleSubmit()}>Submit</button>
    );
  }
}