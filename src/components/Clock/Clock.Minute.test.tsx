import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Minute from './Clock.Minute';
import { calculateRotations } from '../../store/useClockStore';

const mockStore = {
  currentTime: new Date(),
  minutesRotation: 0,
  setCurrentTime: vi.fn((newTime) => {
    mockStore.currentTime = newTime;
    const { minutesRotation } = calculateRotations(newTime);
    mockStore.minutesRotation = minutesRotation;
  }),
};

vi.mock('../../store', () => ({
  useClockStore: vi.fn(() => ({
    ...mockStore,
    calculateRotations,
  })),
}));

beforeEach(() => {
  vi.useFakeTimers();

  const date = new Date();
  const { minutesRotation } = calculateRotations(date);
  mockStore.currentTime = date;
  mockStore.minutesRotation = minutesRotation;
});

describe('Clock Minute component', () => {
  test('Clock Minute component render', () => {
    render(<Minute />);

    const minute = screen.getByTestId('minute-hand');
    expect(minute).toHaveStyle(`rotate: ${mockStore.minutesRotation}deg`);
  });

  test('Clock Minute component Update after 10 minutes', () => {
    vi.advanceTimersByTime(60 * 10 * 1000);
    const newTime = new Date(mockStore.currentTime.getTime() + 60 * 10 * 1000);
    mockStore.setCurrentTime(newTime);

    render(<Minute />);

    const minute = screen.getByTestId('minute-hand');
    expect(minute).toHaveStyle(`rotate: ${mockStore.minutesRotation}deg`);
  });
});
