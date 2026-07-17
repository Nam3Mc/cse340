import { getAllServicProjects } from "../models/projects.js"

const showProjectsPage  = async (req, res) => {
    const projects = await getAllServicProjects()
    const title = 'PROJECTS'
    res.render('projects', {title, projects})
}


export {showProjectsPage }