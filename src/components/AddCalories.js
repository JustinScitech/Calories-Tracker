import React, {useState} from 'react'

export const AddCalories = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  return (
    <>
    <h3>Add calories</h3>
    <form>
      <div className="form-control">
        <label htmlFor="text">Food/meal Name</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter food/meal name..." />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input type="date" />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount of calories <br />
          </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <div className="form-control">
        <label htmlFor="category">Category</label>
        <select>
          <option value="none">None</option>
          <option value="meat">Meat</option>
          <option value="vegetables">Vegetables</option>
          <option value="grains">Grains</option>
          <option value="junk">Junk food</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button className="btn">Add meal</button>
    </form>
  </>
  )
}
