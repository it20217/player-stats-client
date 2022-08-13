import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe("Header component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});