import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useAppSelector } from './redux/hook'
//import { RootState } from './redux/store';
import { decrement, increment } from './redux/ counter/counterSlice';

function App() {
  //const [count, setCount] = useState(0)

  const count = useAppSelector((state) => state.count)
  console.log('check count', count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        My current count = {count.value}
        <button
         onClick={() => dispatch(increment())}
        >
          Increase count +1
        </button>
        <button
          onClick={()=> dispatch(decrement())}
        >
          Descrement count -1
        </button>
      </div>
     
    </>
  )
}

export default App
