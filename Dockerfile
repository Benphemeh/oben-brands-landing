# ---------- Step 1: Build the app ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ---------- Step 2: Run the app ----------
FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# If you do have a next.config.js, uncomment this line
# COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
