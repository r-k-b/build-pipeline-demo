FROM alpine/git as git
COPY .git .git
COPY . .
RUN ./stamp-version-info.sh

FROM node:11.1.0-alpine
WORKDIR /code
COPY . .
COPY --from=git static/version.txt static/
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
