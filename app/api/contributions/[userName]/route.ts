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

  // リクエストが送信された日付に基づいてその年の1月1日から12月31日までの期間を設定
  const currentYear = dayjs().year();
  const startOfYear = dayjs(`${currentYear}-01-01`).format("YYYY-MM-DDTHH:mm:ss");
  const endOfYear = dayjs(`${currentYear}-12-31`).format("YYYY-MM-DDTHH:mm:ss");

  const query = `
    query contributions($userName: String!, $startOfYear: DateTime!, $endOfYear: DateTime!) {
      user(login: $userName) {
        contributionsCollection(to: $endOfYear, from: $startOfYear) {
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

  try {
    console.log("GraphQLクエリ送信中:", query, { userName, startOfYear, endOfYear });

    const contributions = await octokit.graphql<Contributions>(query, {
      userName,
      startOfYear,
      endOfYear,
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
