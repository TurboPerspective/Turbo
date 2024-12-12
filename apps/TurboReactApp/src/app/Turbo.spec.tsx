import { render } from '@testing-library/react';

import Turbo from './Turbo';

describe('Turbo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Turbo />);
    expect(baseElement).toBeTruthy();
  });
});
