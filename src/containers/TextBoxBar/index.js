import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import './index.css';

class TextBoxBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charCount: 0,
      text: '',
    };
  }

  changeText = (e) => {
    const { text, charCount } = this.state;
    this.setState({
      text: text + e,
      charCount: charCount + 1,
    });
  }

  render() {
    const { buttonClick } = this.props;
    const { charCount } = this.state;
    return (
      <div className="TextBoxBar">
        <h2>CREATE TO-DO</h2>
        <TextBox charCount={charCount} changeText={(e) => this.changeText(e)} />
        <br />
        <Button buttonClick={buttonClick} path="/">SUBMIT</Button>
      </div>
    );
  }
}
TextBoxBar.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default TextBoxBar;
