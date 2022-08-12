import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Notification from './Notification';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
});

describe("Notification component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <Notification/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});