import { useEffect, useState } from 'react';
export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
    openDoor: false,
  });

  const keys: any = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    ArrowUp: 'forward',
    ArrowDown: 'backward',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ShiftLeft: 'shift',
    Space: 'jump',
    KeyO: 'openDoor',
  };
  const findkey = (key: string) => keys[key];

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      setInput((m) => ({ ...m, [findkey(e.code)]: true }));
    };
    const handleKeyUp = (e: any) => {
      setInput((m) => ({ ...m, [findkey(e.code)]: false }));
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  return input;
};
