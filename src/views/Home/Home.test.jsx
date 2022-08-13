import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';

describe("Home component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <Home/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});