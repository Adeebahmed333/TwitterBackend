import UserRepository from '../repository/user-repository.js';

class UserService{
  constructor(){
    this.userRepository=new UserRepository();
  }
  async signup(data){
   const user= this.userRepository.create(data);
   return user;
  }
}

export default UserService;