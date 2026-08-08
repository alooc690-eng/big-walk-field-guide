const pages = {
  guides: {
    eyebrow: "START HERE", title: "Big Walk Guides",
    description: "Clear answers for your first session, from forming a group to opening the island's five main routes.",
    answer: "Confirm your group size and host first, then learn saving, communication, navigation, and item carrying before attempting the tower routes.",
    sections: [
      ["Before you begin", "Big Walk is designed for groups rather than solo play. Decide who will host the shared save and make sure everyone can rejoin that host later.", ["Choose a reliable host", "Share the join code privately", "Use the in-game voice and gesture tools", "Bring only the items your route needs"]],
      ["Recommended route", "Start with the Beach Tower and drawbridge. After the bridge opens, explore the map and tackle the remaining towers in the order that fits your group."]
    ], related: ["guides/multiplayer-crossplay", "guides/save-host-join", "puzzles"]
  },
  "guides/multiplayer-crossplay": {
    eyebrow: "MULTIPLAYER", title: "Multiplayer & Crossplay",
    description: "How many people can play, which platforms connect, and what to prepare before sharing a join code.",
    answer: "Big Walk supports groups of 2–12 players with crossplay between supported platforms. It has no solo mode or public matchmaking.",
    sections: [
      ["Group setup", "The host creates the session and shares a join code. Friends can connect across Steam, PlayStation 5, and Nintendo Switch 2.", ["Minimum: 2 players", "Maximum: 12 players", "No public matchmaking", "No dedicated single-player mode"]],
      ["Communication matters", "Many puzzles rely on proximity voice, gestures, pointing, and carrying different information. Plan how the team will reconnect before splitting up."]
    ], related: ["guides/save-host-join", "items/radios-channels", "puzzles"]
  },
  "guides/save-host-join": {
    eyebrow: "SESSION BASICS", title: "Save, Host & Join",
    description: "Understand autosave, host-owned progress, and how the same group can continue another day.",
    answer: "Progress autosaves to the host's world. To continue, the original host should load that save and share a fresh join code.",
    sections: [
      ["Who owns the save?", "The shared island progress belongs to the person who hosted the world. Return to the same host when the group wants to continue."],
      ["Safe session checklist", "Before ending a long session, regroup and confirm that the host has seen an autosave.", ["Keep the same host", "Share a new join code", "Wait for the autosave indicator", "Avoid quitting during a transition"]]
    ], related: ["guides/multiplayer-crossplay", "guides", "puzzles"]
  },
  "map-locations": {
    eyebrow: "ISLAND OVERVIEW", title: "Map & Locations",
    description: "A navigation hub for towers, puzzles, transport stations, useful items, and major landmarks.",
    answer: "Use towers and transport stations as anchor points. Mark solved puzzles, then plan short loops that return to a known landmark.",
    sections: [
      ["Useful map layers", "Separate towers, puzzle hints, keys, train stations, lift stations, bags, radios, and equipment so the map stays readable."],
      ["Navigation method", "Choose one destination, identify the nearest landmark, and agree on a fallback meeting point.", ["Tower color", "Nearest station", "Distinct terrain", "Return route"]]
    ], related: ["items/backpack-map-compass", "puzzles", "items"]
  },
  items: {
    eyebrow: "FIELD EQUIPMENT", title: "Items & Uses",
    description: "What the island's tools do, when they help, and how to avoid losing something important.",
    answer: "Prioritize communication, light, and navigation tools. Extra carrying capacity helps, but cooperation matters more than collecting everything.",
    sections: [
      ["Core categories", "Radios extend communication, lights improve visibility, pointers and signs help explain ideas, while backpacks and hip bags increase capacity."],
      ["Team inventory", "Give each person a role instead of making everyone carry the same equipment.", ["Navigator: map and compass", "Scout: light and pointer", "Coordinator: radio", "Carrier: bag and puzzle items"]]
    ], related: ["items/backpack-map-compass", "items/radios-channels", "map-locations"]
  },
  "items/backpack-map-compass": {
    eyebrow: "EXPLORATION KIT", title: "Backpack, Map & Compass",
    description: "Build a reliable exploration kit and understand why each piece matters on long routes.",
    answer: "Bags expand carrying options, while the map and compass make regrouping easier. Give the navigation kit to a clear communicator.",
    sections: [
      ["What to look for", "Bags are valuable because hands are limited. The map shows the island's structure, while the compass gives everyone a shared direction."],
      ["Before leaving", "Record the nearby landmark and make sure one player is not carrying every critical item.", ["Name a meeting point", "Share the direction", "Split key items", "Use screenshots as backup"]]
    ], related: ["map-locations", "items", "items/radios-channels"]
  },
  "items/radios-channels": {
    eyebrow: "COMMUNICATION", title: "Radios & Channels",
    description: "Use radios, transmitters, receivers, and channel discoveries to keep distant teammates connected.",
    answer: "Agree on a channel before separating and test that both sides can hear each other before moving beyond proximity voice range.",
    sections: [
      ["Radio routine", "Test beside a shared landmark, say who is moving, and keep messages short enough that directions are not lost."],
      ["Troubleshooting", "If communication fails, return to the last meeting point rather than wandering farther away.", ["Confirm the channel", "Check the equipment", "Move closer", "Regroup and use gestures"]]
    ], related: ["guides/multiplayer-crossplay", "items", "map-locations"]
  },
  "guides/appearance": {
    eyebrow: "PERSONALIZATION", title: "Change Your Appearance",
    description: "Make your Walkling easier to recognize when a large group is talking, pointing, and moving at once.",
    answer: "Choose a clear color and memorable look, then use that identity in voice calls so teammates know who is giving directions.",
    sections: [
      ["Why appearance matters", "Customization is practical in a crowded session. Color and silhouette become call signs during puzzles."],
      ["Group convention", "Avoid identical looks and pair each appearance with a short name.", ["Pick distinct colors", "Use one-word call signs", "Keep the same look", "Name the person you address"]]
    ], related: ["guides/multiplayer-crossplay", "guides", "puzzles"]
  },
  puzzles: {
    eyebrow: "PUZZLE HUB", title: "Tower & Puzzle Guides",
    description: "A spoiler-aware route through the five main towers and the transport systems they unlock.",
    answer: "Open the Beach Tower route first. After the drawbridge, the Red, Blue, Green, and Yellow routes can be explored more freely.",
    sections: [
      ["Main progression", "Community guide indexes group 24 puzzle solutions across five tower routes. Open detailed routes only when the team is stuck."],
      ["Tower outcomes", "Each route changes how the island can be traversed.", ["Beach → Drawbridge", "Red → Map Room", "Blue → Trains", "Green → Chairlift", "Yellow → Tunnels"]]
    ], related: ["puzzles/beach-tower", "puzzles/red-tower", "puzzles/blue-tower"]
  },
  "puzzles/beach-tower": tower("TOWER ROUTE 01", "Beach Tower → Drawbridge", "the wider island", "four", "drawbridge", ["puzzles", "puzzles/red-tower", "map-locations"]),
  "puzzles/red-tower": tower("TOWER ROUTE 02", "Red Tower → Map Room", "a clearer view of your journey", "five", "Map Room", ["puzzles", "puzzles/blue-tower", "map-locations"]),
  "puzzles/blue-tower": tower("TOWER ROUTE 03", "Blue Tower → Trains", "faster island travel", "five", "train network", ["puzzles", "puzzles/green-tower", "map-locations"]),
  "puzzles/green-tower": tower("TOWER ROUTE 04", "Green Tower → Chairlift", "easier mountain travel", "five", "chairlift", ["puzzles", "puzzles/yellow-tower", "map-locations"]),
  "puzzles/yellow-tower": tower("TOWER ROUTE 05", "Yellow Tower → Tunnels", "new underground shortcuts", "five", "tunnel network", ["puzzles", "puzzles/green-tower", "items"])
};

