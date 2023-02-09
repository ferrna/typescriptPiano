export type obj<T = unknown> = Record<string, T>

export interface dispatchProps {
    type: string,
    payload: boolean
}