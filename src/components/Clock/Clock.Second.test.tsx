import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Second from './Clock.Second';
import { calculateRotations } from '../../store/useClockStore';

const mockStore = {
  currentTime: new Date(),
  secondsRotation: 0,
  setCurrentTime: vi.fn((newTime) => {
    mockStore.currentTime = newTime;
    const { secondsRotation } = calculateRotations(newTime);
    mockStore.secondsRotation = secondsRotation;
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
  const { secondsRotation } = calculateRotations(date);
  mockStore.currentTime = date;
  mockStore.secondsRotation = secondsRotation;
});

describe('Second component', () => {
  test('Second component render', () => {
    render(<Second />);

    const second = screen.getByTestId('second-hand');
    expect(second).toHaveStyle(`rotate: ${mockStore.secondsRotation}deg`);
  });

  test('Second component Update after 10 seconds', () => {
    vi.advanceTimersByTime(10000);
    const newTime = new Date(mockStore.currentTime.getTime() + 10 * 1000);
    mockStore.setCurrentTime(newTime);

    render(<Second />);

    const second = screen.getByTestId('second-hand');
    expect(second).toHaveStyle(`rotate: ${mockStore.secondsRotation}deg`);
  });
});
