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
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
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
            <h2 className="title-content">Hello Nhuhuynh :3333 </h2>
            <Typewriter
              options={{
                autoStart: true,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span className = "writer-content">Tặng em bé món quà vô tri xíu<span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    `<span className = "writer-content">${'༼ つ ◕_◕ ༽つ o((>ω< ))o'}<span>`
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
                      `<span >
                      ${'Hello Nhuhuynh. Chúc em luôn vui vẻ và ngày càng xinh đẹp. Trend muộn nhưng tặng cái trái tim khổng lồ nehhh. Đợi chút xíu có nút bấm mới mở lên được nhe (づ￣ 3￣)づ. Gooooooooooooo'}
                    </span>`
                    )
                    .pauseFor(1500)
                    .callFunction(() => {
                      setShowHeart(true);
                    })
                    .start();
                }}
              />
            )}
            {showHeart && (
              <Link to="/heart">
                <motion.button
                  whileTap={{ width: 120 }}
                  className="show-heart"
                >Bấm vào đây nè</motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
