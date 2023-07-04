import React from "react";
import "./recipelist.scss";

const RecipeList = ({ recipe }) => {
  return (
    <>
      {recipe &&
        recipe?.map((recipe) => {
          const {
            id,
            name,
            info,
            image,
            duration,
            difficulty,
            serves,
            nutrition,
            category,
          } = recipe;
          return (
            <article key={id}>
              <div className="">
                <img src={image} alt="" />
                <div className="content">
                  <div className="info-tab">
                    <div className="cat-info">
                      <span className="cat">{category}</span>
                      <div className="level">
                        <span>{difficulty}</span>
                        <span className="serves"> serves: {serves}</span>
                      </div>
                    </div>
                    <h6 className="name">{name}</h6>
                    <p className="info-text">{info}</p>
                  </div>
                </div>
              </div>

              <div className="nutrition-tab">
                {nutrition.map((items) => {
                  return (
                    <div key={id} className="nutri">
                      <span className="cals">{items.calories} kcal</span>
                      {items.vegan ? (
                        <span className="nutri-text">vegan</span>
                      ) : null}
                      {items.vegetable ? (
                        <span className="nutri-text">Vegetarian</span>
                      ) : null}
                      {items.healthly ? (
                        <span className="nutri-text">Healthy</span>
                      ) : null}
                      {items.gluten ? (
                        <span className="nutri-text">Gluten free </span>
                      ) : null}
                    </div>
                  );
                })}
                {duration.map((items) => {
                  return (
                    <div key={id} className="time">
                      {items.hours && (
                        <span className="hour">{items.hours} hr</span>
                      )}
                      <span className="mins">{items.minutes}mins</span>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
    </>
  );
};

export default RecipeList;
