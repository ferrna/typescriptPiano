import { dispatchProps } from "../utils/typescript";
import { Note } from "./notes.data"
  
  const unisonWidth=10
  
  const oscBank = new Array(5)
  const createOscillator = (freq:number, detune:number, noteName: string,
    dispatch: React.Dispatch<dispatchProps>) => {
    const actx = new AudioContext();
    const osc = actx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq
    osc.detune.value = detune
    osc.connect(actx.destination)
    osc.start()
    osc.stop(actx.currentTime + 3)
    setTimeout(()=> dispatch({type: noteName, payload: false}), actx.currentTime*1000 + 3000)
    return osc
  }

  const echo = {
    time: 0.5,
    feedback: 0.5,
    maxDuration: 2 // seconds
  }

  const createReverb = (freq: number, detune: number, noteName: string,
    dispatch: React.Dispatch<dispatchProps>) => {
    const actx = new AudioContext()

    const osc = actx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq
    osc.detune.value = detune
    osc.connect(actx.destination)

    const delayNode = actx.createDelay()
    delayNode.delayTime.value = echo.time * echo.maxDuration
    delayNode.connect(actx.destination)

    const gainNode = actx.createGain()
    gainNode.gain.value = echo.feedback
    
    osc.connect(delayNode)
    delayNode.connect(gainNode)
    gainNode.connect(delayNode)

    osc.start()
    osc.stop(actx.currentTime + 1)
    setTimeout(()=> dispatch({type: noteName, payload: false}), actx.currentTime*1000 + 1000)
  }

  export const noteOn = (note: Note, dispatch: React.Dispatch<dispatchProps>) => {
    const freq = note.freq
    dispatch({type: note.name, payload: true})
    oscBank[0] = createReverb(freq, unisonWidth, note.name, dispatch)
    oscBank[1] = createReverb(freq, 0, note.name, dispatch)
    oscBank[2] = createReverb(freq, -unisonWidth, note.name, dispatch)
  }


