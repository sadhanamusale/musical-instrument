import NOTES from '../constants/MgNote.js'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}