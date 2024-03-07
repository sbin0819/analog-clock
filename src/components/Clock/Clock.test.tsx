import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Clock from './Clock';

test('Clock component render', () => {
  const { getByTestId } = render(
    <Clock>
      <Clock.Numbers />
      <Clock.Hour />
      <Clock.Minute />
      <Clock.Second />
    </Clock>,
  );
  const clockContainer = getByTestId('clock-container');
  expect(clockContainer).toBeDefined();
});
