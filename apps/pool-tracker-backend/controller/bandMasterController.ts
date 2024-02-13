import { request } from "express";
import Band from "../model/bandMasterSchema.ts";


export const addBand = async (request, response) => {
    const band = request.body;
    console.log(band);
    const newBand = new Band(band);
    try {
      await newBand.save();
      response.status(201).json(newBand);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };