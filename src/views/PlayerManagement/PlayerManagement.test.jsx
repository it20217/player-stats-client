import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PlayerManagement from './PlayerManagement';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
});

describe("PlayerManagement component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/playermanagement"]}>
        <PlayerManagement/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});