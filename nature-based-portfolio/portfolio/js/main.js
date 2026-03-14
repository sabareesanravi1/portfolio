let mode = 'personal', light = 'light';

const personalNav = [
  { href:'#personal-intro', label:'Intro' },
  { href:'#personal-youtube', label:'YouTube' },
  { href:'#personal-writing', label:'Writing' },
  { href:'#personal-watches', label:'Watches' },
  { href:'#personal-gadgets', label:'Gadgets' },
  { href:'#personal-medium', label:'Medium' },
  { href:'#personal-quora', label:'Quora' },
];
const workNav = [
  { href:'#work-intro', label:'Intro' },
  { href:'#work-exp', label:'Experience' },
  { href:'#work-tech', label:'Tech Stack' },
  { href:'#work-projects', label:'Projects' },
  { href:'#work-achievements', label:'Achievements' },
  { href:'#work-contact', label:'Contact' },
];

function buildNav(m) {
  const links = m === 'personal' ? personalNav : workNav;
  document.getElementById('nav-links').innerHTML = links.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');
}

function setTheme(m, l) {
  mode = m; light = l;
  document.documentElement.dataset.theme = `${m}-${l}`;
  document.body.classList.remove('mode-personal', 'mode-work');
  document.body.classList.add(`mode-${m}`);
  buildNav(m);
  updateControls();
  document.getElementById('badge-lbl').textContent = `${m === 'personal' ? 'Personal' : 'Work'} · ${l === 'light' ? 'Day' : 'Night'}`;
  document.getElementById('footer-mode').textContent = `${m === 'personal' ? 'Personal' : 'Work'} Mode`;
  const dark = l === 'dark';
  if (m === 'personal') { buildTrees(dark); buildVillage(dark); buildFireflies(); }
  else buildCity(dark);
}

function setMode(m) { ripple(); setTheme(m, light); scrollToTop(); }
function setLight(l) { ripple(); setTheme(mode, l); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function updateControls() {
  document.querySelectorAll('#mode-grp .ctrl-btn').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().includes(mode)));
  document.querySelectorAll('#light-grp .ctrl-btn').forEach(b => b.classList.toggle('active', b.textContent.includes(light === 'light' ? '☀' : '🌙')));
}

