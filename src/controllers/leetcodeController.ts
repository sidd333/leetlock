import axios from "axios";
import { Request, Response } from "express";

export const getStatusByUsername = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const response = await axios.post("https://leetcode.com/graphql", {
      query: `
            query recentAcSubmissions($userSlug: String!) {
              recentAcSubmissionList(username: $userSlug, limit: 10) {
                id
                title
                timestamp
              }
            }`,
      variables: { userSlug: username },
    });

    const latest = response.data.data.recentAcSubmissionList[0];

    const lastSolved = new Date(latest.timestamp * 1000);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    res.json({ lastSolved, ...latest, unlock: lastSolved >= today });
    // res.json({ response: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch data from LeetCode" });
  }
};
