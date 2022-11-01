import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

jest.mock('@ptg-react-src/app/auth/services/auth.service', () => {
  return {
    authClass: {
      removeToken: () => jest.fn(),
      getToken: () => JSON.stringify({ user: { username: 'tester' } }),
    },
  };
});

describe('UserProfile', () => {
  let getByTestId: any;

  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );

    getByTestId = component.getByTestId;
    fireEvent.click(getByTestId('profileIcon'));
    fireEvent.click(getByTestId('logout'));
  });
});
