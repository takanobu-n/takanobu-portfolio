# Dockerfile
FROM node:latest

# 作業ディレクトリを設定
WORKDIR /app

# pnpmのインストール
RUN npm install -g pnpm
RUN npm install react-icons

# ホストのソースコードがマウントされるため、デフォルトのpackage.jsonは空のままでOK
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# ポート3000を開放
EXPOSE 3000

# サーバーを起動
CMD ["pnpm", "dev"]
