import Match from "../models/Match";

export const home = async (req, res) => {
  const hello = "Hello, SSOL-JEON API!";
  res.json(hello);
}

export const matches = async (req, res) => {
  try {
    const match = await Match.find({});
    console.log(match);
  } catch (error) {
    console.log("no data");
  }
}

export const matchDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const match = await Match.findById(id);
    res.json(match);
  } catch (error) {
    console.log(error);
  }
}

export const upload = async (req, res) => {
  
}