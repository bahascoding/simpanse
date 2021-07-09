import { Pantauan } from "./pantauan";
import { Action, Reducer } from "./types";

/**
 * simpanse
 */
export class Simpanse<T = any> {
  private readonly _reducer: Reducer<T>;
  private readonly _state: T;

  constructor(reducer: Reducer<T>, defaultValue: T) {
    this._reducer = reducer;
    this._state = defaultValue;
  }

  simpan<T = any>(action: Action<T>) {
    throw new Error("Not Implemented");
  }

  pantau(): Pantauan {
    throw new Error("Not Implemented");
  }
}
