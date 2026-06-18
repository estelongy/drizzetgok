// Botoksun sinir-kas iletimini nasıl gevşettiğini gösteren animasyonlu karşılaştırma diyagramı.
// Sol: normal kasılma. Sağ: botoks blokajı sonrası gevşeme.

const BotoxMechanism = () => (
  <svg
    viewBox="0 0 760 460"
    className="w-full h-auto"
    role="img"
    aria-labelledby="botox-mech-title botox-mech-desc"
    fontFamily="system-ui, -apple-system, sans-serif"
  >
    <title id="botox-mech-title">Botoks nasıl çalışır — sinir-kas iletimi karşılaştırması</title>
    <desc id="botox-mech-desc">
      Solda normal kas kasılması, sağda botoks ile bloke edilmiş sinir ucu ve gevşemiş kas.
    </desc>

    <style>{`
      .bm-lbl { font-size: 13px; fill: #475569; }
      .bm-ttl { font-size: 15px; font-weight: 700; }
      .bm-small { font-size: 11px; fill: #64748b; }
      .bm-ach { animation: bm-travel 2.6s ease-in infinite; }
      @keyframes bm-travel {
        0% { transform: translate(0,0); opacity: 0; }
        15% { opacity: 1; }
        70% { transform: translate(120px, 70px); opacity: 1; }
        85% { transform: translate(120px, 70px); opacity: 0; }
        100% { opacity: 0; }
      }
      .bm-blocked { animation: bm-bounce 2.6s ease-in-out infinite; }
      @keyframes bm-bounce {
        0%,100% { transform: translate(0,0); }
        50% { transform: translate(40px, 24px); }
      }
      .bm-muscleL { animation: bm-contract 2.6s ease-in-out infinite; transform-origin: 190px 380px; }
      @keyframes bm-contract { 0%,40%{transform:scaleX(1)} 70%{transform:scaleX(0.78)} 100%{transform:scaleX(1)} }
      @media (prefers-reduced-motion: reduce) {
        .bm-ach, .bm-blocked, .bm-muscleL { animation: none; }
      }
    `}</style>

    <line x1="380" y1="40" x2="380" y2="420" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 6" />

    {/* LEFT: NORMAL */}
    <text x="40" y="32" className="bm-ttl" fill="#0891b2">Normal kas — kasılır</text>
    <path d="M40 70 Q120 70 150 120" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
    <circle cx="150" cy="125" r="26" fill="#cffafe" stroke="#0891b2" strokeWidth="2.5" />
    <text x="150" y="105" className="bm-small" textAnchor="middle">sinir ucu</text>

    <g className="bm-ach"><circle cx="160" cy="140" r="5" fill="#0891b2" /></g>
    <g className="bm-ach" style={{ animationDelay: '.5s' }}><circle cx="150" cy="148" r="5" fill="#0891b2" /></g>
    <g className="bm-ach" style={{ animationDelay: '1s' }}><circle cx="168" cy="132" r="5" fill="#0891b2" /></g>

    <text x="250" y="200" className="bm-small" textAnchor="middle">asetilkolin</text>
    <text x="250" y="214" className="bm-small" textAnchor="middle">sinyali</text>

    <g className="bm-muscleL">
      <rect x="120" y="350" width="140" height="60" rx="14" fill="#fda4af" stroke="#e11d48" strokeWidth="2.5" />
    </g>
    <text x="190" y="385" className="bm-lbl" textAnchor="middle" fontWeight="600" fill="#9f1239">KAS</text>
    <text x="190" y="438" className="bm-small" textAnchor="middle">→ kırışıklık oluşur</text>

    {/* RIGHT: BOTOX */}
    <text x="430" y="32" className="bm-ttl" fill="#0891b2">Botoks sonrası — gevşer</text>
    <path d="M420 70 Q500 70 530 120" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
    <circle cx="530" cy="125" r="26" fill="#cffafe" stroke="#0891b2" strokeWidth="2.5" />

    <g className="bm-blocked"><circle cx="540" cy="140" r="5" fill="#0891b2" /></g>
    <g className="bm-blocked" style={{ animationDelay: '.4s' }}><circle cx="528" cy="148" r="5" fill="#0891b2" /></g>

    <rect x="556" y="150" width="34" height="34" rx="8" fill="#1e293b" transform="rotate(15 573 167)" />
    <text x="573" y="205" className="bm-small" textAnchor="middle" fill="#1e293b" fontWeight="700">Botoks</text>
    <text x="630" y="172" className="bm-small">salınımı</text>
    <text x="630" y="186" className="bm-small">engeller ✕</text>

    <rect x="500" y="350" width="140" height="60" rx="14" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2.5" />
    <text x="570" y="385" className="bm-lbl" textAnchor="middle" fontWeight="600" fill="#15803d">KAS</text>
    <text x="570" y="438" className="bm-small" textAnchor="middle">→ cilt pürüzsüz kalır</text>
  </svg>
);

export default BotoxMechanism;
