import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe("Sidebar component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});