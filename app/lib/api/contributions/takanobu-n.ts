import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";
import dayjs from "dayjs";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { userName } = request.query;

  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const now = dayjs().format("YYYY-MM-DDTHH:mm:ss");
  const sixMonthBefore = dayjs()
    .subtract(6, "month")
    .format("YYYY-MM-DDTHH:mm:ss");

  const query = `
    query contributions ($userName:String!, $now:DateTime!, $sixMonthBefore:DateTime!) {
      user(login: $userName) {
        contributionsCollection(to: $now, from: $sixMonthBefore) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const contributions = await octokit.graphql(query, {
    userName,
    now,
    sixMonthBefore,
  });

  const contributionCount = [];
  contributions.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week) => {
      week.contributionDays.forEach((day) => {
        contributionCount.push(day.contributionCount);
      });
    }
  );

  return response.status(200).json({ values: contributionCount });
}
