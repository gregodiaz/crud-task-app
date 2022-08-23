import Type from "../models/tables/Type";

export const createType = async (query) => await Type.create(query);

export const deleteType = async (id) => await Type.destroy({ where: { id } });
