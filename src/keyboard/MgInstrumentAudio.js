import React, { useEffect, useState } from "react";
import MgSoundPlayer from "./MgSoundPlayer";

const MgInstrumentAudio = ({ instrumentName, notes }) => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null);
  useEffect(() => {
    setInstrumentPlayer(MgSoundPlayer());
  }, []);

  useEffect(() => {
    if (instrumentPlayer) {
      setInstrument();
      playNotes();
    }
  }, [instrumentPlayer]);

  useEffect(() => {
    if (notes && notes.length > 0) {
      playNotes();
    }
  }, [notes]);

  const setInstrument = () => {
    instrumentPlayer.setInstrument(instrumentName);
  };

  const playNotes = () => {
    if (instrumentPlayer) {
      instrumentPlayer.playNote(notes[0]);
    }
  };

  return null;
};

export default MgInstrumentAudio;