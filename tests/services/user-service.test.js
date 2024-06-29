import UserService from "../../src/services/user-service.js";
import UserRepository from "../../src/repository/user-repository.js";
jest.mock("../../src/repository/user-repository.js");

describe("User Service Sign-up", () => {
  test("should create a user ", async () => {
    const data = {
      email: "xyz@abc.com",
      password: "1235678",
      name: "xyz",
    };
    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const service = new UserService();
    const user = await service.signup(data);
    expect(user.email).toBe(data.email);
  });
});
