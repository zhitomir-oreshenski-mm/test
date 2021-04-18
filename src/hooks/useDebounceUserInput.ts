import {useState, ChangeEvent, useCallback, useEffect} from 'react';

// const DEBOUNCE_TIMEOUT = 350;

export function useDebounceUserInput(
  initialVal: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
): [string, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState(initialVal);

  const changeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist();

      setValue(event.target.value);

      onChange(event);
    },
    [onChange]
  );

  useEffect(() => setValue(initialVal), [initialVal]);

  return [value, changeValue];
}
