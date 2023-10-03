import Aluno from '../models/Aluno';

class HomeController {
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

export default new HomeController();
