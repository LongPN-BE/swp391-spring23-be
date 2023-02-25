import express from "express";
import {
  createMatch,
  getMatchByRound,
  getMatchByID,
  getMatch,
  updateMatch,
  deleteMatch,
} from "../Controller/MatchCon.js";
import { vertifyAdmin } from "./../utils/vertifyToken.js";

const router = express.Router();

router.post("/", vertifyAdmin, createMatch);
router.put("/:id", vertifyAdmin, updateMatch);
router.delete("/:id", vertifyAdmin, deleteMatch);
router.get("/round/:roundid", getMatchByRound);
router.get("/:id", getMatchByID);
router.get("/", getMatch);

export default router;
