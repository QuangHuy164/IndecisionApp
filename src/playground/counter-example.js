let count = 0
const addOne = () => {
  count = count + 1;
  renderCounterApp();
}

const minusOne = () => {
  count = count - 1;
  renderCounterApp();
}

const Reset = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

renderCounterApp();