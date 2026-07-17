import { getAllCategories } from "../models/categories.js"

const showCategoriesPage  = async (req, res) => {
    const categories = await getAllCategories()
    const title = 'CATEGORIES'
    res.render('categories', {title, categories})
}

export { showCategoriesPage }