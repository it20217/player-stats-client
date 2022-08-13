import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from './Login';

describe("Login component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});