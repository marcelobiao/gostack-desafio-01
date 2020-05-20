import Sequelize, {Model} from 'sequelize';

class Tasks extends Model{
  static init(sequelize){
    super.init(
      {
        title: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.Projects, {foreignKey: 'project_id', as: 'projects'});
  }
}

export default Tasks;
