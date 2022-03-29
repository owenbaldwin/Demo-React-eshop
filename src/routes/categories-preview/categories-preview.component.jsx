// import SHOP_DATA from '../../shop-data.js';
import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
// import './categories-preview.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    // <Fragment className='category-preview-container'>
    <div className='category-preview-container'>

      {Object.keys(categoriesMap).map((title) => {
        const products =categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>


  );
};

export default CategoriesPreview;
