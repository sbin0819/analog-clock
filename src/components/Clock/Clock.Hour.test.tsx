import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hour from './Clock.Hour';
import { calculateRotations } from '../../store/useClockStore';

const mockStore = {
  currentTime: new Date(),
  hoursRotation: 0,
  setCurrentTime: vi.fn((newTime) => {
    mockStore.currentTime = newTime;
    const { hoursRotation } = calculateRotations(newTime);
    mockStore.hoursRotation = hoursRotation;
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
  mockStore.hoursRotation = minutesRotation;
});

describe('Hour component', () => {
  test('Hour component render', () => {
    render(<Hour />);

    const hour = screen.getByTestId('hour-hand');
    expect(hour).toHaveStyle(`rotate: ${mockStore.hoursRotation}deg`);
  });

  test('Hour component Update after 1 hour', () => {
    vi.advanceTimersByTime(60 * 60 * 1000);
    const newTime = new Date(mockStore.currentTime.getTime() + 60 * 60 * 1000);
    mockStore.setCurrentTime(newTime);

    render(<Hour />);

    const hour = screen.getByTestId('hour-hand');
    expect(hour).toHaveStyle(`rotate: ${mockStore.hoursRotation}deg`);
  });
});