function tower(eyebrow, title, reward, count, unlock, related) {
  return {
    eyebrow, title, description: `Complete this route to unlock ${reward}.`,
    answer: `Complete the ${count} nearby route puzzles, return the required progress items, and activate the ${unlock}.`,
    sections: [
      ["Route planning", "Treat the tower as your central meeting point. Record each completed puzzle before the team moves on."],
      ["Route checklist", "Keep navigation and communication tools split across the group.", ["Locate the tower", `Complete ${count} route puzzles`, "Regroup with progress items", `Test the ${unlock}`]]
    ], related
  };
}

const labels = Object.fromEntries(Object.entries(pages).map(([slug, page]) => [slug, page.title]));
const nav = [["guides", "Guides"], ["map-locations", "Map & Locations"], ["items", "Items"], ["puzzles", "Puzzles"]];
const routes = [
  ["puzzles/beach-tower", "01", "Beach Tower", "Drawbridge", "sand"],
  ["puzzles/red-tower", "02", "Red Tower", "Map Room", "red"],
  ["puzzles/blue-tower", "03", "Blue Tower", "Trains", "blue"],
  ["puzzles/green-tower", "04", "Green Tower", "Chairlift", "green"],
  ["puzzles/yellow-tower", "05", "Yellow Tower", "Tunnels", "yellow"]
];

function href(slug = "") { return `#/${slug}`; }
function header() {
  return `<header class="site-header"><div class="shell header-inner">
    <a class="brand" href="#/" aria-label="Big Walk Field Guide home"><span class="brand-mark">BW</span><span>Big Walk <b>Field Guide</b></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${nav.map(([s,l]) => `<a href="${href(s)}">${l}</a>`).join("")}</nav>
    <details class="mobile-menu"><summary>Menu</summary><nav aria-label="Mobile navigation">${nav.map(([s,l]) => `<a href="${href(s)}">${l}</a>`).join("")}</nav></details>
  </div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="shell footer-inner"><p><strong>Big Walk Field Guide</strong><br>Independent, spoiler-aware player reference.</p><p class="footer-note">Game names and trademarks belong to their respective owners.</p></div></footer>`;
}

