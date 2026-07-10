import db from './db.js'

const getAllServicProjects = async() => {
    const query = `
        SELECT 
            service_project.title, 
            service_project.description, 
            service_project.location, 
            service_project.project_date, 
            organizations.name AS organization_name
        FROM public.service_project
        INNER JOIN public.organizations 
            ON service_project.organization_id = organizations.organization_id
    `;

    const result = await db.query(query);

    return result.rows;
}

export {getAllServicProjects}