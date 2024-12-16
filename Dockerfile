# Dockerfile
FROM node:lts

# 作業ディレクトリを設定
WORKDIR /app

# pnpm のインストール
RUN npm install -g pnpm

# package.json と pnpm-lock.yaml をコピー
COPY package.json pnpm-lock.yaml ./

# 依存関係をインストール
RUN pnpm install

# ホストのソースコードがマウントされるため、依存関係のみをインストール
# ソースコードは COPY しない

# ポート3000を開放
EXPOSE 3000

# サーバーを起動
CMD ["pnpm", "dev"]
