import React from 'react';

const App = () => {
  return (
    <>
      <nav>
        <div>  <h2>Character Counter</h2> <h2>*</h2> </div>
      </nav>
        <h1>Analyze your text <br /> in real-time.</h1>

      <textarea name="" id="" placeholder='start typing here'></textarea>

      <div className="tick">
        <div className='left'>
          <div ></div><span> Exclude Spaces</span>
         <div></div> <span>Set Character Limit</span>
        </div>
        <div>Approx. reading time: 0 minute</div>
      </div>

      <div className="colors">
        <div><h3>00</h3> <p>Total Characters</p></div>
        <div><h3>00</h3> <p>Word Count</p></div>
        <div><h3>00</h3> <p>Sentence Count</p></div>
      </div>

      <h2 >Letter Density</h2>

      <div id='final'>No Characters found. Start typing to see letter density.</div>

    </>
  )
}

export default App