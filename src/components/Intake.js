import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Intake = ({intake}) => {
  const {deleteIntake} = useContext(GlobalContext);
  const plus = <li className="plus">
  {intake.text}<span>{intake.amount}</span><button onClick = {() => deleteIntake(intake.id)} className="delete-btn">x</button>
</li>;
const minus = <li className="minus">
{intake.text}<span>{intake.amount}</span><button onClick = {() => deleteIntake(intake.id)} className="delete-btn">x</button>
</li>;
 if (intake.amount < 3000) {
  return (
    plus
    
  )}
  else {
    return (minus)
  }
}
