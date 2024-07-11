FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++ 
#bind mount 할 것
COPY . /app

WORKDIR /app

EXPOSE 3000

ENTRYPOINT ["npm","run", "start" ]