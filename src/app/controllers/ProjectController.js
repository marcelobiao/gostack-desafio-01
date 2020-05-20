import * as Yup from 'yup';
import Projects from '../models/Projects';
import Tasks from '../models/Tasks';

class ProjectController{
  async index(req,res){
    const projects = await Projects.findAll({
      include: { association: 'tasks' }
    });
    res.json(projects);
  }

  async store(req,res){
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation fails'});
    }

    const {id, title} = await Projects.create(req.body);

    return res.json({
      id,
      title
    });
  }

  async update(req,res){
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation fails'});
    }

    const project = await Projects.findByPk(req.params.id);

    const {id, title} = await project.update(req.body);

    return res.json({
      id,
      title
    });

  }

  async delete(req,res){
    const project = await Projects.findByPk(req.params.id);

    project.destroy();

    res.json({success: 'Project removed'});
  }

  async storeTask(req,res){
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation fails'});
    }

    const {title} = await Tasks.create({title: req.body.title, project_id: req.params.id});

    return res.json({
      title
    });
  }
}

export default new ProjectController();
