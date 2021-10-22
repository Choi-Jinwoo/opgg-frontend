import { ChangeEventHandler, useState } from 'react';

type UseInputReturns = [
  string,
  ChangeEventHandler<HTMLInputElement>,
  () => void,
];

const useInput = (defaultValue = ''): UseInputReturns => {
  const [value, setValue] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return [value, onChange, clear];
};

export default useInput;
