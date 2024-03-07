import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Numbers from './Clock.Numbers';

test('Numbers component render', () => {
  const { getByTestId } = render(<Numbers />);

  expect(getByTestId('clock-numbers')).toBeDefined();

  for (let i = 1; i <= 12; i++) {
    const numberElement = getByTestId(`number-${i}`);
    expect(numberElement).toBeDefined();
    expect(numberElement.textContent).toEqual(`${i}`);
  }
});
