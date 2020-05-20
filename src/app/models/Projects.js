import Sequelize, {Model} from 'sequelize';

class Projects extends Model{
  static init(sequelize){
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models){
    this.hasMany(models.Tasks, {foreignKey: 'project_id', as: 'tasks'});
  }
}

export default Projects;
