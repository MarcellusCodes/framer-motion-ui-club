import PostProps from "../constants/interfaces/PostProps";
import CategorieProps from "../constants/interfaces/CategorieProps";
import PostsProps from "../constants/interfaces/PostsProps";

const filterCategories = (
  postCategories: string[],
  categorieList: CategorieProps[]
) => {
  const formattedCategories = categorieList.filter(
    (categorie: CategorieProps) => postCategories.includes(categorie.title)
  );

  return formattedCategories;
};

export default filterCategories;
