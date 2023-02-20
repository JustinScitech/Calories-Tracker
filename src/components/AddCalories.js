import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddCalories = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  const {addIntake} = useContext(GlobalContext);


  const onSubmit = e => {
    e.preventDefault();
    if (amount <= 0){
      alert('Please enter a valid amount greater than 0');
      return;
    }

    const newIntake = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addIntake(newIntake);
  }

  return (
    <>
    <h3>Add calories</h3>
    <form onSubmit= {onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Food Name</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter food/meal name..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Number of calories <br />
          </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn">Add meal</button>
    </form>
  </>
  )
}
