import axios from "axios";

export const getAllRecipes = async () => {
  try {
    let result = await axios.get("http://localhost:5000/api/recipes");
    let data = result.data;
    return data;
  } catch (e) {
    console.error("client:getAllPalettes", e);
  }
};

export const getOneRecipe = async (id) => {
  try {
    let result = await axios.get(`http://localhost:5000/api/recipes/${id}`);
    let data = result.data;
    return data;
  } catch (e) {
    console.error("client:getOneRecipe", e);
  }
};

export const createRecipe = async (newData) => {
  try {
    let result = await axios.post(`http://localhost:5000/api/recipes`, newData);
    let data = result.data;
    window.location.assign("/recipes");
    return () => data;
  } catch (e) {
    console.error("client:createRecipe", e);
  }
};
