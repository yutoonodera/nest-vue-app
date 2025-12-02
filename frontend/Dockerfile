FROM node:20

WORKDIR /app

# package.json と lock を先にコピー
COPY package*.json ./

# ここで npm install
RUN npm install

# 残りのファイルをコピー
COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
