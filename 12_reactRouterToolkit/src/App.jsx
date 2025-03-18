import './App.css'
import { decrement, increment, selectCount } from './features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const count = useSelector(selectCount)
  const dispatch = useDispatch();

  const handleIncBtn = () => {
    dispatch(increment());
  }

  const handleDecBtn = () => {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={handleIncBtn}>
        +1
      </button>
      <br />
      <br />
      <span>{count}</span>
      <br />
      <br />
      <button onClick={handleDecBtn}>
        -1
      </button>
    </>
  )
}

export default App
