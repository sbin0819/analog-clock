import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useClockStore } from '../../store';
import Tooltip from './Clock.Tooltip';

describe('Tooltip component', () => {
  it('Tooltip TextContent render', () => {
    useClockStore.setState({ currentTime: new Date('2024-01-01T12:00:00') });

    render(<Tooltip position={{ x: 100, y: 200 }} />);

    expect(screen.getByTestId('clock-tooltip')).toHaveTextContent(
      '12:00:00 PM',
    );
  });
});
