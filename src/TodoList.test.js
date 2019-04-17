import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeEach(() => {
    axios.get.mockResolvedValue({name: 'niklas'})
})

it('Can add todo items', () => {
  const wrapper = shallow(<TodoList />);
  let liElements = wrapper.find('li');
  expect(liElements.length).toBe(0);

  const mockPreventDefault = jest.fn();
  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })

  expect(mockPreventDefault.mock.calls.length).toBe(1); // Executed mock once.

  liElements = wrapper.find('li');
  expect(liElements.length).toBe(1);

  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })
  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })
  liElements = wrapper.find('li');
  expect(liElements.length).toBe(3);
});

it('Can remove todo items', () => {
  const wrapper = shallow(<TodoList />);
  let liElements = wrapper.find('li');
  expect(liElements.length).toBe(0);

  const mockPreventDefault = jest.fn();
  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })

  expect(mockPreventDefault.mock.calls.length).toBe(1); // Executed mock once.

  liElements = wrapper.find('li');
  expect(liElements.length).toBe(1);

  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })
  liElements = wrapper.find('li');
  expect(liElements.length).toBe(2);

  wrapper.find('.removeButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })

  liElements = wrapper.find('li');
  expect(liElements.length).toBe(1);

  wrapper.find('.removeButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })
  liElements = wrapper.find('li');
  expect(liElements.length).toBe(0);
});

it('Check default name', () => {
  const wrapper = shallow(<TodoList />);
  const mockPreventDefault = jest.fn();
  wrapper.find('.addButton').simulate('click', {
      preventDefault: mockPreventDefault,
  })
  const state = wrapper.state();
  expect(state.todoList.length).toBe(1);
  expect(state.todoList[0].name).toContain('todolist')
  expect(state.todoList[0].id).toBe(1)
});
