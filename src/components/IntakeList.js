import React, {useContext} from 'react'
import { Intake } from './Intake';
import { GlobalContext } from '../context/GlobalState';


export const IntakeList = () => {
  const {intakes} = useContext(GlobalContext);
  return (
    <>
      <h3>Past Foods</h3>
      <ul className="list">
        {intakes.map(intake => (<Intake key={intake.id} intake = {intake}/>))}
      </ul>
    </>
  )
}

