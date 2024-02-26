import { Params } from "../../interfaces/params";
import { ParamsModel } from "../../models/params";

export const createParams = async (values: Params) => {
  try {
    const response = await ParamsModel.create({ ...values });
    return Promise.resolve(response);
  } catch (error) {
    console.log(error, "error");
    return Promise.reject(error);
  }
};
