import Mockdate from "mockdate";

import { InputModel, InputType } from "domain/models/input/input";

import { RemoteAddInput } from "./remote-add-input";
import { AddInputRepository } from "../../../protocols/input/add-input-repository";

const makeFakeInput = (): InputModel => ({
  id: "valid_id",
  date: Date.now(),
  userId: "user_id",
  type: InputType.EXITING,
});

const makeAddInputRepository = () => {
  class AddInputRepositoryStub implements AddInputRepository {
    async add(input: Omit<InputModel, "id">): Promise<InputModel> {
      return makeFakeInput();
    }
  }

  return new AddInputRepositoryStub();
};

const makeSut = () => {
  const addInputRepository = makeAddInputRepository();
  const sut = new RemoteAddInput(addInputRepository);

  return {
    sut,
    addInputRepository,
  };
};

describe("RemoteAddInput", () => {
  beforeAll(() => {
    Mockdate.set(new Date());
  });

  afterAll(() => {
    Mockdate.reset();
  });

  test("Should call AddInputRepository with correct values", async () => {
    const { sut, addInputRepository } = makeSut();

    const spy = jest.spyOn(addInputRepository, "add");

    const { id, ...data } = makeFakeInput();

    await sut.add(data);

    expect(spy).toHaveBeenCalledWith(data);
  });

  test("Should return an input on success", async () => {
    const { sut } = makeSut();

    const { id, ...data } = makeFakeInput();

    const input = await sut.add(data);

    expect(input).toEqual({ id, ...data });
  });
});