function ripple() {
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.cssText = `width:60px;height:60px;top:30px;right:120px;background:var(--accent);opacity:.2;`;
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

/* ---- STARS ---- */
function buildStars() {
  const c = document.getElementById('stars-layer');
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div'); s.className = 'star';
    const sz = Math.random() * 2.5 + .5;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*68}%;left:${Math.random()*100}%;--d:${2+Math.random()*4}s;--dl:${Math.random()*5}s;`;
    c.appendChild(s);
  }
}

/* ---- CLOUDS ---- */
function buildClouds() {
  const c = document.getElementById('clouds-layer');
  [{w:200,h:50,t:'8%',dur:'65s',dl:'0s'},{w:150,h:40,t:'18%',dur:'85s',dl:'-35s'},
   {w:260,h:62,t:'12%',dur:'105s',dl:'-58s'},{w:110,h:30,t:'22%',dur:'72s',dl:'-12s'},
   {w:180,h:48,t:'6%',dur:'92s',dl:'-46s'}].forEach(cfg => {
    const el = document.createElement('div'); el.className = 'cloud';
    el.style.cssText = `width:${cfg.w}px;height:${cfg.h}px;top:${cfg.t};animation-duration:${cfg.dur};animation-delay:${cfg.dl};`;
    c.appendChild(el);
  });
}

/* ---- TREE SVG ---- */
function treeSVG(h, dark, type) {
  const greens = dark ? ['#1a3d1c','#1e4820','#152e16','#0f2210'] : ['#388e3c','#43a047','#2e7d32','#4caf50'];
  const trunk = dark ? '#2d1a0e' : '#5d4037';
  const c1 = greens[Math.floor(Math.random()*greens.length)];
  const c2 = greens[Math.floor(Math.random()*greens.length)];
  if (type === 'pine') {
    const w = h*.55;
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect x="${w/2-4}" y="${h*.7}" width="8" height="${h*.3}" fill="${trunk}"/><polygon points="${w/2},0 ${w*.08},${h*.5} ${w*.92},${h*.5}" fill="${c1}"/><polygon points="${w/2},${h*.15} ${w*.05},${h*.65} ${w*.95},${h*.65}" fill="${c2}"/><polygon points="${w/2},${h*.3} 0,${h*.8} ${w},${h*.8}" fill="${c1}" opacity=".9"/></svg>`;
  }
  const w = h*.85; const r = h*.32;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect x="${w/2-5}" y="${h*.55}" width="10" height="${h*.45}" fill="${trunk}"/><ellipse cx="${w/2}" cy="${h*.4}" rx="${r*1.1}" ry="${r}" fill="${c1}"/><ellipse cx="${w/2+r*.3}" cy="${h*.32}" rx="${r*.9}" ry="${r*.85}" fill="${c2}"/><ellipse cx="${w/2-r*.3}" cy="${h*.45}" rx="${r*.8}" ry="${r*.75}" fill="${c1}" opacity=".85"/></svg>`;
}

function buildTrees(dark) {
  const fg = document.getElementById('trees-fg');
  const mid = document.getElementById('forest-mid');
  const far = document.getElementById('forest-far');
  fg.innerHTML = mid.innerHTML = far.innerHTML = '';
  [{h:145,v:'pine'},{h:115,v:'round'},{h:165,v:'pine'},{h:100,v:'round'},{h:155,v:'pine'},{h:125,v:'round'},{h:108,v:'pine'},{h:140,v:'round'}].forEach(t => {
    const d = document.createElement('div'); d.innerHTML = treeSVG(t.h, dark, t.v); fg.appendChild(d);
  });
  for (let i=0;i<12;i++){const h=65+Math.random()*55;const d=document.createElement('div');d.innerHTML=treeSVG(h,dark,Math.random()>.5?'pine':'round');mid.appendChild(d);}
  for (let i=0;i<16;i++){const h=45+Math.random()*45;const d=document.createElement('div');d.innerHTML=treeSVG(h,dark,Math.random()>.5?'pine':'round');far.appendChild(d);}
}

/* ---- HOUSES ---- */
function houseSVG(style, dark) {
  const walls = dark?['#2d3a2e','#263028']:['#f5e6c8','#e8d5a0','#dfc88a'];
  const roofs = dark?['#3a2020','#2e1c1c']:['#c62828','#6d4c41','#e53935'];
  const win = dark?'#ffd54f':'#fffde7'; const wa=dark?'1':'0.9';
  const w=walls[Math.floor(Math.random()*walls.length)];
  const r=roofs[Math.floor(Math.random()*roofs.length)];
  const dl=`style="--d:${3+Math.random()*3}s;--dl:${Math.random()*2}s"`;
  if(style==='cottage')return`<svg width="72" height="92" viewBox="0 0 72 92"><rect x="5" y="44" width="62" height="48" rx="2" fill="${w}"/><polygon points="36,4 2,46 70,46" fill="${r}"/><rect x="28" y="60" width="16" height="20" rx="2" fill="${dark?'#2a1a05':'#8d6e63'}"/><rect x="10" y="54" width="14" height="14" rx="1" fill="${win}" opacity="${wa}" class="wl" ${dl}/><rect x="48" y="54" width="14" height="14" rx="1" fill="${win}" opacity="${wa}" class="wl" ${dl}/></svg>`;
  return`<svg width="56" height="108" viewBox="0 0 56 108"><rect x="5" y="32" width="46" height="76" rx="2" fill="${w}"/><polygon points="28,4 3,34 53,34" fill="${r}"/><rect x="21" y="78" width="14" height="20" rx="2" fill="${dark?'#2a1a05':'#8d6e63'}"/>${[0,1,2].map(row=>[0,1].map(col=>`<rect x="${10+col*20}" y="${40+row*16}" width="12" height="11" rx="1" fill="${win}" opacity="${wa}" class="wl" ${dl}/>`).join('')).join('')}</svg>`;
}

function buildVillage(dark) {
  const c = document.getElementById('vil-houses'); c.innerHTML='';
  ['cottage','tall','cottage','cottage','tall','cottage','cottage'].forEach(s=>{
    const d=document.createElement('div'); d.innerHTML=houseSVG(s,dark);c.appendChild(d);
  });
  document.querySelectorAll('.wl').forEach(el=>{
    const dur=el.style.getPropertyValue('--d')||'4s';
    const dl=el.style.getPropertyValue('--dl')||'0s';
    el.style.animation=`wblink ${dur} ease-in-out infinite ${dl}`;
  });
}

/* ---- CITY ---- */
function bldSVG(w, h, floors, dark) {
  const bodies=dark?['#0a1525','#0d1a2a','#060e1c']:['#607d8b','#78909c','#546e7a'];
  const body=bodies[Math.floor(Math.random()*bodies.length)];
  const wc=dark?'#ffd54f':'#e3f2fd';
  const perRow=Math.floor(w/16); let wins='';
  for(let row=0;row<floors;row++){for(let col=0;col<perRow;col++){
    if(Math.random()>(dark?.35:.6)){
      const dur=4+Math.random()*5; const dl=Math.random()*4;
      wins+=`<rect x="${col*16+4}" y="${row*18+8}" width="9" height="11" rx="1" fill="${wc}" opacity="${dark?.85:.6}" style="animation:wblink ${dur}s ease-in-out infinite ${dl}s"/>`;
    }
  }}
  const hasAntenna=Math.random()>.5;
  const extra=hasAntenna?30:0;
  return`<svg width="${w}" height="${h+extra}" viewBox="0 0 ${w} ${h+extra}">
    <rect x="0" y="${extra}" width="${w}" height="${h}" fill="${body}"/>
    ${wins}
    ${hasAntenna?`<rect x="${w/2-3}" y="0" width="6" height="${extra+5}" fill="${dark?'#1a2a3a':'#78909c'}"/><circle cx="${w/2}" cy="3" r="5" fill="${dark?'#ff5252':'#ef9a9a'}"/>`:''}
  </svg>`;
}

function buildCity(dark) {
  const c = document.getElementById('skyline-wrap'); c.innerHTML='';
  [{w:55,h:180,f:9},{w:70,h:280,f:14},{w:48,h:220,f:11},{w:92,h:360,f:18},
   {w:60,h:260,f:13},{w:105,h:430,f:22},{w:65,h:305,f:15},{w:82,h:390,f:20},
   {w:55,h:240,f:12},{w:70,h:310,f:16},{w:45,h:200,f:10},{w:60,h:275,f:14}].forEach(b=>{
    const d=document.createElement('div');d.style.alignSelf='flex-end';
    d.innerHTML=bldSVG(b.w,b.h,b.f,dark);c.appendChild(d);
  });
}

/* ---- FIREFLIES ---- */
function buildFireflies() {
  const c=document.getElementById('fireflies-wrap');c.innerHTML='';
  for(let i=0;i<18;i++){const el=document.createElement('div');el.className='firefly';
    el.style.cssText=`left:${Math.random()*100}%;bottom:${60+Math.random()*200}px;--d:${5+Math.random()*7}s;--dl:${Math.random()*6}s;--dx:${(Math.random()-.5)*80}px;--dy:${-(20+Math.random()*80)}px;`;
    c.appendChild(el);}
}

/* ---- INIT ---- */
buildStars(); buildClouds(); buildTrees(false); buildVillage(false); buildCity(false); buildFireflies(); buildNav('personal');
document.body.classList.add('mode-personal');

new MutationObserver(() => {
  const t = document.documentElement.dataset.theme;
  const dark = t.includes('dark');
  if (t.startsWith('personal')) { buildTrees(dark); buildVillage(dark); buildFireflies(); }
  else buildCity(dark);
}).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('#nav-links a');
  let current = '';
  links.forEach(l => {
    const id = l.getAttribute('href').replace('#','');
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 80) current = l.getAttribute('href');
  });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === current));
});

/* ===================== WATCH MODAL DATA & LOGIC ===================== */
const watchData = {
  titan: {
    brand: 'Titan',
    tagline: 'India\'s Finest Timepieces · Est. 1984',
    color: '#1a4a7a',
    bg: 'linear-gradient(135deg,#1a4a7a,#2e6da8)',
    emoji: '⌚',
    watches: [
      { name: 'Titan Kairos', ref: 'TIT-90142SM01', desc: 'A refined dress watch with a slim profile and exhibition caseback. My go-to for formal occasions and client meetings.', specs: ['Quartz', '40mm', 'Sapphire Crystal', 'Leather Strap', 'WR 50m'], color: '#d4af37' },
      { name: 'Titan Raga', ref: 'TIT-95193KM01', desc: 'Elegant floral motif dial, designed for versatility. Transitions effortlessly from a boardroom to a dinner table.', specs: ['Quartz', '38mm', 'Mineral Glass', 'Metal Bracelet'], color: '#c0a060' },
      { name: 'Titan Edge', ref: 'TIT-1580SM01', desc: 'The world\'s slimmest watch at 3.5mm. Barely-there elegance that fits under any cuff — a true engineering marvel.', specs: ['Solar Quartz', '39mm', '3.5mm Thin', 'WR 30m', 'Leather'], color: '#888' }
    ]
  },
  casio: {
    brand: 'Casio',
    tagline: 'Shock the World · Built for Everything',
    color: '#cc0000',
    bg: 'linear-gradient(135deg,#cc0000,#ff3030)',
    emoji: '🕐',
    watches: [
      { name: 'G-Shock GA-2100', ref: 'GA-2100-1A1ER', desc: 'The CasiOak. Octagonal bezel, carbon core guard, absolute tank. My daily driver for weekends and workouts alike.', specs: ['Tough Solar', '45.4mm', '200m WR', 'Shock Resistant', 'World Time'], color: '#111' },
      { name: 'G-Shock GW-M5610', ref: 'GW-M5610-1ER', desc: 'The original square G-Shock, perfected. Atomic timekeeping via radio sync — always accurate, always ready.', specs: ['Solar+Radio', '46.7mm', '200m WR', 'Atomic Sync', '5 Alarms'], color: '#222' },
      { name: 'Casio A168W', ref: 'A168WA-1YES', desc: 'The iconic retro digital. Stainless steel bracelet, Illuminator backlight — timeless 80s aesthetic at a steal.', specs: ['Quartz', '36mm', 'Stainless Steel', 'Electroluminescent BL'], color: '#aaa' },
      { name: 'G-Shock Mudmaster GG-B100', ref: 'GG-B100-1AER', desc: 'Built for mud, sand, and dust. Triple sensor, Bluetooth sync, GPS — the ultimate field watch for outdoor adventures.', specs: ['Solar', '55.7mm', '200m WR', 'GPS', 'Compass + Altimeter'], color: '#4a5240' }
    ]
  },
  timex: {
    brand: 'Timex',
    tagline: 'It Takes a Licking · American Heritage Since 1854',
    color: '#c8102e',
    bg: 'linear-gradient(135deg,#c8102e,#e8304e)',
    emoji: '🕰️',
    watches: [
      { name: 'Timex Weekender', ref: 'TW2P75700', desc: 'The quintessential American casual watch. NATO strap, Indiglo backlight, clean dial. Unpretentious perfection for everyday wear.', specs: ['Quartz', '38mm', 'Mineral Glass', 'NATO Strap', 'Indiglo BL'], color: '#8b6914' },
      { name: 'Timex Marlin Automatic', ref: 'TW2T22700', desc: 'A vintage reissue with a genuine automatic movement. Domed acrylic crystal, sunray dial — effortless retro charm.', specs: ['Automatic', '40mm', 'Acrylic Domed', 'Leather Strap', 'Date'], color: '#1a3a6a' },
      { name: 'Timex Expedition Scout', ref: 'TW4B06500', desc: 'Rugged outdoor companion. Lightweight, reliable, and surprisingly capable for the trails and the commute equally.', specs: ['Quartz', '40mm', 'Mineral Glass', 'WR 50m', 'Nylon Strap'], color: '#4a6030' }
    ]
  },
  fossil: {
    brand: 'Fossil',
    tagline: 'Authentic. Innovative. American Cool.',
    color: '#8b6914',
    bg: 'linear-gradient(135deg,#8b6914,#c49a28)',
    emoji: '🏆',
    watches: [
      { name: 'Fossil Neutra Chronograph', ref: 'FS5382', desc: 'Three-eye chronograph with a brushed stainless case. Clean, modern design that sits comfortably between casual and formal.', specs: ['Quartz Chrono', '44mm', 'Mineral Crystal', 'Mesh Bracelet', 'WR 50m'], color: '#888' },
      { name: 'Fossil Grant Automatic', ref: 'ME3077', desc: 'Exhibition caseback revealing a beautiful skeleton movement. Vintage-inspired design with genuine automatic heart.', specs: ['Automatic', '44mm', 'Mineral Glass', 'Leather', 'Skeleton Dial'], color: '#704214' },
      { name: 'Fossil Townsman', ref: 'ME3111', desc: 'Slim, dressy, with a multi-eye dial and woven leather strap. The Fossil that best handles a blazer and jeans alike.', specs: ['Automatic', '44mm', 'Mineral Crystal', 'Leather Strap'], color: '#2a3a5a' }
    ]
  }
};

function dialSVG(color) {
  return `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" fill="${color}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <circle cx="24" cy="24" r="19" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    ${[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>{
      const rad = a*Math.PI/180;
      const r1 = i%3===0?16:17, r2=19;
      const x1=24+r1*Math.sin(rad), y1=24-r1*Math.cos(rad);
      const x2=24+r2*Math.sin(rad), y2=24-r2*Math.cos(rad);
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,${i%3===0?'0.9':'0.4'})" stroke-width="${i%3===0?'1.5':'1'}"/>`;
    }).join('')}
    <line x1="24" y1="24" x2="24" y2="9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="24" y1="24" x2="32" y2="24" stroke="white" stroke-width="1" stroke-linecap="round"/>
    <circle cx="24" cy="24" r="2" fill="white"/>
  </svg>`;
}

function openWatchModal(brand) {
  const data = watchData[brand];
  if (!data) return;
  document.getElementById('modal-logo').innerHTML = `<span style="font-size:2rem">${data.emoji}</span>`;
  document.getElementById('modal-logo').style.background = data.bg;
  document.getElementById('modal-brand-name').textContent = data.brand;
  document.getElementById('modal-brand-tagline').textContent = data.tagline;
  document.getElementById('modal-watches').innerHTML = data.watches.map(w => `
    <div class="watch-item">
      <div class="watch-dial">${dialSVG(w.color)}</div>
      <div class="watch-info">
        <h4>${w.name}</h4>
        <span class="watch-ref">${w.ref}</span>
        <p>${w.desc}</p>
        <div class="watch-specs">${w.specs.map(s=>`<span class="watch-spec">${s}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
  document.getElementById('watch-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWatchModal(e, force) {
  if (force || (e && e.target === document.getElementById('watch-modal'))) {
    document.getElementById('watch-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeWatchModal(null, true); });
