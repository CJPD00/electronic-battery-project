import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (


    <div className='container'>

      <div id='drum-machine'>

        <h1 className='header'><i className="fa-solid fa-drum fa-shake fa-lg i-h"></i> Electronic Drum</h1>

        <div className='pad-container'>

          <button className='drum-pad' id='Heater1'>Q
            <audio src=""></audio></button>
          <button className='drum-pad' id='Heater2'>W
            <audio src=""></audio></button>
          <button className='drum-pad' id='Heater3'>E
            <audio src=""></audio></button>
          <button className='drum-pad' id='Heater4'>A
            <audio src=""></audio></button>
          <button className='drum-pad' id='Clap'>S
            <audio src=""></audio></button>
          <button className='drum-pad' id='Open-HH'>D
            <audio src=""></audio></button>
          <button className='drum-pad' id='kick-n-hat'>Z
            <audio src=""></audio></button>
          <button className='drum-pad' id='Kick'>X
            <audio src=""></audio></button>
          <button className='drum-pad' id='Closed-HH'>C
            <audio src=""></audio></button>

        </div>

        <div className='control'>
          <p id='display' >algo</p>
        </div>

      </div>

    </div>

  )
}

export default App
