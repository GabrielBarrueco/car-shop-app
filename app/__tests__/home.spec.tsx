

import React from 'react';
import { render, act } from '@testing-library/react-native';
import Home from '../screen/home/home';
import { getCarsList } from '../../service/api';

const carsMock = [
    { id: '1', car_id: 1, description: 'Car 1', name: 'Car 1', price: 100000, category: 'SUV', image: [{"url": "https://media.graphassets.com/Lp7zyp9Q4mUceT38dGxW"},]},
    { id: '2', car_id: 2, description: 'Car 2', name: 'Car 2', price: 100000, category: 'SUV', image: [{"url": "https://media.graphassets.com/Lp7zyp9Q4mUceT38dGxW"},]},
];

jest.mock('../../service/api', () => ({
  getCarsList: jest.fn(),
}));

describe('Home component', () => {
  it('should render Home', () => {
    const { toJSON } = render(<Home />);

    
    expect(toJSON()).toMatchSnapshot();
  });

  it('should fetch and render a list of cars', async () => {
    (getCarsList as jest.Mock).mockResolvedValue(carsMock);
    const { findByTestId } = render(<Home />);
    await act(async () => {});
    const flatlist = await findByTestId('flatList');
    expect(flatlist.props.data.length).toEqual(carsMock.length);
  });
});