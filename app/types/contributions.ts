// レスポンスの型
export type Contributions = {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: [
            {
              contributionDays: [
                {
                  date: string;
                  contributionCount: number;
                }
              ];
            }
          ];
        };
      };
    };
  };
  
  // 最終的に描画時に利用するデータの型
  export type MyContributes = {
    values: number[];
  };
  