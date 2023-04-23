import {useState} from "react";
import styles from './test.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className='counter'>
        <h1 className={styles.test}>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    )
}