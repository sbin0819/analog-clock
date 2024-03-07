import { useClockStore } from '../../store';

interface Props {
  position: { x: number; y: number };
}

const Tooltip = ({ position }: Props) => {
  const currentTime = useClockStore((state) => state.currentTime);

  return (
    <div
      className="absolute flex justify-center items-center bg-white text-black p-2 w-32 border border-teal-300 rounded shadow-lg"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default Tooltip;
