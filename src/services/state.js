import State from "../models/tables/State";

export const createState = async (query) => await State.create(query);

export const deleteState = async (id) => await State.destroy({ where: { id } });
