import BlogItem from "../components/blogItem/BlogItem";
import { render, screen } from './test-utils';
import { createPost } from "../types/mockData";

const post = createPost();
const username = "Caner";

describe('<BlogItem/>', () => {
  it('Renders posts title body', () => {
    render(<BlogItem post={post} username={username} />);
    expect(screen.queryByText(post.body)).toBeInTheDocument();
    expect(screen.queryByText(post.title)).toBeInTheDocument();
    expect(screen.queryByText(username)).toBeInTheDocument();
  });
});
