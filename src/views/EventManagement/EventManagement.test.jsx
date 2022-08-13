import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import EventManagement from './EventManagement';

describe("EventManagement component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/events"]}>
        <EventManagement/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});