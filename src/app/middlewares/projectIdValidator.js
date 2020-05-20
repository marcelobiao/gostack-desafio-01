import Projects from '../models/Projects';

export default async (req,res,next) => {
  const idProject = req.params.id;

  if(!idProject){
    return res.json({error: 'ProjectId, not provided'});
  }

  const project = await Projects.findByPk(idProject);

  if(!project){
    return res.json({error: 'Project not found'})
  }

  return next();
}
