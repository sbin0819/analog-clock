import { useEffect, useState } from 'react';
import { useClockStore } from '../../store';

const useClock = () => {
  const { setCurrentTime } = useClockStore((state) => ({
    setCurrentTime: state.setCurrentTime,
  }));

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [setCurrentTime]);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const handleMouseMove = (e: React.MouseEvent) =>
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY,
    });

  const tooltipMouseEvents = {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };

  return {
    tooltipVisible,
    tooltipPosition,
    tooltipMouseEvents,
  };
};

export default useClock;
