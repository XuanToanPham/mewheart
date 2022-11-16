import React, { useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Modal({getClickedBtn}) {
  const [modal, setModal] = useState(false);
  const [subTitle, setSubTile] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const toggleModal = () => {
    console.log(!modal);
    setModal(!modal);
  };
  const clickBtn = () =>{
    toggleModal();
    getClickedBtn(true)
  }

  return (
    <>
      <Button onClick={clickBtn} />
      {modal && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="modal"
        >
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title-content">Hello Minh Thuận :333 </h2>
            <Typewriter
              options={{
                autoStart: true,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span className = "writer-content">You are Little Angle<span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    `<span className = "writer-content">This is a small gift for you<span>`
                  )
                  .callFunction(() => {
                    setSubTile(true);
                  })
                  .start();
              }}
            />
            {subTitle && (
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span>
                      Cái này làm vuii vuiii cho bà. Chúc bà cứ vui vẽ và hoàn thành các
                      ước mơ của bản thân. Hmmmm phải có trái tim chứ nhệ :v. Đợi tý tui mở cái nút hiện trái tim lên keke From Tahitian with Love.
                    </span>`
                    )
                    .pauseFor(500)
                    .callFunction(() => {
                      setShowHeart(true);
                    })
                    .typeString(
                      `<span>
                        Đấy hiện lên rồi bấm vào đi.
                      </span>`
                    )
                    .start();
                }}
              />
            )}
            {showHeart && (
              <Link to="/heart">
                <motion.button
                  whileTap={{ width: 120 }}
                  className="show-heart"
                >Show Heart</motion.button>
              </Link>
            )}
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
