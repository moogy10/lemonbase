import React, { PropsWithChildren } from "react";

import './Modal.scss'



interface ModalDefaultType {

  onClickToggleModal: () => void;

}



function Modal({

  onClickToggleModal

}: PropsWithChildren<ModalDefaultType>) {

  return(

    <div className="ModalContainer">
      <div className="DialogBox">
        <div className="Dialog-container">
            <div></div>
            <div></div>
            <div className="Dialog-sub-container1">
                <p>안녕하세요</p>
                <p>반갑습니다</p>
            </div>
            <div className="Dialog-container1">
                <p>안녕하세요</p>
                <p>반갑습니다</p>
            </div>
            <div className="Dialog-container1">
                <p>안녕하세요</p>
                <p>반갑습니다</p>
            </div>
            <div className="Dialog-container1">
                <p>안녕하세요</p>
                <p>반갑습니다</p>
            </div>
            <div></div>
        </div>
      </div>

      <div className="Backdrop"

        onClick={(e:React.MouseEvent) => {

          e.preventDefault();



          if (onClickToggleModal) {

            onClickToggleModal();

          }

      }}/>

    </div>

  )

}



export default Modal;