import { useEffect, useState } from 'react';
import { useClockStore } from '../../store';
import { Hour, Minute, Numbers, Second, Tooltip } from './';

interface Props {
  children: React.ReactNode;
}

const Clock = ({ children }: Props) => {
  const { time, setTime } = useClockStore((state) => ({
    time: state.time,
    setTime: state.setTime,
  }));

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => setTime(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [setTime]);

  useEffect(() => {
    if (tooltipVisible) {
      setFormattedTime(time.toLocaleTimeString());
    }
  }, [time, tooltipVisible]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className="relative w-64 h-64 flex justify-center items-center rounded-full bg-white border-2 border-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {children}
      {tooltipVisible && (
        <Tooltip
          visible={tooltipVisible}
          position={tooltipPosition}
          content={formattedTime}
        />
      )}
    </div>
  );
};

Clock.Numbers = Numbers;
Clock.Hour = Hour;
Clock.Minute = Minute;
Clock.Second = Second;

export default Clock;
