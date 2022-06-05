import React from 'react';
import CategoryList from '../Categories/CategoryList';
import RecipeItem from '../Recipes/RecipeItem';

export default function HolidaySeasonsRecipes() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12 heading-section ftco-animate">
                <h2 className="mb-4">
                  <span>Holiday Seasons Recipes</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <RecipeItem />
              <RecipeItem />
            </div>
          </div>
          <div className="col-md-3">
            <div className="sidebar-wrap pt-4">
              <div className="sidebar-box categories text-center ftco-animate">
                <h2 className="heading mb-4">Categories</h2>
                <CategoryList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
