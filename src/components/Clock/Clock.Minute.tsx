import { useClockStore } from '../../store';

const Minute = () => {
  const { minutesRotation } = useClockStore((state) => state);

  return (
    <div
      className="absolute w-[6px] h-16 rounded-md bg-gray-800 transform origin-bottom"
      style={{ rotate: `${minutesRotation}deg`, bottom: '50%' }}
    />
  );
};

export default Minute;
