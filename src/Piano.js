import React, { Fragment, useState, useEffect , setState, createElement} from "react";
import MgInstrument from "./MgInstrument";
import ReactDOM, { findDOMNode, render } from 'react-dom';

const Piano = () => {
  const root = createElement('piano-container');
  const element = <h1>Hello, world</h1>;
  // const root = ReactDOM.createRoot(
  //   document.getElementById('piano-container')
  // );
  
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${isPlaying ? "piano-accidental-key-playing" : ""
            } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${isPlaying ? "piano-natural-key-playing" : ""
          } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };


  const AudioTypes = [{ id: 0, name :'acoustic_grand_piano'}
  , { id: 1, name :'marimba'}]



  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote
    };

  
    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  const [state, setState] = useState({
    selectedType: AudioTypes[1].id
  });

   

  var  handleChange=(e)=>{
    // state.selectedType = e.target.value;


    setState({ ...state, selectedType: +e.target.value });
       console.log('selectedAudioType' +  state.selectedType);

       var node = document.getElementsByTagName('MgInstrument');

       const piano = ReactDOM.findDOMNode(this);
     render(node,piano)
 }

  return (
    <div >
      <div className="piano-container">

        <MgInstrument
          instrumentName={AudioTypes[state.selectedType].name}
          startNote={"C3"}
          endNote={"B5"}
          renderPianoKey={renderPianoKey}
          keyboardMap={{
            Q: "C3",
            2: "C#3",
            W: "D3",
            3: "D#3",
            E: "E3",
            R: "F3",
            5: "F#3",
            T: "G3",
            6: "G#3",
            Y: "A3",
            7: "A#3",
            U: "B3",
            I: "C4",
            9: "C#4",
            O: "D4",
            0: "D#4",
            P: "E4",
            Z: "F4",
            S: "F#4",
            X: "G4",
            D: "G#4",
            C: "A4",
            F: "A#4",
            V: "B4",
            B: "C5",
            H: "C#5",
            N: "D5",
            J: "D#5",
            M: "E5",
            ",": "F5",
            L: "F#5",
            ".": "G5",
            ";": "G#5",
            "/": "A5",
            "'": "A#5",
            A: "B5"
          }}
        />
      </div>
      <div>
      {/* <input type="radio"  id="acoustic_grand_piano" value={AudioTypes[0].id}
               name="acoustic_grand_piano"
                onChange={handleChange} />
              <label htmlFor="acoustic_grand_piano">Acoustic grand piano</label>
  
              <input type="radio"  id="marimba" value={AudioTypes[1].id}
               checked={selectedAudioType.id == AudioTypes[1].id} name="marimba"
                onChange={handleChange}
                />
              <label htmlFor="marimba">Marimba</label> */}

              <select value={state.selectedType} onChange={handleChange}>
  <option value={AudioTypes[0].id}>{AudioTypes[0].name}</option>
  <option value={AudioTypes[1].id}>{AudioTypes[1].name}</option>
</select>
      </div>
    </div>

  );
};

export default Piano;
