"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-5 left-5">
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        <i className="nes-icon is-large star"></i>
      </button>

      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10">
          <div className="nes-dialog w-[40rem] bg-white">
            <div className="flex justify-end">
              <button onClick={() => setIsShowModal(false)}>
                <i className="nes-icon close is-small"></i>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>
              <p>My Projects:</p>
              <Link href={"https://github.com/karan-panda/Diabetes-Decoded-gdsc"}>
                <div className="nes-container with-title is-dark">
                  <p className="title">🕵️‍♂️Diabetes Decoded🧬💉</p>
                  
                </div>
              </Link>
              <Link href={"https://mern-app-ui.vercel.app/login"}>
                <div className="nes-container with-title">
                  <p className="title">MERN Auth App👆</p>
                  
                </div>
              </Link>
              <Link href={"https://task-manager-3of14h5hr-nilesh-pals-projects.vercel.app"}>
                <div className="nes-container with-title is-dark">
                  <p className="title">Task Manager</p>

                </div>
              </Link>
              <Link href={"https://expenile.github.io/Color-flipper/"}>
                <div className="nes-container with-title">
                  <p className="title">Color Flipper🎨🖌️</p>
                  
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}


/*

 A diabetes management platform with machine learning, daily tasks, blogs, an AI chatbot, and personalized health plans. 

A MERN stack authentication application, providing user authentication, user management, and secure access functionalities. 

An application for a task manager app, featuring user authentication, task management, and task tracking functionalities.



*/