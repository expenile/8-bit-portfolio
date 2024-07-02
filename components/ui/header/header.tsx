"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-end p-5">
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <i className="nes-icon trophy"></i>
      </button>

      {isShowModal && (
        <div className="nes-dialog absolute top-20 bg-white z-10">
          <div className="flex justify-end">
            <button onClick={() => setIsShowModal(false)}>
              <i className="nes-icon close is-small"></i>
            </button>
          </div>
          <div className="p-3">
            <p className="title text-sm">Join the Mighty Horde!</p>
            <div className="flex gap-2 justify-center items-center">

              <Link href = "https://github.com/expenile">
              <button type="button" className="nes-btn">
                <i className="nes-icon github is-small"></i>
              </button>
              </Link>
              <Link href = "">
              <button type="button" className="nes-btn ">
            <i className="nes-icon gmail is-small"></i>
            </button>
            </Link>
            <Link href = "https://www.linkedin.com/in/nileshrpal/">
            <button type="button" className="nes-btn ">
            <i className="nes-icon linkedin is-small"></i>
            </button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
