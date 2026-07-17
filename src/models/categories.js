import db from './db.js'

const getAllCategories = async () => {
    const query = `
        SELECT 
            category_name,
            category_id
        FROM public.categories
    `;
    const result = await db.query(query);
    return result.rows;
}

const getCategoryById = async (categoryId) => {
    const query = `
        SELECT 
            category_id,
            category_name
        FROM public.categories   -- ← corregido el nombre de la tabla
        WHERE category_id = $1
    `;
    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);
    return result.rows[0];
}

const getAllProjectCategories = async (projectId) => {
    const query = `
        SELECT
            sc.service_project_categories_id,
            sc.category_id,
            sc.project_id,
            sp.title,
            ct.category_name
        FROM public.service_project_categories sc
        INNER JOIN public.service_project sp
            ON sp.project_id = sc.project_id
        INNER JOIN public.categories ct
            ON ct.category_id = sc.category_id
        WHERE sc.project_id = $1
    `;
    const queryParams = [projectId];
    const result = await db.query(query, queryParams);
    return result.rows;
}

const getAllCategoryProjects = async (categoryId) => {
    const query = `
        SELECT
            sp.project_id,
            sp.title, 
            sp.description, 
            sp.location, 
            sp.project_date
            -- opcional: puedes incluir c.category_name si lo necesitas
        FROM public.service_project sp
        INNER JOIN public.service_project_categories spc
            ON sp.project_id = spc.project_id
        WHERE spc.category_id = $1   -- ← filtro por categoría
    `;
    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);
    return result.rows;
}

export {
    getAllCategories,
    getCategoryById,
    getAllProjectCategories,
    getAllCategoryProjects
};