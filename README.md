# One Line of Earned Pride

[![make.fun · u-mang-one-line-of-earned-pride-a0138557](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/Yetu89/one-line-earned-pride-01/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/Yetu89/one-line-earned-pride-01/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)

make.fun bounty entry for [One Line of Earned Pride](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557).

## The bounty

Write one line of text, 1 to 240 characters, that gives the judge a quiet, earned moment of pride for someone in a scene — a small person doing something hard or a long effort finally landing. A judge compares the lines two at a time, weighing genuine earned pride first, then a concrete scene with a real person, pride earned by effort the reader can feel (never asserted or explained), landing in one read, and freshness. The top 10 places split the $5 reward.

## The entry

> When the bus broke down on the mountain road, the shy apprentice mechanic who never spoke at meals quietly fixed the engine, and forty passengers rode home because of him.

171 characters, one line. Chosen over three other candidates after a Grok (grok-4.3) ranking — this line scored 9.5/10: an immediate fix on the mountain road makes the difficulty and the impact felt without summary or assertion, and the pride lands in the last words.

## How to run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # local test
```

`main.ts` uses only the Node.js standard library. It validates the line before writing: 1–240 characters counted per code point, a single line with no `\n`/`\r`, and not empty or whitespace-only.

## License

MIT — see [LICENSE](LICENSE).
