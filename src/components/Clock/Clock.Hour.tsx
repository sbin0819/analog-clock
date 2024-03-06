import { useClockStore } from '../../store';

function Hour() {
  const { hoursRotation } = useClockStore((state) => state);
  return (
    <div
      className="absolute w-2 h-14 rounded-md bg-black transform origin-bottom"
      style={{ rotate: `${hoursRotation}deg`, bottom: '50%' }}
    />
  );
}

export default Hour;
