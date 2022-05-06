FROM node:14-alpine AS builder
WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

# ---

FROM node:14-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

RUN addgroup -g 1001 -S nodejs
RUN adduser -S userapp -u 1001

USER userapp

EXPOSE 8080
ENTRYPOINT [ "node", "dist/index.js" ]