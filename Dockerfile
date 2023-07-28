FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN yarn set version berry
RUN yarn
RUN yarn build

FROM node:20-alpine AS deploy

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
CMD ["node", "index.js"]