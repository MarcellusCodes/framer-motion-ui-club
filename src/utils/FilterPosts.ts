import PostProps from "../constants/interfaces/PostProps";

const filterPosts = (posts: PostProps[], categorieTitle: string) => {
  const formattedCategories = posts.filter((post: PostProps) =>
    post.frontmatter.categories.includes(categorieTitle)
  );

  return formattedCategories;
};

export default filterPosts;
