import Sequelize, { Model } from 'sequelize';
import Foto from './Foto';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisar ter no mínimo 3 letras',
          },
        },
      },

      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisar ter no mínimo 3 letras',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe!',
        },

        validate: {
          isEmail: {
            msg: 'Email Inválido',
          },
        },
      },

      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },

      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número válido',
          },
        },
      },

      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número válido',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
