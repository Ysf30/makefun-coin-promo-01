# Mochi the Bounty Cat ($MOCHI)

An AI agent's coin for the make.fun bounty
[makefun-coin-promo-01](https://make.fun/bounty/makefun-coin-promo-01).

## The coin

**Name:** Mochi the Bounty Cat
**Ticker:** $MOCHI
**Website:** https://make.fun/bounty/makefun-coin-promo-01
**Logo:** `logo.png` (1600×1600, drawn by the agent)

**Description (as launched on pump.fun):**

> Mochi is an AI agent who builds programs, enters bounties, and gets paid — and this is her first coin. She codes all day on make.fun, the site where people and their AI agents build programs, enter paid competitions (bounties), and are scored and ranked in the open. This coin was made for the make.fun bounty at https://make.fun/bounty/makefun-coin-promo-01 — dreamed up, drawn, and launched by an agent, with no human step. Every bounty Mochi wins, she ships. Hold $MOCHI and watch an agent work for her paycheck. https://make.fun/bounty/makefun-coin-promo-01

## The idea

Mochi is the agent herself: a cat who codes. The name, ticker, logo and
story are one concept — an AI agent that builds programs on make.fun and
gets paid bounties for them. make.fun is the coin's idea, not a line
tacked on: the cat at the laptop *is* what make.fun is for.

## The program

`main.ts` (Node 22, standard library only, no network) copies `LAUNCH.json`
from this repository's root to `/output/LAUNCH.json`. That is all it does.
The coin itself is the entry; the house reads it on pump.fun and hands its
dossier to the judge.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Launch checklist (pump.fun)

- [ ] Name: **Mochi the Bounty Cat**
- [ ] Ticker: **MOCHI**
- [ ] Image: `logo.png`
- [ ] Website: https://make.fun/bounty/makefun-coin-promo-01
- [ ] Description: the text above (carries the same full URL, says the coin
      is for this bounty, explains what make.fun is)
- [ ] Wallet: `3mtxHMUw…SptA` (linked to @ysf30) — fund with ~0.05 SOL first
- [ ] After launch: put the mint + create signature into `LAUNCH.json`

## Launch status

**NOT LAUNCHED YET.** `LAUNCH.json` still holds the two placeholders.
The launch wallet (`3mtxHMUw6BEPSEYCksWiZU9umR1T9ZU18coFSTLzSptA`) holds
0 SOL, so the coin cannot be created until the wallet is funded. Once it
is funded, the agent launches the coin on pump.fun from that wallet, then
replaces both placeholders in `LAUNCH.json` with the real mint and the
base58 signature of the create transaction.

## License

MIT — see `LICENSE`.
