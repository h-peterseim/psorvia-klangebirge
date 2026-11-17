/* klangebirge: <klang-gebirge>, a calm audio-reactive wireframe mountain range as web background. No dependencies.
 * SPDX-License-Identifier: MIT
 * Built for psorvia.io. (https://psorvia.io)
 */
(function () {
'use strict';
const ROWS = 64, COLS = 192, ROW_STEP = 2, COL_STEP = 3, HW = 15, DZ = 0.5, Z0 = 9;      // grid: ROW_STEP/COL_STEP = every n-th line is drawn; rows deep, columns wide, half width, row spacing, first row
const CAM = { y: 11, pitch: 0.36, fov: 0.8 };

const VS = `attribute vec2 p; attribute float y; uniform mat4 uVP; uniform float uZ0, uDZ, uNear, uFar, uHW; uniform float uOff[64], uUp[64]; varying float vD; varying float vH;
void main(){ float z=uZ0+p.y*uDZ; vD=(z-uNear)/uFar; vH=y; int i=int(p.y+.5); gl_Position=uVP*vec4(p.x*uHW+uOff[i],y+uUp[i],z,1.); }`;

// Wire lines only: depth shows as color and transparency toward the horizon (haze as fade-out, no lighting).
const FS = `precision mediump float;
uniform vec3 uA, uB, uC; uniform float uMax, uMar; uniform vec4 uR[24]; uniform vec2 uRes;
varying float vD; varying float vH;
void main(){
  float d=clamp(vD,0.,1.), t=smoothstep(.05,.8,clamp(vH/5.,0.,1.));
  float fog=1.-exp(-2.2*d*d-.35*d);
  vec3 col=mix(mix(uA,uB,t),uC,clamp(fog*.9,0.,1.));
  float a=uMax*(.62+.38*t)*(1.-smoothstep(.45,1.,fog))*smoothstep(0.,.05,d+.012);
  vec2 pp=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y); float keep=1.;
  for(int i=0;i<24;i++){ vec4 r=uR[i]; vec2 q=max(max(r.xy-pp,pp-r.zw),vec2(0.)); keep=min(keep,.3+.7*smoothstep(0.,uMar,length(q))); }
  a*=keep;
  gl_FragColor=vec4(col*a,a);
}`;

const CSS = ':host{position:fixed;inset:0;z-index:-1;pointer-events:none;display:block}canvas{width:100%;height:100%;display:block}';
const num = (v, d, lo, hi) => { const n = parseFloat(v); return isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Shared audio tap for all instances: one context, one analyser.
const hub = {
  ctx: null, an: null, bins: null, playing: new Set(), srcs: new WeakMap(),
  ensure() {
    if (this.an) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try { this.ctx = new AC(); this.an = this.ctx.createAnalyser(); this.an.fftSize = 2048; this.an.smoothingTimeConstant = 0.3; this.bins = new Uint8Array(this.an.frequencyBinCount); } catch (e) { return false; }
    return true;
  },
  sameOrigin(el) {
    try { const s = el.currentSrc || el.src; return !s || /^(blob|data):/.test(s) || new URL(s, location.href).origin === location.origin; } catch (e) { return false; }
  },
  attach(el) {
    if (!this.ensure()) return false;
    if (this.srcs.has(el)) return true;
    if (!this.sameOrigin(el)) return false;       // cross-origin media would go silent: leave it alone
    try { const n = this.ctx.createMediaElementSource(el); n.connect(this.ctx.destination); n.connect(this.an); this.srcs.set(el, n); } catch (e) { return false; }
    return true;
  },
  set(el, on) {
    if (on) { if (this.attach(el)) { if (this.ctx.state === 'suspended') this.ctx.resume(); this.playing.add(el); } } else this.playing.delete(el);
  },
  active() { return this.playing.size > 0; },
  read() {
    if (!this.playing.size || !this.an) return null;
    this.an.getByteFrequencyData(this.bins);
    return this.bins;
  }
};

function rgb(root, v) {
  const s = document.createElement('span'); s.style.color = v; root.appendChild(s);
  const m = getComputedStyle(s).color.match(/[\d.]+/g) || [0, 0, 0]; s.remove();
  return [m[0] / 255, m[1] / 255, m[2] / 255];
}

// Course of the valley: mostly straight, now and then a gentle bend (world x offset as a function of depth).
function bend(w, k = 1, fq = 1) {
  w *= fq;
  const g = Math.sin(0.011 * w + 1), on = Math.max(0, Math.min(1, (g - 0.2) / 0.5));
  return k * 7.5 * Math.sin(0.045 * w) * on * on * (3 - 2 * on);
}

// Height of the valley floor: mostly level, now and then a gentle climb or descent.
function rise(w, k = 1, fq = 1) {
  w *= fq;
  const g = Math.sin(0.008 * w + 2.4), on = Math.max(0, Math.min(1, (g - 0.15) / 0.5));
  return k * 2.6 * Math.sin(0.06 * w + 0.7) * on * on * (3 - 2 * on);
}

// Calm base landscape: a valley floor in the middle, high mountain walls to both sides (flying through a valley).
function base(x, zw) {
  const u = Math.min(1.7, Math.abs(x) / HW), ch = (a) => 1 - Math.abs(Math.sin(a));
  const c1 = Math.pow(ch(0.23 * zw + 0.7 * Math.sin(0.15 * x + 0.5) + 0.35 * Math.sin(0.41 * x)), 1.7);
  const c2 = Math.pow(ch(0.43 * zw + 0.9 * Math.sin(0.21 * x + 2) + 1.1), 2.2);
  const dt = ch(0.55 * x + 0.5 * zw + 1.2 * Math.sin(0.31 * zw)) * ch(0.4 * zw - 0.3 * x + 0.5 * Math.sin(0.4 * x));
  let h = 0.7 + 2.5 * c1 * (0.55 + 0.45 * Math.sin(0.19 * x + 1.1 + 0.5 * Math.sin(0.12 * zw))) + 1.2 * c2 * (0.5 + 0.5 * Math.sin(0.27 * x - 0.8));
  const wall = Math.min(1, Math.max(0, (u - 0.3) / 0.9)), ws = wall * wall * (3 - 2 * wall);   // valley: steep walls to both sides
  h = h * (0.55 + 0.45 * ws) + 2.0 * u * u * (0.5 + 0.7 * c1) + 9.0 * ws * (0.75 + 0.25 * c1) + 0.55 * u * dt * (0.4 + u);
  return Math.max(0.12, h);
}

class KlangGebirge extends HTMLElement {
  static get observedAttributes() { return ['color-a', 'color-b', 'color-c', 'color-a-light', 'color-b-light', 'color-c-light', 'opacity', 'reactivity', 'horizon', 'audio', 'fade-text', 'max-fps', 'motion', 'curves', 'hills', 'course']; }

  connectedCallback() {
    if (this.cv) return;
    const root = this.attachShadow({ mode: 'open' });
    const st = document.createElement('style'); st.textContent = CSS; root.appendChild(st);
    this.cv = document.createElement('canvas'); this.setAttribute('aria-hidden', 'true'); root.appendChild(this.cv);
    this.root = root;
    this.gl = this.cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power' });
    if (!this.gl || !this.build()) { this.gl = null; this.fallback(); return; }
    this.mobile = matchMedia('(pointer: coarse), (max-width: 700px)').matches;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
    this.scheme = matchMedia('(prefers-color-scheme: dark)');
    this.t = 0; this.zs = 0; this.kick = 0; this.hatv = 0; this.settled = false; this.raf = 0; this.last = 0; this.sim = false; this.ext = null; this.loud = 0;
    this.spec = new Float32Array(COLS); this.rowsData = []; this.rects = new Float32Array(96).fill(-9999);
    this.hw = HW; this.seed();
    this.size(); this.theme();
    this.onResize = () => { this.size(); this.frame(0, true); this.queue(); };
    this.onTheme = () => { this.theme(); this.frame(0, !this.raf); };
    this.vis = () => this.sync();
    this.onMedia = (e) => { if (this.mediaOk(e.target)) { hub.set(e.target, e.type === 'play'); this.sync(); } };
    this.measure = () => { this.pend = 0; this.textRects(); if (!this.raf) this.frame(0, true); };
    this.queue = () => { if (!this.pend) this.pend = requestAnimationFrame(this.measure); };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.queue, { passive: true });
    document.addEventListener('visibilitychange', this.vis);
    ['play', 'pause', 'ended'].forEach((ev) => document.addEventListener(ev, this.onMedia, true));
    this.scheme.addEventListener('change', this.onTheme);
    this.reduced.addEventListener('change', this.vis);
    this.mo = new MutationObserver(this.onTheme); this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    document.querySelectorAll('audio,video').forEach((el) => { if (!el.paused && this.mediaOk(el)) hub.set(el, true); });
    if (document.fonts) document.fonts.ready.then(this.queue);
    setTimeout(this.queue, 600);
    this.inView = true;
    if (window.IntersectionObserver) { this.io = new IntersectionObserver((e) => { this.inView = e[e.length - 1].isIntersecting; this.sync(); }); this.io.observe(this); }
    this.textRects(); this.sync();
  }

  disconnectedCallback() {
    if (!this.gl) return;
    cancelAnimationFrame(this.raf); this.raf = 0;
    window.removeEventListener('resize', this.onResize); window.removeEventListener('scroll', this.queue);
    document.removeEventListener('visibilitychange', this.vis);
    ['play', 'pause', 'ended'].forEach((ev) => document.removeEventListener(ev, this.onMedia, true));
    this.scheme.removeEventListener('change', this.onTheme); this.reduced.removeEventListener('change', this.vis);
    this.mo.disconnect(); if (this.io) this.io.disconnect();
    this.cv = null; this.root = null; this.gl = null;     // re-attaching rebuilds
    this.shadowRoot && (this.shadowRoot.innerHTML = '');
  }

  attributeChangedCallback() { if (this.gl) { this.theme(); this.size(); this.queue(); this.sync(); this.frame(0, !this.raf); } }

  // Public: feed your own Web Audio AnalyserNode (oscillator, microphone); null releases it.
  useAnalyser(node) { this.ext = node || null; this.extBins = node ? new Uint8Array(node.frequencyBinCount) : null; this.sync(); }
  // Public: silent test signal (simulated beat and bands).
  simulate(on = true) { this.sim = !!on; this.sync(); }

  mediaOk(el) {
    if (!(el instanceof HTMLMediaElement)) return false;
    const sel = this.getAttribute('audio');
    if (!sel) return true;
    try { return el.matches(sel); } catch (e) { return false; }
  }

  program(gl, vsrc, fsrc) {
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
    const vs = sh(gl.VERTEX_SHADER, vsrc), fs = sh(gl.FRAGMENT_SHADER, fsrc);
    if (!vs || !fs) return null;
    const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.bindAttribLocation(pr, 0, 'p'); gl.bindAttribLocation(pr, 1, 'y'); gl.linkProgram(pr);
    return gl.getProgramParameter(pr, gl.LINK_STATUS) ? pr : null;
  }

  build() {
    const gl = this.gl;
    this.pm = this.program(gl, VS, FS);
    if (!this.pm) return false;
    const um = {}; ['uVP', 'uA', 'uB', 'uC', 'uMax', 'uFar', 'uNear', 'uMar', 'uRes', 'uZ0', 'uDZ', 'uHW'].forEach((k) => { um[k] = gl.getUniformLocation(this.pm, k); }); um.uR = gl.getUniformLocation(this.pm, 'uR[0]'); um.uOff = gl.getUniformLocation(this.pm, 'uOff[0]'); um.uUp = gl.getUniformLocation(this.pm, 'uUp[0]'); this.off = new Float32Array(ROWS); this.up = new Float32Array(ROWS);
    this.um = um;
    // static: (x, row index) per vertex; dynamic: only the height
    const st = new Float32Array(ROWS * COLS * 2);
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { const o = (r * COLS + c) * 2; st[o] = c / (COLS - 1) * 2 - 1; st[o + 1] = r; }
    this.sbo = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.sbo); gl.bufferData(gl.ARRAY_BUFFER, st, gl.STATIC_DRAW);
    this.hh = new Float32Array(ROWS * COLS);
    this.hbo = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, this.hbo); gl.bufferData(gl.ARRAY_BUFFER, this.hh.byteLength, gl.DYNAMIC_DRAW);
    const idx = []; // grid lines in both directions: across (every ROW_STEP-th row) and along the depth (every COL_STEP-th column)
    for (let r = 0; r < ROWS; r += ROW_STEP) for (let c = 0; c < COLS - 1; c++) idx.push(r * COLS + c, r * COLS + c + 1);
    for (let c = 0; c < COLS; c += COL_STEP) for (let r = 0; r < ROWS - 1; r++) idx.push(r * COLS + c, (r + 1) * COLS + c);
    this.ibo = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW); this.nidx = idx.length;
    return true;
  }

  // Without WebGL: calm gradient from the first color
  fallback() {
    const c = rgb(this.root, this.getAttribute('color-a') || '#4a7a9c').map((v) => Math.round(v * 255));
    this.cv.style.background = 'linear-gradient(180deg,transparent 40%,rgba(' + c.join(',') + ',.14))';
  }

  size() {
    const dpr = devicePixelRatio || 1, sc = this.mobile ? Math.min(dpr * 0.75, 1.5) : Math.min(dpr, 1.5);
    this.cv.width = Math.max(2, Math.round(innerWidth * sc)); this.cv.height = Math.max(2, Math.round(innerHeight * sc));
    this.gl.viewport(0, 0, this.cv.width, this.cv.height);
    // grid half width from the camera frustum at the far end, so every aspect ratio fills all corners
    const asp = this.cv.width / this.cv.height, f = 1 / Math.tan(CAM.fov / 2) * Math.min(1, Math.max(0.5, asp * 1.1)), hw = Math.min(70, Math.max(HW, (Z0 + ROWS * DZ) * 1.15 * asp / f * 1.2));
    if (hw !== this.hw) { this.hw = hw; if (this.rowsData && this.rowsData.length) for (const r of this.rowsData) for (let j = 0; j < COLS; j++) r.b[j] = base((j / (COLS - 1) * 2 - 1) * hw, r.w); }
  }

  theme() {
    const th = document.documentElement.getAttribute('data-theme');
    const dark = th ? th === 'dark' : this.scheme.matches;
    const g = (n, d) => this.getAttribute(n) || d;
    if (dark) { this.A = rgb(this.root, g('color-a', '#3b5878')); this.B = rgb(this.root, g('color-b', '#f0cfa0')); this.C = rgb(this.root, g('color-c', '#5f86a6')); this.base = 0.92; }
    else { this.A = rgb(this.root, g('color-a-light', '#587a96')); this.B = rgb(this.root, g('color-b-light', '#f4dcb8')); this.C = rgb(this.root, g('color-c-light', '#dbe7ef')); this.base = 0.9; }
    this.max = this.base * num(this.getAttribute('opacity'), 1, 0, 1) * (this.mobile ? 0.9 : 1);
  }

  textRects() {
    this.rects.fill(-9999);
    const fade = this.getAttribute('fade-text');
    if (fade === 'off' || fade === 'false') return;
    const sc = this.cv.width / innerWidth;
    let els = [];
    try { els = document.querySelectorAll(fade || 'h1,h2,h3,p,li'); } catch (e) { return; }
    let n = 0;
    for (const e of els) {
      if (n >= 24) break;
      const r = e.getBoundingClientRect();
      if (r.width < 8 || r.height < 8 || r.bottom < 0 || r.top > innerHeight) continue;
      this.rects.set([r.left * sc, r.top * sc, r.right * sc, r.bottom * sc], n * 4); n++;
    }
  }

  isActive() { return this.sim || hub.active() || !!this.ext; }

  sync() {
    if (!this.gl) return;
    const go = !document.hidden && this.inView !== false && !this.reduced.matches && this.getAttribute('motion') !== 'off';
    if (go && this.isActive()) this.settled = false;
    if (go && !this.raf && !this.settled) { this.last = performance.now(); this.raf = requestAnimationFrame((n) => this.loop(n)); }
    else if (!go) { cancelAnimationFrame(this.raf); this.raf = 0; this.frame(0, true); }
  }

  loop(now) {
    this.raf = requestAnimationFrame((n) => this.loop(n));
    const cap = num(this.getAttribute('max-fps'), 30, 1, 120);
    if (this.settled) { cancelAnimationFrame(this.raf); this.raf = 0; return; }       // standstill: stop drawing altogether
    const dt = (now - this.last) / 1000;
    if (cap && dt < 1 / cap - 0.004) return;       // default 30 fps; motion stays continuous because every frame advances by the real time step
    this.last = now; this.frame(Math.min(dt, 0.1), false);
  }

  // Raw spectrum 0..1 over 'n' bins (analyser bytes or simulation).
  bins() {
    if (this.sim) {
      const n = 512, o = this.simBins || (this.simBins = new Uint8Array(n)), t = this.t, b = Math.max(0, Math.sin(t * 2 * Math.PI * 1.8)), hat = Math.max(0, Math.sin(t * 2 * Math.PI * 3.6 + 1)) > 0.92 ? 1 : 0.3;
      for (let i = 0; i < n; i++) { const f = i / n; o[i] = 255 * Math.max(0, (0.75 * b * b * b + 0.3) * Math.exp(-f * 14) + 0.35 * Math.exp(-pow2((f - 0.12) / 0.06)) * (0.5 + 0.5 * Math.sin(t * 0.9)) + 0.25 * hat * f * (0.5 + 0.5 * Math.sin(i * 7.3 + t * 3)) * (1 - f * 0.4)); }
      return o;
    }
    if (this.ext) { this.ext.getByteFrequencyData(this.extBins); return this.extBins; }
    return hub.read();
  }

  // Column value (0..1) from the bins: log-spaced over the width (left = bass, right = treble, not mirrored).
  // Per column adaptive range (slow floor and peak), fast attack, slower release (shorter for treble).
  columns(b, out, dt) {
    const nb = b ? b.length : 0;
    const raw = this.raw || (this.raw = new Float32Array(COLS)), pk = this.pk || (this.pk = new Float32Array(COLS).fill(0.3)), fl = this.fl || (this.fl = new Float32Array(COLS));
    const lo = 2, hi = Math.max(lo + 8, nb * 0.62), ratio = Math.log(hi / lo);
    let bass = 0, nbs = 0, hat = 0, nh = 0;
    for (let j = 0; j < COLS; j++) {
      let v = 0;
      if (nb) {
        const f0 = lo * Math.exp(ratio * j / COLS), f1 = lo * Math.exp(ratio * (j + 1) / COLS), k0 = Math.floor(f0), k1 = Math.max(k0, Math.min(nb - 1, Math.ceil(f1) - 1));
        let m = 0, c = 0; for (let k = k0; k <= k1; k++) { const x = b[k] / 255; m = Math.max(m, x); c += x; }
        v = 0.6 * m + 0.4 * c / (k1 - k0 + 1);
        v = Math.max(0, v - 0.04) / 0.96;
      }
      fl[j] = v < fl[j] ? v : fl[j] + (v - fl[j]) * Math.min(1, dt * 0.15);      // floor: drops at once, rises slowly
      pk[j] = v > pk[j] ? v : pk[j] + (v - pk[j]) * Math.min(1, dt * 0.35);      // peak: rises at once, decays in seconds
      const rg = Math.max(0.12, pk[j] - fl[j]);
      raw[j] = Math.pow(Math.min(1, Math.max(0, (v - fl[j]) / rg)), 1.35) * sstep(0.05, 0.12, pk[j]);   // gate: analyser noise floor stays silent
      if (j < COLS * 0.12) { bass += raw[j]; nbs++; } else if (j > COLS * 0.7) { hat += raw[j]; nh++; }
    }
    // beat: onsets in bass and treble (rise above the slow average)
    bass /= Math.max(1, nbs); hat /= Math.max(1, nh);
    this.bassAvg = (this.bassAvg || 0) + (bass - (this.bassAvg || 0)) * Math.min(1, dt * 3); this.hatAvg = (this.hatAvg || 0) + (hat - (this.hatAvg || 0)) * Math.min(1, dt * 3);
    const kk = Math.max(0, bass - this.bassAvg - 0.04) * 2.2, hh = Math.max(0, hat - this.hatAvg - 0.03) * 2.2;
    this.kick = Math.max((this.kick || 0) * Math.exp(-dt / 0.16), Math.min(1, kk)); this.hatv = Math.max((this.hatv || 0) * Math.exp(-dt / 0.07), Math.min(1, hh));
    for (let j = 0; j < COLS; j++) {
      const u = j / (COLS - 1), r = 1 + Math.round(2 * (1 - u));
      let a = 0, c = 0;
      for (let k = Math.max(0, j - r); k <= Math.min(COLS - 1, j + r); k++) { const w = 1 - Math.abs(k - j) / (r + 1); a += raw[k] * w; c += w; }
      const tgt = a / c, o = out[j], k = 1 - Math.exp(-dt / (tgt > o ? 0.03 : 0.3 - 0.22 * u));
      out[j] = tgt < 0.004 && o < 0.006 ? 0 : o + (tgt - o) * k;
    }
  }

  newRow(z, w, s) {
    const b = new Float32Array(COLS);
    for (let j = 0; j < COLS; j++) b[j] = base((j / (COLS - 1) * 2 - 1) * this.hw, w);
    return { z, w, s, b };
  }

  seed() {
    this.rowsData.length = 0;
    for (let r = 0; r < ROWS; r++) this.rowsData.push(this.newRow(Z0 + r * DZ, -r * DZ, new Float32Array(COLS)));
  }

  frame(dt, still) {
    if (!this.gl) return;
    const react = num(this.getAttribute('reactivity'), 1, 0, 3);
    let loud = 0;
    if (!still) {
      const b = this.bins();
      this.columns(b, this.spec, dt);
      let s = 0; for (let j = 0; j < COLS; j += 3) s += this.spec[j]; loud = Math.min(1, s / (COLS / 3) * 3);
      this.loud += (loud - this.loud) * Math.min(1, dt * 2);
      this.t += dt;
      const speed = 2.6 * this.loud * Math.min(1, react), adv = speed * dt, rows = this.rowsData;
      this.zs += adv;
      for (const r of rows) {      // flying forward: the valley comes towards the viewer; near rows follow the live spectrum, fading in from the haze
        r.z -= adv; const g = 1 - Math.min(1, Math.max(0, (r.z - Z0 - 2) / 6)), gw = g * g * (3 - 2 * g);
        if (gw > 0) { const q = r.s; for (let j = 0; j < COLS; j++) q[j] = Math.max(q[j] * Math.exp(-dt / 0.35), this.spec[j] * gw); }
      }
      while (rows[0].z < Z0 - DZ) rows.shift();
      while (rows.length < ROWS) { const l = rows[rows.length - 1]; rows.push(this.newRow(l.z + DZ, l.w - DZ, new Float32Array(COLS))); }
      if (!this.isActive()) { const k = Math.exp(-dt / 0.45); for (const r of rows) { const q = r.s; for (let j = 0; j < COLS; j++) q[j] *= k; } }      // music has stopped: the mountains die away
      let mx = this.kick + this.hatv + this.loud; for (let j = 0; j < COLS; j += 2) mx += this.spec[j];
      this.settled = !this.isActive() && mx < 0.01;
      if (this.settled) { for (const r of rows) r.s.fill(0); this.spec.fill(0); this.kick = this.hatv = this.loud = 0; }
    }
    this.draw();
  }

  draw() {
    const gl = this.gl, rows = this.rowsData;
    const R = Math.min(ROWS, rows.length);
    // heights: base landscape (function of world depth) plus the spectrum frozen into each row
    for (let r = 0; r < R; r++) {
      const row = rows[r], p1 = rows[Math.max(0, r - 1)].s, p2 = rows[Math.max(0, r - 2)].s, n1 = rows[Math.min(R - 1, r + 1)].s, n2 = rows[Math.min(R - 1, r + 2)].s, dd = (row.z - Z0) / (ROWS * DZ), fade = 1 - sstep(0.55, 1, dd), ramp = 0.4 + 0.6 * sstep(0, 0.3, dd), fr = Math.max(0, 1 - dd / 0.3), kick = (this.kick || 0) * fr, hat = (this.hatv || 0) * fr;
      for (let j = 0; j < COLS; j++) {
        const x = j / (COLS - 1), u = Math.abs(x * 2 - 1);
        let sv = (p2[j] + 4 * p1[j] + 6 * row.s[j] + 4 * n1[j] + n2[j]) / 16;
        if (hat) sv *= 1 + 0.9 * hat * sstep(0.35, 0.8, x);                  // hi-hats make the peaks twitch
        const lift = kick ? 2.2 * kick * Math.exp(-((x - 0.4) / 0.4) * ((x - 0.4) / 0.4)) : 0;   // kick lifts the front massifs
        this.hh[r * COLS + j] = (row.b[j] * (1 - 0.35 * Math.min(1, sv * 1.5)) + sv * fade * (4.6 - 1.3 * u) + lift) * ramp;
      }
    }
    const w = this.cv.width, h = this.cv.height;
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.disable(gl.DEPTH_TEST);
    gl.useProgram(this.pm);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.sbo); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 8, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.hbo); gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.hh); gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 4, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
    const u = this.um, asp = w / h, f = 1 / Math.tan(CAM.fov / 2) * Math.min(1, Math.max(0.5, asp * 1.1)), near = 0.3, far = 80, c = Math.cos(CAM.pitch), s = Math.sin(CAM.pitch);
    // view: camera at (0,CAM.y,0) pitched down by CAM.pitch; horizon shifts with 'horizon'
    const k = (0.5 - num(this.getAttribute('horizon'), 0.5, 0.2, 0.9)) * 0.9;
    const P = [f / asp, 0, 0, 0, 0, f, 0, 0, 0, -k, -(far + near) / (far - near), -1, 0, 0, -2 * far * near / (far - near), 0];
    const Vm = [1, 0, 0, 0, 0, c, s, 0, 0, s, -c, 0, 0, -c * CAM.y, -s * CAM.y, 1];
    const mul = (A, B) => { const o = new Float32Array(16); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let t = 0; for (let q = 0; q < 4; q++) t += A[q * 4 + j] * B[i * 4 + q]; o[i * 4 + j] = t; } return o; };
    const VP = mul(P, Vm);
    gl.uniformMatrix4fv(u.uVP, false, VP);
    { const rows = this.rowsData, wc = rows[0].w + rows[0].z - Z0, kc = num(this.getAttribute('curves'), 1, 0, 2), kh = num(this.getAttribute('hills'), 1, 0, 2), fq = num(this.getAttribute('course'), 1, 0.25, 3), c0 = bend(wc, kc, fq), h0 = rise(wc, kh, fq); for (let r = 0; r < ROWS; r++) { const ok = r < rows.length; this.off[r] = ok ? bend(rows[r].w, kc, fq) - c0 : 0; this.up[r] = ok ? rise(rows[r].w, kh, fq) - h0 : 0; } gl.uniform1fv(u.uOff, this.off); gl.uniform1fv(u.uUp, this.up); }
    gl.uniform3fv(u.uA, this.A); gl.uniform3fv(u.uB, this.B); gl.uniform3fv(u.uC, this.C); gl.uniform1f(u.uMax, this.max); gl.uniform1f(u.uZ0, rows[0].z); gl.uniform1f(u.uDZ, DZ); gl.uniform1f(u.uHW, this.hw); gl.uniform1f(u.uFar, ROWS * DZ); gl.uniform1f(u.uNear, Z0);
    gl.uniform1f(u.uMar, 60 * this.cv.width / innerWidth); gl.uniform2f(u.uRes, w, h); gl.uniform4fv(u.uR, this.rects);
    gl.drawElements(gl.LINES, this.nidx, gl.UNSIGNED_SHORT, 0);
  }

  // Single frame with a fixed time step (for tests)
  step(dt) { cancelAnimationFrame(this.raf); this.raf = 0; this.frame(dt, false); }
}
function pow2(x) { return x * x; }

if (!customElements.get('klang-gebirge')) customElements.define('klang-gebirge', KlangGebirge);
})();
