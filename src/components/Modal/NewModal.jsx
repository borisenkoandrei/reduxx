import React from "react";
import ReactDOM from "react-dom";

/**
 * @param mountTo - 
 * @param isOpen
 * @param handlerOK
 * @param handlerCANCEL
 * @param
 * @param
 * @param
 * @param
 * 
 */

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.mountTo = document.querySelector(this.props.mountTo);
    this.modalContainer = document.createElement("div");
    this.isOpen = this.props.isOpen;
  }

  componentDidMount() {
    this.mountTo.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    this.mountTo.removeChild(this.modalContainer);
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, this.modalContainer);
  }
}

export default NewModal;
