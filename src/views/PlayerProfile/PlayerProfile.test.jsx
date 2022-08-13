import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PlayerProfile from './PlayerProfile';

// External library code shouldn't be tested. It is mocked
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  BarChart: () => {
    return <div>Mock BarChart</div>;
  },
  Bar: () => {
    return <div>Mock BarChart</div>;
  },
  BarChart: () => {
    return <div>Mock BarChart</div>;
  },
  XAxis: () => {
    return <div>Mock BarChart</div>;
  },
  YAxis: () => {
    return <div>Mock BarChart</div>;
  },
  Tooltip: () => {
    return <div>Mock BarChart</div>;
  },
  CartesianGrid: () => {
    return <div>Mock BarChart</div>;
  }
}));

describe("PlayerProfile component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/playerprofile"]}>
        <PlayerProfile/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});