function home() {
  const quick = [
    ["guides/multiplayer-crossplay", "Multiplayer & Crossplay", "Set up a 2–12 player group and understand cross-platform play."],
    ["guides/save-host-join", "Save, Host & Join", "Keep the same journey going with host-owned autosaves."],
    ["map-locations", "Map & Locations", "Plan routes between towers, puzzles, items, and transport."],
    ["items", "Items & Uses", "Learn what to carry and how to split equipment across the team."],
    ["items/radios-channels", "Radios & Channels", "Stay coordinated when your group explores different areas."],
    ["guides/appearance", "Change Appearance", "Make every teammate easy to recognize and call out."]
  ];
  return `${header()}<main>
    <section class="home-hero"><div class="shell hero-grid"><div class="hero-copy">
      <p class="eyebrow">THE SPOILER-AWARE COMPANION</p><h1>Take the long way.<br><em>Get home together.</em></h1>
      <p class="lede">Practical Big Walk guides for multiplayer setup, island navigation, useful items, radio communication, and the five tower routes.</p>
      <div class="hero-actions"><a class="button primary" href="${href("guides")}">Start with the basics</a><a class="button secondary" href="${href("puzzles")}">Explore puzzle routes</a></div>
      <div class="fact-row"><span><b>2–12</b> players</span><span><b>5</b> tower routes</span><span><b>Crossplay</b> supported</span></div>
    </div><div class="island-card"><div class="island-title"><span>FIELD MAP</span><b>Main routes</b></div><div class="island-shape">
      ${routes.map(([s,c,t,,tone],i) => `<a class="map-pin pin-${i+1} ${tone}" href="${href(s)}"><span>${c}</span><b>${t.replace(" Tower","")}</b></a>`).join("")}
      <span class="trail trail-a"></span><span class="trail trail-b"></span><span class="trail trail-c"></span></div><p>Choose a colored marker to open its tower guide.</p>
    </div></div></section>
    <section class="quick-section shell"><div class="section-heading"><div><p class="eyebrow">QUICK ANSWERS</p><h2>Before the group starts walking</h2></div><a href="${href("guides")}">View all guides →</a></div>
      <div class="quick-grid">${quick.map(([s,t,c],i) => `<a class="quick-card" href="${href(s)}"><span class="card-num">0${i+1}</span><h3>${t}</h3><p>${c}</p><span class="card-link">Read guide →</span></a>`).join("")}</div>
    </section>
    <section class="routes-section"><div class="shell"><div class="section-heading light"><div><p class="eyebrow">MAIN PROGRESSION</p><h2>Five towers. Five ways forward.</h2></div><p>Use these routes only when your group is stuck.</p></div>
      <div class="route-grid">${routes.map(([s,c,t,u,tone]) => `<a class="route-card ${tone}" href="${href(s)}"><span>${c}</span><h3>${t}</h3><p>Unlocks <strong>${u}</strong></p><b>Open route →</b></a>`).join("")}</div>
    </div></section>
    <section class="principle-section shell"><div class="principle-copy"><p class="eyebrow">FIELD PRINCIPLE</p><h2>Communication is the real puzzle.</h2></div><p>Stay in the game’s communication system, give teammates clear landmarks, and let confusion become part of the story.</p></section>
  </main>${footer()}`;
}

function article(slug, page) {
  return `${header()}<main><section class="article-hero"><div class="shell article-hero-inner"><div><p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="lede">${page.description}</p></div><div class="route-orbit" aria-hidden="true"><span>●</span><span>●</span><span>●</span></div></div></section>
  <div class="shell article-layout"><article class="article-body"><section class="quick-answer"><p class="eyebrow">QUICK ANSWER</p><p>${page.answer}</p></section>
    ${page.sections.map(([h,b,bullets]) => `<section class="content-section"><h2>${h}</h2><p>${b}</p>${bullets ? `<ul>${bullets.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}</section>`).join("")}
    <aside class="source-note"><strong>Source note</strong><p>Core platform, player-count, crossplay, and save facts are based on the official Big Walk FAQ. Puzzle counts and routes are treated as community guidance and should be checked in-game.</p></aside>
  </article><aside class="related-panel"><p class="eyebrow">KEEP WALKING</p><h2>Related guides</h2><div class="related-links">${page.related.map(s => `<a href="${href(s)}">${labels[s]} <span>→</span></a>`).join("")}</div><a class="all-guides" href="${href("guides")}">Browse all guides</a></aside></div></main>${footer()}`;
}

function render() {
  const slug = location.hash.replace(/^#\/?/, "").replace(/\/$/, "");
  const page = pages[slug];
  document.title = slug ? `${page?.title || "Not Found"} | Big Walk Field Guide` : "Big Walk Field Guide";
  document.getElementById("app").innerHTML = !slug ? home() : page ? article(slug, page) : `${header()}<main><section class="not-found shell"><p class="eyebrow">404 / LOST WALKER</p><h1>This trail ends here.</h1><p>Head back to the field guide and choose another route.</p><a class="button primary" href="#/">Return home</a></section></main>${footer()}`;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
