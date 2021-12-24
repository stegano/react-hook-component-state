import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

const useComponentState = <S extends unknown = void>(
  renderComponent: (state: S, setState: (value: S) => void) => ReactElement,
  defaultState: S,
): [ReactElement, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(defaultState);
  const $component = useMemo(() => renderComponent(state as S, setState), [state, renderComponent]);
  return [$component, setState];
};

export default useComponentState;
