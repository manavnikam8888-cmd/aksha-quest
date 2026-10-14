# WordSpark — Quest Map

A static version of the WordSpark quest map page: pick your next letter or word quest.
Supports English, हिंदी and मराठी.

## Files

- `index.html` — the quest map (single self-contained file, no build step)

## Publish on GitHub Pages

1. Create a new repository on GitHub and upload `index.html` and `README.md`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. After a minute your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Quest 1 (Letter Garden) links to `quest/letters.html`, which is not included yet. Add that page or change the link in `index.html`.
- The Rewards and My practice nav links point to `rewards.html` and `progress.html`, which also need to be created.
- Quests 2–4 are locked until the previous quest is finished.
