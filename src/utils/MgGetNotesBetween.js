import NOTES from "../constants/MgNote";

export default function getNotesBetween(startNote, endNote) {
  const startingIndex = NOTES.indexOf(startNote);
  const endingIndex = NOTES.indexOf(endNote);
  return NOTES.slice(startingIndex, endingIndex + 1);
}