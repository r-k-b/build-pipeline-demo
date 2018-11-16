FROM node:11.1.0-alpine as devDeps
WORKDIR /code
COPY . .
RUN npm install && npx tsc
WORKDIR /code/frontend
RUN ../node_modules/elm/bin/elm make src/Main.elm --output ../static/elm.js --optimize && \
    ../node_modules/elm/bin/elm make src/Main.elm --output ../static/elm.debug.js --debug && \
    npx uglifyjs ../static/elm.js \
        --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' \
    | npx uglifyjs --mangle --output=../static/elm.min.js

# n.b.: just with typescript & two @types packages in dev deps, doing a
# multistage build results in a 73MB image, vs 123MB (if `--production`
# is omitted).

FROM node:11.1.0-alpine
WORKDIR /code
COPY . .
COPY --from=devDeps /code/dist .
COPY --from=devDeps /code/static/elm*.js static/
RUN npm install --production
EXPOSE 3000
CMD ["node", "index.js"]
