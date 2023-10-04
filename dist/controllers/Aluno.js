"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['id', 'filename', 'url'],
      },
    });
    res.status(200).json(alunos);
  }

  // Strore
  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      e.errors.map((err) => err.message);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id Inválido!'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errros: ['Aluno não encontrado!'],
        });
      }

      const alunoAtt = await aluno.update(req.body);

      return res.status(200).json(alunoAtt);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //  Show
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id Inválido!'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'id', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errros: ['Aluno não encontrado!'],
        });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id Inválido!'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errros: ['Aluno não encontrado!'],
        });
      }

      await aluno.destroy();

      return res.status(200).json({
        success: ['Aluno excluido com sucesso'],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
