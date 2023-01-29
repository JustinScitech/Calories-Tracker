import React, {useContext} from 'react'
import { Intake } from './Intake';
import { GlobalContext } from '../context/GlobalState';


export const IntakeList = () => {
  return (
    <>
      <h3>Caloric History</h3>
      <ul className="list">
        <li className="minus">
          Calories <span>4000</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}

