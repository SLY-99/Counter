import react , {useState} from 'react';
import '../Counter/counter.css';

function Counter() {
  
  const [counter , setCounter] = useState(0);
  return (
    <>
    <section>
    <div className="container d-flex">
    <div className="box">
    <p className="text">TALLY COUNTER</p>
    <div id="number" className="monitor">{counter}</div>
    <p></p>
    <button id="reset" className="btn-reset" type="reset"onClick={() => setCounter(0)}>Reset</button>
    <button id="count" className="btn-count-minus" type="button" onClick={() => setCounter(counter+1)}>Count+</button>
    <button id="count" className="btn-count-plus" type="button" onClick={() => setCounter(counter-1)}>Count-</button>
    </div>
    </div>
    </section>
    </>
    );
  }
  
  export default Counter;