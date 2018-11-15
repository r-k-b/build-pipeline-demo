FROM node:11.1.0-alpine as devDeps
WORKDIR /code
COPY . .
RUN npm install && npx tsc

# n.b.: just with typescript & two @types packages in dev deps, doing a
# multistage build results in a 73MB image, vs 123MB (if `--production`
# is omitted).

FROM node:11.1.0-alpine
WORKDIR /code
COPY . .
COPY --from=devDeps /code/dist .
RUN npm install --production
EXPOSE 3000
CMD ["node", "index.js"]
