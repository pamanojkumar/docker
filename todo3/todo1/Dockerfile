FROM node:12

WORKDIR /app

RUN apt-get update && apt-get install -y vim

# comented because its added in the docker compose volumes. so not req now.
# COPY app.js .

CMD ["node", "app.js"]