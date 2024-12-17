// 型をimportしておく
import { MyContributes } from "@/app/types/contributions";

// カスタムフック本体
export const useContributions = () => {
  const getContributions = async (userName: string) => {
    try {
      console.log("実行された");
      const response = await fetch(`/api/contributions/${userName}`);
      console.log("fetchリクエスト送信");

      if (!response.ok) {
        console.error("APIリクエスト失敗:", response.statusText);
        return { values: [] }; // エラー時は空のデータを返す
      }

      const data: MyContributes = await response.json();
      return data;
    } catch (error) {
      console.error("API呼び出し中のエラー:", error);
      return { values: [] }; // 例外発生時も空のデータを返す
    }
  };

  return {
    getContributions,
  };
};

