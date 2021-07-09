export type Action<T = any> = {
  type: string;
  payload: T;
};

export type Reducer<T> = (state: T, action: Action) => T;
