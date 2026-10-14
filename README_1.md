# WordSpark

A gamified letter and word learning app for children, in **English, हिंदी and मराठी**.
Kids travel along a quest map, find letters, collect stars and unlock rewards.

**Live app:** https://akshar-quest-reads.lovable.app/
**Quest map:** https://akshar-quest-reads.lovable.app/map

> Built for a hackathon. Replace this line with your team name and the hackathon name.

## Features

- Quest map with 4 quests: Letter Garden, Sound River, Word Bridge, Listening Hill
- Letter Garden is playable: 5 rounds of "find the letter you see"
- Star ratings (up to 3 per quest) and quests that unlock in order
- Rewards page with badges
- My practice page with session history and accuracy
- Language switch: English / हिंदी / मराठी
- Progress is saved in the browser (localStorage), with no login needed

## For judges: quick demo

Add `?demo=1` to the quest map URL to unlock all quests at once:

`index.html?demo=1`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Quest map (home page) |
| `quest/letters.html` | Letter Garden game |
| `quest/coming-soon.html` | Placeholder for quests 2–4 |
| `rewards.html` | Badges |
| `progress.html` | Practice history |
| `style.css` | Shared styles |
| `app.js` | Shared script: languages, saved progress, header |
| `.nojekyll` | Tells GitHub Pages to serve files as they are |

## Run locally

Open `index.html` in a browser. No build step or install needed.

## Publish on GitHub Pages

1. Upload all files (keep the `quest/` folder) to a new GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. After a minute, the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Team

- Name — role
- Name — role
