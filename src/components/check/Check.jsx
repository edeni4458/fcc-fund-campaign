import React from 'react'
import { useRef } from 'react'
import "./check.css"


export default function Check() {
  const checkRef = useRef()

  function openModal() {

    checkRef.current.showModal()
  }
  function closeModal() {

    checkRef.current.close()
  }
  return (
    <div>
      <dialog id="checkdialog" ref={checkRef}>
        <div className='chkdv'>
          <h4>Via Check:</h4>
          <p>Make check out to: Fordham Community Church</p>
          <p>Include memo for: FCC building Fund </p>
          <p>Mail to: 1455 Waring Avenue, Bronx NY 10469</p>
          <button id='check-btn' onClick={() => closeModal()}>Close</button>
        </div>
      </dialog>

      <button id="p1">
        <p onClick={() => openModal()}>By check?</p>
      </button>
    </div>
  )
}
