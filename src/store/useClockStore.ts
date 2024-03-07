import { create } from 'zustand';

export const calculateRotations = (time: Date) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  return {
    secondsRotation: seconds * 6,
    minutesRotation: minutes * 6 + seconds * 0.1,
    hoursRotation: (hours % 12) * 30 + minutes * 0.5,
  };
};

export interface State {
  currentTime: Date;
  secondsRotation: number;
  minutesRotation: number;
  hoursRotation: number;
}

type Action = {
  setCurrentTime: () => void;
  calculateRotations: () => void;
};

const useClockStore = create<State & Action>((set, get) => {
  const initialTime = new Date();
  const initialRotations = calculateRotations(initialTime);

  return {
    currentTime: initialTime,
    secondsRotation: initialRotations.secondsRotation,
    minutesRotation: initialRotations.minutesRotation,
    hoursRotation: initialRotations.hoursRotation,

    setCurrentTime: () => {
      const newTime = new Date();
      set({ currentTime: newTime });
      get().calculateRotations();
    },

    calculateRotations: () => {
      const currentTime = get().currentTime;
      const { secondsRotation, minutesRotation, hoursRotation } =
        calculateRotations(currentTime);
      set({
        secondsRotation,
        minutesRotation,
        hoursRotation,
      });
    },
  };
});

export default useClockStore;
