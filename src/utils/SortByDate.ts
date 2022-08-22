import PostProps from "../constants/interfaces/PostProps";
const sortByDate = (posts: PostProps) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.created_at).valueOf() -
      new Date(a.frontmatter.created_at).valueOf()
  );
};
export default sortByDate;
