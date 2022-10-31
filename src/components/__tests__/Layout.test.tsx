import { render, screen } from '@testing-library/react';

import Layout, { LayoutProps } from 'components/Layout';

describe('<Layout />', () => {
  const MOCKED_TEXT = 'HELLO';

  const MOCKED_PROPS: LayoutProps = {
    children: MOCKED_TEXT,
  };

  test('given children prop expect to render it properly', () => {
    render(<Layout {...MOCKED_PROPS} />);

    screen.getByText(MOCKED_TEXT);
  });
});
