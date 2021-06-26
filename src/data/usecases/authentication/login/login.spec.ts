import { Login } from "./login";

jest.mock("uuid", () => ({
  v4() {
    return "any_id";
  },
}));

const makeSut = () => {
  const sut = new Login();

  return { sut };
};

describe("Login", () => {
  test("Should return an user on success", async () => {
    const { sut } = makeSut();

    const user = await sut.login("any_name", "any_email");

    expect(user).toEqual({
      id: "any_id",
      name: "any_name",
      email: "any_email",
    });
  });
});
