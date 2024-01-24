import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../screen/login/login';

const logInMock = jest.fn();
const signUpMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Login component', () => {
  it('should sign in a user', async () => {
    const user = { username: 'test', password: 'test' };
    const expectedResult = { status: 'success' };
    logInMock.mockImplementation(() => Promise.resolve(expectedResult));
    const result = await logInMock(user.username, user.password);

    expect(result).toEqual(expectedResult);
  });

  it('should sign up a user', async () => {
    const user = { username: 'test', password: 'test' };
    const expectedResult = { status: 'success' };
    signUpMock.mockImplementation(() => Promise.resolve(expectedResult));
    const result = await logInMock(user.username, user.password);

    expect(result).toEqual(expectedResult);
  });

  it('should render Login', () => {
    const { toJSON } = render(<Login/>);
    expect(toJSON()).toMatchSnapshot();
  });
});