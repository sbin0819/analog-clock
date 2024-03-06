import { create } from 'zustand';

const calculateRotations = (time: Date) => {
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
  time: Date;
  secondsRotation: number;
  minutesRotation: number;
  hoursRotation: number;
}

type Action = {
  setTime: () => void;
  calculateRotations: () => void;
};

const useClockStore = create<State & Action>((set, get) => {
  const initialTime = new Date();
  const initialRotations = calculateRotations(initialTime);

  return {
    time: initialTime,
    secondsRotation: initialRotations.secondsRotation,
    minutesRotation: initialRotations.minutesRotation,
    hoursRotation: initialRotations.hoursRotation,

    setTime: () => {
      const newTime = new Date();
      set({ time: newTime });
      get().calculateRotations();
    },

    calculateRotations: () => {
      const currentTime = get().time;
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
