import React, {useState} from 'react';

import data from './data';


function App(){

  const [num, setNum]= useState(0);
  const [paragraph, setParagraph]=useState([]);

  const handleSubmit= (e) =>{
    e.preventDefault();
    (parseInt(num)<=0)?setParagraph(data.slice(0,1)):
    (parseInt(num)>=data.length)?setParagraph(data):
    setParagraph(data.slice(0,parseInt(num)))
  }
  return(
    <section className="section-center">
      <h3> Bored of normal Lorem ipsum?</h3>
      <form className="lorem-form"
        onSubmit={handleSubmit}
      >
        <label className="label">
          Paragraphs:
          <input name="num"
                 type="number"
                 value={num}
                 onChange={(e) => {setNum(e.target.value)}}
          />
        </label>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="result">
        {
          paragraph.map((singleP,index)=>{
            return <p key={index}>{singleP}</p>
          })
        }
      </div>
    </section>
  )
}

export default App;