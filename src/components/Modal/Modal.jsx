import css from "./Modal.module.css"

// export const Modal = ({largeImg, onModalClose}) => {
//   return (
//     <div className={css.overlay} onClick={onModalClose}>
//       <div className={css.modal}>
//         <img src={largeImg} alt="" />
//       </div>
//     </div>
//   )
// }


import React, { Component } from "react";

export class Modal extends Component {

  onModalClose = this.props.onModalClose

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscKey, false);
  }

  handleEscKey = (event) => {
    if (event.key === "Escape") {
      this.onModalClose();
    }
  };

  render() {
    return (
    <div className={css.overlay} onClick={this.onModalClose}>
      <div className={css.modal}>
        <img src={this.props.largeImg} alt="" />
      </div>
    </div>
  )
  }
}


