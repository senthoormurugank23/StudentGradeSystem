import './App.css';
import React, { useState } from 'react';

function App() {

  const [m1, setM1] = useState();
  const [m2, setM2] = useState();
  const [m3, setM3] = useState();
  const [m4, setM4] = useState();
  const [m5, setM5] = useState();

  const [average, setAverage] = useState();
  const [total, setTotal] = useState();
  const [grade, setGrade] = useState();

  const handleReload = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(m1 < 0 || m1 > 100 || m2 > 100 || m2 < 0 || m3 < 0 || m3 > 100 || m4 < 0 || m4 > 100 || m5 < 0 || m5 > 100) {
      alert("enter the value between 1 t0 100 !");
    } else {
      let total = parseFloat(m1) + parseFloat(m2) + parseFloat(m3) + parseFloat(m4) + parseFloat(m5);

      setTotal(total);

      let average = total / 5;

      setAverage(average);

      if(m1 >= 35 && m2 >= 35 && m3 >= 35 && m4 >= 35 && m5 >= 35) {
        if(average >= 90) {
          setGrade('A+');
        } else if(average < 90 && average >= 80) {
          setGrade('A');
        } else if(average < 80 && average >= 70) {
          setGrade('B');
        } else if(average < 70 && average >= 60) {
          setGrade('C');
        } else {
          setGrade('D');
        }
      } else {
        setGrade('No Grade');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
              <div className='head'>
          <h1>Students Grade System</h1>
        </div>
      <div className='main'>

        <div className='elements'>
        
          <label className='lb'>Enter mark 1:  </label>
          <input type="number" className='input' name='m1' placeholder="Tamil" value={m1} onChange={(e) => setM1(e.target.value)} required /><br /><br />
          <label className='lb'>Enter mark 2:  </label>
          <input type="number" className='input'  name='m2' placeholder="English" value={m2} onChange={(e) => setM2(e.target.value)} required /><br /><br />
          <label className='lb'>Enter mark 3:  </label>
          <input type="number"className='input'  name='m3' placeholder="Maths" value={m3} onChange={(e) => setM3(e.target.value)} required /><br /><br />
          <label className='lb'>Enter mark 4:  </label>
          <input type="number" className='input' name='m4' placeholder="Science" value={m4} onChange={(e) => setM4(e.target.value)} required /><br /><br />
          <label className='lb'>Enter mark 5:  </label>
          <input type="number" className='input' name='m5' placeholder="Social" value={m5} onChange={(e) => setM5(e.target.value)} required /><br /><br />
        </div>
        <div>
          <button type="submit" className='button'>Submit</button>
        </div>
        <div className='res-container'>
            <div className="res">
              <h2>Results</h2>
            </div>
            <div className="res1">
              <p>Total        : {total}</p>
              <p>Percentage   : {average}%</p>
              <p>Grade        : {grade}</p>
            </div>
            <div className='reset'>
              <a href='/' onClick={handleReload}>Reset</a>
            </div>
            </div>
        </div>
    </form>
  );
}

export default App;
