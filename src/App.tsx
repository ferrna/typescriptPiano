import { FC, useEffect, useReducer, useState } from 'react'
import './App.css'
import { noteOn } from './assets/noteOn.function'
import { Note } from './assets/notes.data'
import { initialState, reducer } from './hooks/reducer'
import {v4 as uuid} from "uuid";
import { stopAll, painoOn } from './assets/pianoOn.function'
import _ from 'lodash'
import Title from './components/Title'
import Description from './components/Description'
interface AppProps {
  notes: Note[]
}

const App: FC<AppProps> = ({notes}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pianoState, setPianoState] = useState({pianoState: "default"})

  function handleClick (note: Note){
    if(pianoState.pianoState === "piano"){
      dispatch({type: note.name, payload: true})
    } else {
      noteOn(note, dispatch)
    }
  }
  function handlePianoState (){
    const stateFilteredKeys = _.flow([
      Object.entries,
      arr => arr.filter(([key, value]: [string, boolean]) => value === true),
      arr => arr.map((inner: [string, boolean]) => inner[0])
    ])(state);
    let arrayNotesToPlay: Note[] = []
    for (let i = 0; i < stateFilteredKeys.length; i++) {
      const found = notes.find(element => element.name === stateFilteredKeys[i]);
      if(found) arrayNotesToPlay.push(found)
    }
    for (let i = 0; i < arrayNotesToPlay.length; i++) {
      painoOn(arrayNotesToPlay[i], dispatch)
    }
  }
  function handleStop (){
    dispatch({type: 'restore', payload: true})
    stopAll()
  }

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {

      const found: Note | undefined = notes.find(n=> n.noteKeyboardShortcut === event.key)
      if(found) handleClick(found)
    };
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, []);

  function interactive (noteName: string):string {
      if(state[noteName]){
      return " active"
    } else return ""
  }

  return (
    <div className="App">
      <Title/>
      <div className="piano">
        <div className="keys">
        {notes && notes.map(n => 
          <div data-note={n} className={`key ${n.noteKeyColor} ${interactive(n.name)}`}
          onClick={(e)=>handleClick(n)} key={uuid()}>
          {n.noteKeyboardShortcut.toUpperCase()}<br/>{n.name}</div>
        )}
        </div>
        <div className="buttons">
          <div><button className="pianoo" onClick={(e)=>setPianoState({pianoState: "piano"})}>Piano</button></div>
          <div><button className="normal" onClick={(e)=>setPianoState({pianoState: "default"})}>Normal</button></div>
          <div><button className="play" onClick={(e)=>handlePianoState()}>Play</button></div>
          <div><button className="stop" onClick={(e)=>handleStop()}>Stop</button></div>
        </div>
      </div>
      <Description />
    </div>
  )
}

export default App
