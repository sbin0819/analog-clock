import { Hour, Minute, Numbers, Second } from './';
import { Tooltip } from './';
import useClock from './useClock';

interface Props {
  children: React.ReactNode;
}

const Clock = ({ children }: Props) => {
  const { tooltipPosition, tooltipVisible, tooltipMouseEvents } = useClock();
  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    tooltipMouseEvents;

  return (
    <div
      data-testid="clock-container"
      className="relative w-64 h-64 flex justify-center items-center rounded-full bg-white border-2 border-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {tooltipVisible && <Tooltip position={tooltipPosition} />}
    </div>
  );
};

Clock.Numbers = Numbers;
Clock.Hour = Hour;
Clock.Minute = Minute;
Clock.Second = Second;

export default Clock;
