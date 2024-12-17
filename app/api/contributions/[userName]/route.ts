import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/core";
import dayjs from "dayjs";
import { Contributions } from "@/app/types/contributions";

export async function GET(
    request: NextRequest,
    { params }: { params: { userName: string } }
  ) {
    const { userName } = params;
  
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    });
  
    const now = dayjs().format("YYYY-MM-DDTHH:mm:ss");
    const sixMonthBefore = dayjs().subtract(6, "month").format("YYYY-MM-DDTHH:mm:ss");
  
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
  
    // route.ts
    try {
      console.log("GraphQLクエリ送信中:", query, { userName, now, sixMonthBefore });

      const contributions = await octokit.graphql<Contributions>(query, {
        userName,
        now,
        sixMonthBefore,
      });

      console.log("GraphQLクエリ成功:", contributions);

      // 週ごとにデータを整形
      const weeks = contributions.user.contributionsCollection.contributionCalendar.weeks.map(
        (week) => week.contributionDays.map((day) => day.contributionCount)
      );

      return NextResponse.json({ values: weeks });
    } catch (error) {
      console.error("GitHub APIエラー:", error);
      return NextResponse.json(
        { error: "GitHub APIのリクエスト中にエラーが発生しました。" },
        { status: 500 }
      );
    }

  }