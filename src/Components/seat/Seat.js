import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// import css from "./Seat.module.css"
import styles from "../../styles/Order.module.css"


function Seat(props) {


  return (
    <>
      {/* <div className={`d-flex flex-row align-items-center justify-content-center ${styles.chair}`}> */}
        <button value={props.id} onClick={props.handleArr} className={props.styling}>{props.seat}</button>
      {/* </div> */}
    </>
  )
}

export default Seat