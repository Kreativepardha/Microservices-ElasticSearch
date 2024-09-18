import express, { Request, Response, NextFunction } from "express";
import { CatalogService } from "../service/catalogService";
import { CatalogRepo } from "../repository/catalog.repo";

const router = express.Router();
// add elasticclient here
export const catalogService = new CatalogService(new CatalogRepo());

router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
   return res.status(201).json({});
  },
);
