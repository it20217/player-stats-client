import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';

describe("ToggleSwitch component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <ToggleSwitch/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});