import { useEffect, useState } from 'react';

type UseDropDownReturns = [boolean, () => void];

const useDropDown = (
  defaultVisible: boolean,
  containerIdentifier: string,
): UseDropDownReturns => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  useEffect(() => {
    const onDocumentClick: EventListener = (e) => {
      const target = e.target as HTMLElement;

      if (target.closest(containerIdentifier)) return;
      setIsVisible(false);
    };

    document.addEventListener('click', onDocumentClick);

    return () => document.removeEventListener('click', onDocumentClick);
  }, [containerIdentifier]);

  const makeVisible = () => {
    setIsVisible(true);
  };

  return [isVisible, makeVisible];
};

export default useDropDown;
