// WordSpark shared script: language, saved progress, header/nav.
(function () {
  const KEY = "wordspark-state";

  const I18N = {
    en: {
      language: "Language", navMap: "🗺️ Quest map", navRewards: "🏅 Rewards", navProgress: "📈 My practice",
      hello: "Hello!", mapTitle: "Quest map", locked: "Finish the quest before to open this one",
      names: ["Letter Garden", "Sound River", "Word Bridge", "Listening Hill"],
      letterDesc: "Find the letter you see.",
      round: "Round", of: "of", right: "Great job! ⭐", wrong: "Try again next time!",
      next: "Next", finish: "Finish", playAgain: "Play again", backToMap: "Back to map",
      result: "You got", correctWord: "correct", starsEarned: "Stars earned",
      rewardsTitle: "Rewards", earned: "Earned", notEarned: "Locked",
      badges: [
        ["First Spark", "Earn your first star."],
        ["Letter Explorer", "Collect 2 stars."],
        ["Garden Master", "Get 3 stars in Letter Garden."]
      ],
      progressTitle: "My practice", date: "Date", quest: "Quest", score: "Score", noSessions: "No practice yet. Start a quest!",
      totalStars: "Total stars", sessionsDone: "Sessions", accuracy: "Accuracy",
      soonTitle: "Coming soon", soonText: "This quest is being built. Come back soon!",
      demoNote: "Demo mode: all quests unlocked.", reset: "Reset my progress", resetAsk: "Reset all progress?"
    },
    hi: {
      language: "भाषा", navMap: "🗺️ क्वेस्ट मैप", navRewards: "🏅 इनाम", navProgress: "📈 मेरा अभ्यास",
      hello: "नमस्ते!", mapTitle: "क्वेस्ट मैप", locked: "इसे खोलने के लिए पिछला क्वेस्ट पूरा करो",
      names: ["अक्षर बगीचा", "ध्वनि नदी", "शब्द पुल", "सुनने की पहाड़ी"],
      letterDesc: "जो अक्षर दिखे, उसे ढूँढो।",
      round: "राउंड", of: "में से", right: "शाबाश! ⭐", wrong: "अगली बार फिर कोशिश करो!",
      next: "आगे", finish: "खत्म", playAgain: "फिर खेलो", backToMap: "मैप पर वापस",
      result: "तुम्हारे सही", correctWord: "जवाब", starsEarned: "मिले सितारे",
      rewardsTitle: "इनाम", earned: "मिला", notEarned: "बंद",
      badges: [
        ["पहली चिंगारी", "अपना पहला सितारा जीतो।"],
        ["अक्षर खोजी", "2 सितारे इकट्ठा करो।"],
        ["बगीचे के उस्ताद", "अक्षर बगीचे में 3 सितारे पाओ।"]
      ],
      progressTitle: "मेरा अभ्यास", date: "तारीख", quest: "क्वेस्ट", score: "स्कोर", noSessions: "अभी अभ्यास नहीं हुआ। क्वेस्ट शुरू करो!",
      totalStars: "कुल सितारे", sessionsDone: "अभ्यास", accuracy: "सटीकता",
      soonTitle: "जल्द आ रहा है", soonText: "यह क्वेस्ट बन रहा है। जल्दी वापस आना!",
      demoNote: "डेमो मोड: सभी क्वेस्ट खुले हैं।", reset: "मेरी प्रगति रीसेट करें", resetAsk: "सारी प्रगति रीसेट करें?"
    },
    mr: {
      language: "भाषा", navMap: "🗺️ क्वेस्ट नकाशा", navRewards: "🏅 बक्षिसे", navProgress: "📈 माझा सराव",
      hello: "नमस्कार!", mapTitle: "क्वेस्ट नकाशा", locked: "हे उघडण्यासाठी आधीचा क्वेस्ट पूर्ण करा",
      names: ["अक्षर बाग", "आवाजाची नदी", "शब्दांचा पूल", "ऐकण्याची टेकडी"],
      letterDesc: "जे अक्षर दिसेल ते शोधा.",
      round: "फेरी", of: "पैकी", right: "शाब्बास! ⭐", wrong: "पुढच्या वेळी पुन्हा प्रयत्न करा!",
      next: "पुढे", finish: "संपवा", playAgain: "पुन्हा खेळा", backToMap: "नकाशावर परत",
      result: "तुमची बरोबर", correctWord: "उत्तरे", starsEarned: "मिळालेले तारे",
      rewardsTitle: "बक्षिसे", earned: "मिळाले", notEarned: "बंद",
      badges: [
        ["पहिली ठिणगी", "तुमचा पहिला तारा मिळवा."],
        ["अक्षर शोधक", "2 तारे जमा करा."],
        ["बागेचे मास्टर", "अक्षर बागेत 3 तारे मिळवा."]
      ],
      progressTitle: "माझा सराव", date: "तारीख", quest: "क्वेस्ट", score: "गुण", noSessions: "अजून सराव नाही. क्वेस्ट सुरू करा!",
      totalStars: "एकूण तारे", sessionsDone: "सराव", accuracy: "अचूकता",
      soonTitle: "लवकरच येत आहे", soonText: "हा क्वेस्ट तयार होत आहे. लवकर परत या!",
      demoNote: "डेमो मोड: सर्व क्वेस्ट उघडे आहेत.", reset: "माझी प्रगती रीसेट करा", resetAsk: "सर्व प्रगती रीसेट करायची?"
    }
  };

  const QUEST_IDS = ["letters", "sound", "word", "listen"];
  const QUEST_ICONS = ["🌼", "🌊", "🌉", "⛰️"];

  function fresh() { return { lang: "en", demo: false, quests: {}, sessions: [] }; }
  function load() {
    try { return Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return fresh(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  const state = load();
  if (new URLSearchParams(location.search).get("demo") === "1") { state.demo = true; save(); }

  const base = document.body.dataset.base || "";
  const page = document.body.dataset.page || "";

  const WS = {
    state, save, QUEST_IDS, QUEST_ICONS, base,
    t() { return I18N[state.lang] || I18N.en; },
    stars(id) { return (state.quests[id] && state.quests[id].stars) || 0; },
    totalStars() { return QUEST_IDS.reduce((n, id) => n + WS.stars(id), 0); },
    isUnlocked(i) { return i === 0 || state.demo || WS.stars(QUEST_IDS[i - 1]) >= 1; },
    onRender: null,
    renderChrome
  };
  window.WS = WS;

  function renderChrome() {
    const t = WS.t();
    document.documentElement.lang = state.lang;
    const nav = [["index.html", "navMap", "map"], ["rewards.html", "navRewards", "rewards"], ["progress.html", "navProgress", "progress"]];
    document.getElementById("chrome").innerHTML =
      `<header>
        <a class="logo" href="${base}index.html">WordSpark</a>
        <div class="header-right">
          <span class="stars">⭐ ${WS.totalStars()}</span>
          <select id="lang" aria-label="${t.language}">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
          </select>
        </div>
      </header>
      <nav>${nav.map(n => `<a class="${page === n[2] ? "active" : ""}" href="${base}${n[0]}">${t[n[1]]}</a>`).join("")}</nav>`;
    const sel = document.getElementById("lang");
    sel.value = state.lang;
    sel.addEventListener("change", () => {
      state.lang = sel.value; save(); renderChrome();
      if (WS.onRender) WS.onRender();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    if (WS.onRender) WS.onRender();
  });
})();
