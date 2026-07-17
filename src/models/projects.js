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

const getOrganizationDetails = async(organizationId) => {
  const query = `
    SELECT
      organization_id,
      name,
      description,
      contact_email,
      logo_filename
    FROM organizations
    WHERE organization_id = $1
  `
  const queryParams = [organizationId]
  const result = await db.query(query, queryParams)


  return result.rows.length > 0 ? result.rows[0] : null
}

const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          project_date
        FROM service_project
        WHERE organization_id = $1
        ORDER BY project_date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};

const getUpcomingProjects = async ( number_of_projects = 5) => {
  const query = `
    SELECT
      sp.project_id,
      sp.title,
      sp.description,
      sp.project_date,
      sp.location,
      sp.organization_id,
      o.name as organization_name
    FROM public.service_project sp
    INNER JOIN public.organizations o
      ON sp.organization_id = o.organization_id
    LIMIT ${number_of_projects}
  `;

  const result = await db.query(query)

  return result.rows
}

const getProjectDetails = async ( projectId ) => {
  const query = `
    SELECT
      sp.project_id,
      sp.title,
      sp.description,
      sp.project_date,
      sp.location,
      sp.organization_id,
      o.name as organization_name
    FROM public.service_project sp
    INNER JOIN public.organizations o
      ON sp.organization_id = o.organization_id
    WHERE sp.project_id = $1
  `;

  const queryParams = [projectId]
  const result = await db.query(query, queryParams)
  
  return result.rows[0]
}

export { 
  getAllServicProjects, 
  getProjectsByOrganizationId, 
  getUpcomingProjects, 
  getProjectDetails
}