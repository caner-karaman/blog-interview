import Pagination from "../components/pagination/Pagination";
import { render, screen } from './test-utils';
import { mockNextUseRouter } from "./test-utils";

describe('<Pagination/>', () => {
  it('Current page and pageCount render', () => {
    mockNextUseRouter({
      route: "/",
      pathname: "/",
      query: "",
      asPath: `/`,
    });

    render(<Pagination page={1} pageCount={3} />);
    expect(screen.getAllByText(/1/));
    expect(screen.getAllByText(/3/));
  });

  it('Control prev button if at first page', () => {
    mockNextUseRouter({
      route: "/",
      pathname: "/",
      query: "",
      asPath: `/`,
    });

    const {debug} = render(<Pagination page={1} pageCount={3} />);
    expect(screen.getByTestId('prevButton')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByTestId('nextButton')).toHaveAttribute('aria-disabled', 'false');
  });

  it('Control next button if at last page', () => {
    mockNextUseRouter({
      route: "/",
      pathname: "/",
      query: "",
      asPath: `/`,
    });

    const {debug} = render(<Pagination page={3} pageCount={3} />);
    expect(screen.getByTestId('prevButton')).toHaveAttribute('aria-disabled', 'false');
    expect(screen.getByTestId('nextButton')).toHaveAttribute('aria-disabled', 'true');
  });
})