// Botoksun en sık uygulandığı üç bölgeyi gösteren basit yüz haritası.
// Stilize, anonim yüz silüeti + işaretli bölgeler.

const BotoxFaceMap = () => (
  <svg
    viewBox="0 0 520 460"
    className="w-full h-auto max-w-md mx-auto"
    role="img"
    aria-labelledby="botox-map-title botox-map-desc"
    fontFamily="system-ui, -apple-system, sans-serif"
  >
    <title id="botox-map-title">Botoks uygulama bölgeleri</title>
    <desc id="botox-map-desc">
      Alın çizgileri, kaş arası ve göz kenarı (kaz ayağı) bölgelerini gösteren stilize yüz haritası.
    </desc>

    <style>{`
      .fm-pulse { animation: fm-pulse 2.4s ease-in-out infinite; transform-origin: center; }
      @keyframes fm-pulse { 0%,100%{opacity:.35} 50%{opacity:.85} }
      .fm-lbl { font-size: 14px; font-weight: 600; fill: #0e7490; }
      .fm-sub { font-size: 11px; fill: #64748b; }
      @media (prefers-reduced-motion: reduce){ .fm-pulse{animation:none} }
    `}</style>

    {/* Yüz silüeti */}
    <path
      d="M260 60 C330 60 365 120 365 200 C365 290 320 380 260 405 C200 380 155 290 155 200 C155 120 190 60 260 60 Z"
      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2.5"
    />
    {/* Kaşlar */}
    <path d="M200 185 Q225 175 248 184" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
    <path d="M272 184 Q295 175 320 185" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
    {/* Gözler */}
    <ellipse cx="222" cy="205" rx="16" ry="9" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
    <ellipse cx="298" cy="205" rx="16" ry="9" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
    <circle cx="222" cy="205" r="4" fill="#475569" />
    <circle cx="298" cy="205" r="4" fill="#475569" />
    {/* Burun + ağız */}
    <path d="M260 215 L252 255 Q260 262 268 255" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M232 295 Q260 312 288 295" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

    {/* 1 — Alın */}
    <rect className="fm-pulse" x="200" y="130" width="120" height="26" rx="13" fill="#22d3ee" />
    <circle cx="180" cy="143" r="13" fill="#0891b2" />
    <text x="180" y="148" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">1</text>
    <text x="395" y="138" className="fm-lbl">Alın çizgileri</text>
    <text x="395" y="154" className="fm-sub">yatay kırışıklıklar</text>

    {/* 2 — Kaş arası */}
    <rect className="fm-pulse" x="248" y="168" width="24" height="30" rx="8" fill="#22d3ee" style={{ animationDelay: '.4s' }} />
    <circle cx="120" cy="200" r="13" fill="#0891b2" />
    <text x="120" y="205" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">2</text>
    <text x="20" y="196" className="fm-lbl">Kaş arası</text>
    <text x="20" y="212" className="fm-sub">dikey öfke çizgisi</text>

    {/* 3 — Kaz ayağı */}
    <g className="fm-pulse" style={{ animationDelay: '.8s' }}>
      <path d="M330 200 l16 -6 M332 208 l18 0 M330 216 l16 6" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" />
      <path d="M190 200 l-16 -6 M188 208 l-18 0 M190 216 l-16 6" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" />
    </g>
    <circle cx="400" cy="230" r="13" fill="#0891b2" />
    <text x="400" y="235" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">3</text>
    <text x="395" y="262" className="fm-lbl">Kaz ayağı</text>
    <text x="395" y="278" className="fm-sub">göz kenarı çizgileri</text>
  </svg>
);

export default BotoxFaceMap;
