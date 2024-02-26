import { ParamsModel } from "../../models/params";

export const getParams = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = await ParamsModel.findOne();
      return resolve({ ...params?.toJSON() });
    } catch (error) {
      return reject("Error creating params document:" + error);
    }
  });
};
