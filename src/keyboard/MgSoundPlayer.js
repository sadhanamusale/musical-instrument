import SoundFontPlayer from "soundfont-player";
import MgSoundContext from "./MgSoundContext";
import Soundfont from "soundfont-player"


const MgSoundPlayer = () => {

    const NullSoundFontPlayerNoteAudio = {
        stop() { }
    };

    const NullSoundFontPlayer = {
        play() {
            return NullSoundFontPlayerNoteAudio;
        }
    };

    //Audio Context
    const soundContext = MgSoundContext && new MgSoundContext();

    //soundPlayer
    let soundPlayer = NullSoundFontPlayer;
    //setInstrument
    const Player = {
        setInstrument(instrumentName) {
            SoundFontPlayer.instrument(soundContext, instrumentName)
                .then(soundfontPlayer => {
                    soundPlayer = soundfontPlayer;
                })
                .catch(e => {
                    soundPlayer = NullSoundFontPlayer;
                });
        },
        playNote(note) {
             soundPlayer.play(note);

            // var ac = new AudioContext()
            // Soundfont.instrument(ac, 'acoustic_grand_piano', { soundfont: 'MusyngKite' }).then(function (marimba) {
            //     marimba.play('C4')
            // })

        }
    };
    return Player;
};

export default MgSoundPlayer;