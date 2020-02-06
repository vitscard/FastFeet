import Sequelize, { Model } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'recipient_id',
      as: 'recipients',
    });
    this.belongsTo(models.File, {
      foreignKey: 'deliveryman_id ',
      as: 'users',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id  ',
      as: 'files',
    });
  }
}
export default Delivery;
