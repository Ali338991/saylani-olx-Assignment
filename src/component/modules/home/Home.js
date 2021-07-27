import React from 'react';
import Banner from '../../banner/banner';
import Categories from '../../categories/Categories';
import CategoriesBar from './CategoriesBar';
export default function Home() {
    return (
        <div>
<CategoriesBar/>
      <Banner/>
            <Categories/>

            
        </div>
    )
}
