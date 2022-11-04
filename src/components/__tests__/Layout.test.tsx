import { render, screen } from '@testing-library/react';

import Layout, { LayoutProps } from 'components/Layout';
import Navbar from 'components/Navbar';

jest.mock('components/Navbar');

describe('<Layout />', () => {
  let MOCKED_NAVBAR: jest.SpyInstance;
  const MOCKED_TEXT = 'HELLO';

  const MOCKED_PROPS: LayoutProps = {
    children: MOCKED_TEXT,
  };

  beforeEach(() => {
    MOCKED_NAVBAR = jest.mocked(Navbar).mockImplementation(() => <div>MOCKED_NAVBAR</div>);
  });

  afterEach(() => {
    MOCKED_NAVBAR.mockRestore();
  });

  test('given children prop expect to render it properly', () => {
    render(<Layout {...MOCKED_PROPS} />);

    screen.getByText(MOCKED_TEXT);
  });
});
