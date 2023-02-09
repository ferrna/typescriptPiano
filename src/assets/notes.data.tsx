const NOTES = {
    // Must be uppercase
    'C4': 261.626,
    'C#4': 277.183,
    'D': 293,
    'Eb': 311,
    'E': 329,
    'F': 349,
    'Gb': 370,
    'G': 392,
    'Ab': 415,
    'A': 440,
    'Bb': 466,
    'B': 494,
    'C5': 523,
    'C#5': 554,
    'D5': 587,
    'Eb5': 622,
    'E5': 659,
  }

import KEYBOARDSHORTCUTS from "./keyboard.keys"

const enum Colors {
  WHITE = 'white',
  BLACK = 'black'
}
const KEYSCOLORS = [
  Colors.WHITE,
  Colors.BLACK,
  Colors.WHITE,
  Colors.BLACK,
  Colors.WHITE,
  Colors.WHITE,
  Colors.BLACK,
  Colors.WHITE,
  Colors.BLACK,
  Colors.WHITE,
  Colors.BLACK,
  Colors.WHITE
]

interface note {
    freq: number,
    name: string,
    noteKeyColor: string,
    noteKeyboardShortcut: string,
    secondArmonic?: number,
    thirdArmonic?: number,
}
export class Note implements note {
    constructor(
        public freq: number,
        public name: string,
        public noteKeyColor: string,
        public noteKeyboardShortcut: string,
        public secondArmonic: number = freq * 2,
        public thirdArmonic: number = freq * 3,
    ){}
}

let notes: Note[] = [], i = 0

for (const [key, value] of Object.entries(NOTES)) {
    // From each key:value pairs of the NOTE object, lets create a new
    // 'Note' (implementing interface 'note') class instance
    // with ~value~ as the 'freq' prop value, and ~key~ for the 'name' prop value.
    // Then lets push that to the 'notes' array so we have a data object for every note
    // from C4 to E5 displayed on the keyboard interface.
    // For every note, we will have an object with:
    //                      _freq (frequency of the note in Hz)
    //                      _name (anglo-saxon notation of note: 'G5')
    //                      _noteKeyColor (piano key color)
    //                      _noteKeyboardShortcut (for UX events)
    //                      _secondArmonic and _thirdArmonic (2 and 3 times the frequency of the note,
    //                      to add richer sound to notes)
    let noteInstance = new Note (value, key, KEYSCOLORS[i % KEYSCOLORS.length], KEYBOARDSHORTCUTS[i])
    i += 1
    notes.push(noteInstance);
  }

export default notes