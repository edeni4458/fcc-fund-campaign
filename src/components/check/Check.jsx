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
       <dialog id="checkdialog" ref ={checkRef}>
           <div className='chkdv'>
              <h3>Via Check:</h3>
               <p>Make check out to Fordham Community Chruch. Include memo for FCC building Fund </p>
               <p>Mailing Address: 1455 Waring avenue Bronx NY 10469</p>
               <button onClick={()=> closeModal()}>Close</button>
          </div>
       </dialog>
       
       <p id="p1" onClick={()=> openModal()}>By check?</p>
    </div>
  )
}
