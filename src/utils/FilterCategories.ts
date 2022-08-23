import CategorieProps from "../constants/interfaces/CategorieProps";

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
