import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Welcome } from '../screen/welcome/welcome';

describe('Welcome component', () => {
  it('should render the welcome message', () => {
    const { getByText } = render(<Welcome />);
    
    const welcomeMessage = getByText('Define Yourself In Your Unique Way.');
    
    expect(welcomeMessage).toBeTruthy();
  });
});