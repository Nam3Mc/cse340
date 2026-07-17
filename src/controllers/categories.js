// import { getAllCategories, getAllCategoryProjects, getAllProjectCategories } from "../models/categories.js"

// const showCategoriesPage  = async (req, res) => {
//     const categories = await getAllCategories()
//     const title = 'CATEGORIES'
//     res.render('categories', {title, categories})
// }

// const showProjectCategoriesPage = async (req, res) => {
//     const projectId = req.params.id
//     const projectCategories = await getAllProjectCategories(projectId)
//     const title = 'Project Categories'
//     res.render('category', {title, projectCategories})
// }

// const showCategoryProjectsPage = async (req, res) => {
//     const categoryId = req.params.id
//     const categoryProjects = await getAllCategoryProjects(categoryId)
//     const title = 'Category Projects'
//     res.render('projects', {title, categoryProjects})
// }

// export { 
//     showCategoriesPage,
//     showProjectCategoriesPage,
//     showCategoryProjectsPage
// }

import { 
    getAllCategories, 
    getCategoryById,            // ← importar esta función
    getAllCategoryProjects,
    getAllProjectCategories 
} from "../models/categories.js";

const showCategoriesPage = async (req, res) => {
    const categories = await getAllCategories();
    res.render('categories', { title: 'CATEGORIES', categories });
};

const showCategoryDetailsPage = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await getCategoryById(categoryId);
        if (!category) {
            return res.status(404).render('404');
        }
        const projects = await getAllCategoryProjects(categoryId);
        res.render('category', { 
            category,
            projects,
            title: category.category_name 
        });
    } catch (error) {
        res.status(500).render('500');
    }
};

export { 
    showCategoriesPage,
    showCategoryDetailsPage  
};