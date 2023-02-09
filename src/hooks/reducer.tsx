export const initialState: Record<string, boolean> = {
// Must be uppercase
  'C4':  false,
  "C#4": false,
  "D":   false,
  'Eb':  false,
  'E':   false,
  'F':   false,
  'Gb':  false,
  'G':   false,
  'Ab':  false,
  'A':   false,
  'Bb':  false,
  'B':   false,
  'C5':  false,
  'C#5': false,
  'D5':  false,
  'Eb5': false,
  'E5':  false,
};

export function reducer(state: typeof initialState, action: {type: string, payload: boolean}) {
  switch (action.type) {
    case 'C4':
      return {...state, [action.type]: action.payload};
    case 'C#4':
      return {...state, [action.type]: action.payload};
    case 'D':
      return {...state, [action.type]: action.payload};
    case 'Eb':
      return {...state, [action.type]: action.payload};
    case 'E':
      return {...state, [action.type]: action.payload};
    case 'F':
      return {...state, [action.type]: action.payload};
    case 'Gb':
      return {...state, [action.type]: action.payload};
    case 'G':
      return {...state, [action.type]: action.payload};
    case 'Ab':
      return {...state, [action.type]: action.payload};
    case 'A':
      return {...state, [action.type]: action.payload};
    case 'Bb':
      return {...state, [action.type]: action.payload};
    case 'B':
      return {...state, [action.type]: action.payload};
    case 'C5':
      return {...state, [action.type]: action.payload};
    case 'C#5':
      return {...state, [action.type]: action.payload};
    case 'D5':
      return {...state, [action.type]: action.payload};
    case 'Eb5':
      return {...state, [action.type]: action.payload};
    case 'E5':
      return {...state, [action.type]: action.payload};
    case 'restore':
      return {...initialState};
    default:
      return state;
  }
}