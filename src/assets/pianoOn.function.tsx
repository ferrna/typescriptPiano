import { dispatchProps } from "../utils/typescript"
import { Note } from "./notes.data"
  
const unisonWidth=8

const oscBank = new Array(3)
let sources = new Array()
const createOscillator = (freq:number, detune:number) => {
  const actx = new AudioContext();
  const osc = actx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = freq
  osc.detune.value = detune
  osc.connect(actx.destination)
  osc.start()
  sources.push(osc)
  return osc
}

const createOscillatorHarmonic = (freq:number, detune:number) => {
  const actx = new AudioContext();
  const osc = actx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = freq
  osc.detune.value = detune
  var gainNode = actx.createGain()
  gainNode.connect(actx.destination)
  osc.connect(gainNode)
  gainNode.gain.value = 0.05;
  osc.start()
  osc.stop(actx.currentTime + 1)
  return osc
}

export const stopAll = () => {
    for(let i = 0; i < sources.length; i++)
        if (sources[i])
          sources[i].stop(0);
}

export const painoOn = (note: Note, dispatch: React.Dispatch<dispatchProps>) => {
  const freq = note.freq
  oscBank[0] = createOscillator(freq, unisonWidth)
  oscBank[1] = createOscillator(freq, 0)
  oscBank[2] = createOscillator(freq, -unisonWidth)
  oscBank[3] = createOscillatorHarmonic(note.secondArmonic, 0)
  oscBank[4] = createOscillatorHarmonic(note.thirdArmonic, 0)
}