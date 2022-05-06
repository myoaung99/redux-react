import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increasementHandler = () => {
    dispatch(counterActions.increasement());
  };
  const decreasementHandler = () => {
    dispatch(counterActions.decreasement());
  };

  const increaseByAmountHandler = () => {
    dispatch(counterActions.increaseByAmount(10));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increasementHandler}>Increment</button>
        <button onClick={increaseByAmountHandler}>Increase by 10</button>
        <button onClick={decreasementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
