"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    // const novoAluno = await Aluno.create({
    //   name: 'Mavi',
    //   lastname: 'Linda',
    //   email: 'mavilinda@gmail.com',
    //   age: 20,
    //   weight: 88,
    //   height: 1.69,
    // });
    res.status(200).json('Index');
  }
}

exports. default = new HomeController();
