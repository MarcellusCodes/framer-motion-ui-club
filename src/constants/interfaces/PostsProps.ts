export default interface PostProps {
  posts: {
    frontmatter: {
      href: string;
      title: string;
      image: string;
      author: string;
      difficulty: string;
      created_at: string;
      categories: string[];
    };
    Content: undefined;
  }[];
}
