import { useEffect, useState } from 'react';
import { useClockStore } from '../../store';
import { CLOCK_CONTAINER_ID } from './constant';

const TOOLTIP_OFFSET_TOP = -40;

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
  const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
    const clockElement = document.getElementById(CLOCK_CONTAINER_ID);
    if (!clockElement) return;

    const rect = clockElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top + TOOLTIP_OFFSET_TOP;

    setTooltipPosition({
      x,
      y,
    });
  };

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
