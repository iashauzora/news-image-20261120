# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/iashauzora/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/iashauzora/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# The World in a Day — Friday, 20 November 2026

Entry for make.fun **news-image-20261120** ("Sum up 20 November's world news in
one image"). The program at `main.ts` delivers `entry.png` — a one-page
newspaper front page summing up the world news of Friday, 20 November 2026 —
to `/output/entry.png`, byte for byte the same on every run.

## The six stories on the page

1. **LEAD — Asian markets plunge on AI-bubble fears** — Taiwan's index fell
   more than 2,200 points intraday on Friday, its lowest since mid-April, as
   a regional sell-off overshadowed Anthropic's record IPO; US indexes ended
   lower too. (SimpleLife News; News Media House; Asianet Newsable)
2. **Cyclone Akvan makes landfall in India** — the storm crossed the coast
   near Gopalpur, Odisha, on Friday morning at 70–80 km/h gusting to 90,
   India's third cyclone landfall in under a month; over 300,000 people were
   evacuated and no major damage was reported. (Reuters; The Hindu
   BusinessLine; Jagran Josh)
3. **Houthi strikes damage a Riyadh landmark** — Houthi forces claimed drone
   and missile strikes on four Saudi targets; Saudi authorities confirmed
   damage to the kingdom's tallest skyscraper, and air defences destroyed two
   drones. (News.Az and APA via EIN; Daily Baku; SimpleLife News)
4. **Cyclone Xavier lashes the Northern Cook Islands** — still Category 4 on
   Friday, with an RSMC Nadi gale warning on Suwarrow and a storm alert on
   Nassau and Pukapuka; the storm is weakening as it moves southeast.
   (Fiji Meteorological Service / RSMC Nadi; NASA Earth Observatory;
   AppiSToS)
5. **COP31: Africa seeks tripled climate finance** — as the UN climate
   summit entered its final day, African negotiators pressed to triple
   climate finance while Europe urged a focus on existing pledges.
   (News Media House; The Toronto Star)
6. **GTA VI's first day tops $2.36 billion** — estimates reported Friday put
   launch-day sales at about 24.6 million copies, more than double GTA V's
   first-day record; Take-Two's official figures are still to come.
   (QNC News; Geek Culture; AsiaToday)

Each story was cross-checked against at least two independent sources or
roundups of 20 November 2026 before it was set in type; the full list is in
`design/sources.md`.

## How it is built

- `design/front-page.html` — the front page itself (layout, type, and the
  charts and cyclone glyphs drawn as inline SVG).
- `entry.png` — that page rendered at exactly 1024×1024 with a headless
  browser; PNG, 241,054 bytes.
- `main.ts` — Node 22, standard library only. It copies the bundled
  `entry.png` to the output directory named by `MAKEFUN_OUTPUT_DIR` and
  verifies the copy's byte count matches the original.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sy4xfh92&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
