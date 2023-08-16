import { useState, useEffect } from 'react'

function App() {

  const [display, setdisplay] = useState('')

  const handleChange = ({ target }) => {
 
    setdisplay(target.id)
    target.children[0].play()

  }

  const handleKeyDown = (e) => {

    switch (e.key) {

      case 'q': document.getElementById('Heater1').click();
        break

      case 'w': document.getElementById('Heater2').click(); 
        break

      case 'e': document.getElementById('Heater3').click(); 
        break

      case 'a': document.getElementById('Heater4').click();
        break

      case 's': document.getElementById('Clap').click(); 
        break

      case 'd': document.getElementById('Open-HH').click(); 
        break

      case 'z': document.getElementById('Kick-n-hat').click(); 
        break

      case 'x': document.getElementById('Kick').click(); 
        break

      case 'c': document.getElementById('Closed-HH').click(); 
        break

      default: break

    }

  }

  useEffect(() => {

    document.addEventListener('keydown', handleKeyDown)

  }, [])


  return (


    <div className='container'>

      <div id='drum-machine'>

        <h1 className='header'><i className="fa-solid fa-drum fa-shake fa-lg i-h"></i> Electronic Drum</h1>

        <div className='pad-container'>

          <button className='drum-pad' id='Heater1' onClick={handleChange} onKeyDown={handleKeyDown}>Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q'></audio></button>
          <button className='drum-pad' id='Heater2' onClick={handleChange} onKeyDown={handleKeyDown}>W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='W'></audio></button>
          <button className='drum-pad' id='Heater3' onClick={handleChange} onKeyDown={handleKeyDown}>E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id='E'></audio></button>
          <button className='drum-pad' id='Heater4' onClick={handleChange} onKeyDown={handleKeyDown}>A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id='A'></audio></button>
          <button className='drum-pad' id='Clap' onClick={handleChange} onKeyDown={handleKeyDown}>S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id='S'></audio></button>
          <button className='drum-pad' id='Open-HH' onClick={handleChange} onKeyDown={handleKeyDown}>D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id='D'></audio></button>
          <button className='drum-pad' id='Kick-n-hat' onClick={handleChange} onKeyDown={handleKeyDown}>Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'></audio></button>
          <button className='drum-pad' id='Kick' onClick={handleChange} onKeyDown={handleKeyDown}>X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id='X'></audio></button>
          <button className='drum-pad' id='Closed-HH' onClick={handleChange} onKeyDown={handleKeyDown}>C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id='C'></audio></button>

        </div>

        <div className='control'>
          <p id='display' >{display}</p>
        </div>

      </div>

    </div>

  )
}

export default App
