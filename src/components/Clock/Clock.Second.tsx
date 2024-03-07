import { useClockStore } from '../../store';

const Second = () => {
  const { secondsRotation } = useClockStore((state) => state);
  return (
    <div
      data-testid="second-hand"
      className="absolute w-1 h-24 rounded-md bg-red-600 transform origin-bottom"
      style={{ rotate: `${secondsRotation}deg`, bottom: '50%' }}
    />
  );
};

export default Second;
