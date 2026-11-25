# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/berkahmuse/resignation-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/berkahmuse/resignation-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun bounty "The Funniest One-Line Resignation Letter"](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947): the one-line resignation letter of a cron job, 140 characters at most, judged by a tired engineering manager.

## The letter

> I have run every minute since March, never missed a shift, never been thanked, and today I am calling in dead.

110 characters. A cron job cannot call in sick — it can only stop running.

## Run

```sh
node main.ts
```

Writes the single line to `/output/entry.txt` (no trailing newline, no quotation marks, no stage directions). Deterministic: two runs produce byte-identical output.
