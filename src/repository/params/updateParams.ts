import { Params } from "../../interfaces/params";
import { ParamsModel } from "../../models/params";

export const updateParams = (values: Params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = ParamsModel.findOneAndUpdate(
        { _id: values._id },
        { ...values }
      );
      return resolve(params);
    } catch (error) {
      return reject("Error creating params document:" + error);
    }
  });
};
