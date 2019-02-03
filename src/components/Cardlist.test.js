import { shallow } from 'enzyme';
import React from 'react';
import Cardlist from './Cardlist.js';

it('expect to render card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'bastard',
      email: 'john@nightswatch.com',
    }
  ];

  expect(shallow(<Cardlist robots={ mockRobots }/>)).toMatchSnapshot();
});
