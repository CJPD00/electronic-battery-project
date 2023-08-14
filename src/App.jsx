import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (


    <div className='container'>

      <div id='drum-machine'>

        <h1 className='header'><i className="fa-solid fa-drum fa-shake fa-lg i-h"></i> Electronic Drum</h1>

        <div className='pad-container'>

          <button className='drum-pad' id='Heater1'>Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q'></audio></button>
          <button className='drum-pad' id='Heater2'>W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='W'></audio></button>
          <button className='drum-pad' id='Heater3'>E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id='E'></audio></button>
          <button className='drum-pad' id='Heater4'>A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id='A'></audio></button>
          <button className='drum-pad' id='Clap'>S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id='S'></audio></button>
          <button className='drum-pad' id='Open-HH'>D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id='D'></audio></button>
          <button className='drum-pad' id='kick-n-hat'>Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'></audio></button>
          <button className='drum-pad' id='Kick'>X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id='X'></audio></button>
          <button className='drum-pad' id='Closed-HH'>C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id='C'></audio></button>

        </div>

        <div className='control'>
          <p id='display' >algo</p>
        </div>

      </div>

    </div>

  )
}

export default App
