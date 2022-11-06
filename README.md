# how to run

```
npx tsc --project tsconfig.build.json

node dist/bench-1.js
node dist/bench-2.js
node dist/bench-3.js
node dist/bench-4.js

```

# result

```
❯ node dist/bench-1.js
bench-1-express: 4.487ms

❯ node dist/bench-2.js
bench-2-nestjs-express: 166.064ms

❯ node dist/bench-3.js
Hello World!
bench-3-nestjs-standalone: 14.966ms

❯ node dist/bench-4.js
Hello world!
bench-4-raw-nodejs: 3.613ms

```

### Note

MBP 2018, 2.7GHz Intel Core i7, 16GB 2133 MHz LPDDR3
