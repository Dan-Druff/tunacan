// import { Layout } from "../components/Layout.tsx";


export function HomePage() {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>TUNA CAN</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
                {/* <link rel="stylesheet" href="/static/styles/globals.css" /> */}
                <link rel="icon" href="/static/images/favicon.ico" />
                <link rel="stylesheet" href="/static/styles/home.css" />

            </head>
            <body>
                <div class="cursor" id="cursor"></div>
                <div class="cursor-ring" id="cursorRing"></div>
                <nav>
                    <a href="/" class="nav-logo">Tuna Can Comedy</a>
                    <ul class="nav-links">
                        <li><a href="#shows">Shows</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#performers">Performers</a></li>
                        <li><a href="#tickets">Tickets</a></li>
                    </ul>
                </nav>
                <section class="hero">
                    <div class="hero-left">
                        <p class="hero-tag">Live Comedy Production · Est. 2026</p>
                        <h1 class="hero-title">
                            Tuna <span>Can</span> Comedy
                        </h1>
                        <p class="hero-subtitle">London's Newest Comedy Thing.</p>
                        <div class="hero-ctas">
                            <a href="#shows" class="btn-primary"><span>See Upcoming Shows</span></a>
                            <a href="/about" class="btn-secondary">Our Story</a>
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="can-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440" width="400" height="440">
                                <defs>

                                    <linearGradient id="canBody" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#7a8d9e" />
                                        <stop offset="12%" stop-color="#b8ccd8" />
                                        <stop offset="35%" stop-color="#dceaf4" />
                                        <stop offset="58%" stop-color="#c8d8e8" />
                                        <stop offset="82%" stop-color="#a8bccc" />
                                        <stop offset="100%" stop-color="#6a7d8c" />
                                    </linearGradient>

                                    <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#58686e" />
                                        <stop offset="25%" stop-color="#a8bcc8" />
                                        <stop offset="50%" stop-color="#d8eaf4" />
                                        <stop offset="75%" stop-color="#98aab8" />
                                        <stop offset="100%" stop-color="#485860" />
                                    </linearGradient>

                                    <linearGradient id="bottomGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#607080" />
                                        <stop offset="50%" stop-color="#9ab0c0" />
                                        <stop offset="100%" stop-color="#506070" />
                                    </linearGradient>

                                    <linearGradient id="labelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#1a3a5c" />
                                        <stop offset="50%" stop-color="#0d2a48" />
                                        <stop offset="100%" stop-color="#1a3a5c" />
                                    </linearGradient>

                                    <radialGradient id="tunaFill" cx="45%" cy="40%" r="60%">
                                        <stop offset="0%" stop-color="#eedda8" />
                                        <stop offset="60%" stop-color="#d0bc78" />
                                        <stop offset="100%" stop-color="#b89850" />
                                    </radialGradient>


                                    <linearGradient id="lidTopFace" x1="15%" y1="0%" x2="85%" y2="100%">
                                        <stop offset="0%" stop-color="#eef4f8" />
                                        <stop offset="25%" stop-color="#d4e2ec" />
                                        <stop offset="55%" stop-color="#b8ccd8" />
                                        <stop offset="80%" stop-color="#8fa4b2" />
                                        <stop offset="100%" stop-color="#647e8e" />
                                    </linearGradient>


                                    <linearGradient id="lidRimFront" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#b0c4d0" />
                                        <stop offset="40%" stop-color="#7a9aaa" />
                                        <stop offset="75%" stop-color="#507080" />
                                        <stop offset="100%" stop-color="#2e4858" />
                                    </linearGradient>


                                    <linearGradient id="lidUnderside" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#3c5668" />
                                        <stop offset="35%" stop-color="#5c7888" />
                                        <stop offset="65%" stop-color="#4c6878" />
                                        <stop offset="100%" stop-color="#2c4050" />
                                    </linearGradient>

                                    <linearGradient id="lidCurl" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#6a8898" />
                                        <stop offset="50%" stop-color="#405868" />
                                        <stop offset="100%" stop-color="#263848" />
                                    </linearGradient>


                                    <linearGradient id="tabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#dce8f0" />
                                        <stop offset="50%" stop-color="#a8c0ce" />
                                        <stop offset="100%" stop-color="#6888a0" />
                                    </linearGradient>

                                    <filter id="canShadow" x="-15%" y="-10%" width="135%" height="130%">
                                        <feDropShadow dx="5" dy="8" stdDeviation="9" flood-color="#00000060" />
                                    </filter>

                                    <filter id="lidShadow" x="-25%" y="-30%" width="155%" height="165%">
                                        <feDropShadow dx="-3" dy="10" stdDeviation="12" flood-color="#00000075" />
                                    </filter>

                                    <filter id="tabShadow" x="-60%" y="-60%" width="220%" height="220%">
                                        <feDropShadow dx="1" dy="2" stdDeviation="2.5" flood-color="#00000088" />
                                    </filter>

                                    <clipPath id="labelClip">
                                        <rect x="55" y="198" width="290" height="108" />
                                    </clipPath>

                                </defs>



                                <g filter="url(#lidShadow)">


                                    <path d="M 68,180 Q 200,200 332,180 Q 330,190 200,212 Q 70,192 68,180 Z"
                                        fill="url(#lidUnderside)" />
                                    <path d="M 90,187 Q 200,206 310,187" fill="none" stroke="#6a8898" stroke-width="0.8" opacity="0.5" />
                                    <path d="M 110,192 Q 200,210 290,192" fill="none" stroke="#6a8898" stroke-width="0.6" opacity="0.35" />

                                    <path d="M 62,178 Q 200,200 338,178 L 334,170 Q 200,192 66,170 Z"
                                        fill="url(#lidRimFront)" />
                                    <path d="M 68,172 Q 200,192 332,172"
                                        fill="none" stroke="#c8dce8" stroke-width="1.2" stroke-opacity="0.6" />

                                    <path d="M 62,178 Q 56,150 68,118 L 72,122 Q 62,152 68,174 Z"
                                        fill="#385060" />
                                    <path d="M 338,178 Q 344,150 332,118 L 328,122 Q 338,152 334,174 Z"
                                        fill="#2c4050" />

                                    <path d="M 68,118 Q 200,102 332,118 L 330,112 Q 200,96 70,112 Z"
                                        fill="#7898a8" />
                                    <path d="M 74,114 Q 200,100 326,114"
                                        fill="none" stroke="#a8c4d0" stroke-width="1" stroke-opacity="0.5" />

                                    <ellipse cx="200" cy="148" rx="134" ry="50" fill="url(#lidTopFace)" />

                                    <ellipse cx="200" cy="148" rx="128" ry="47"
                                        fill="none" stroke="#7898a8" stroke-width="2.5" opacity="0.65" />
                                    <ellipse cx="200" cy="148" rx="128" ry="47"
                                        fill="none" stroke="#2a3c4a" stroke-width="1" stroke-dasharray="2,0" opacity="0.25" />


                                    <ellipse cx="200" cy="148" rx="112" ry="41"
                                        fill="none" stroke="#8aacba" stroke-width="1.8" opacity="0.45" />

                                    <ellipse cx="200" cy="148" rx="90" ry="33"
                                        fill="none" stroke="#9ab8c4" stroke-width="1.2" opacity="0.38" />

                                    <ellipse cx="200" cy="148" rx="58" ry="21"
                                        fill="none" stroke="#aac4d0" stroke-width="0.9" opacity="0.32" />

                                    <ellipse cx="200" cy="148" rx="58" ry="21"
                                        fill="#96b0be" fill-opacity="0.12" />

                                    <ellipse cx="162" cy="128" rx="55" ry="17"
                                        fill="white" fill-opacity="0.28" transform="rotate(-10,162,128)" />
                                    <ellipse cx="148" cy="122" rx="25" ry="7"
                                        fill="white" fill-opacity="0.35" transform="rotate(-14,148,122)" />
                                    <ellipse cx="248" cy="158" rx="20" ry="6"
                                        fill="white" fill-opacity="0.10" transform="rotate(5,248,158)" />
                                    <path d="M 108,105 Q 200,93 292,105"
                                        fill="none" stroke="white" stroke-width="1.8" stroke-opacity="0.32"
                                        stroke-linecap="round" />


                                    <path d="M 70,176 Q 200,196 330,176"
                                        fill="none" stroke="#1a2c38" stroke-width="3.5" stroke-opacity="0.55"
                                        stroke-linecap="round" />
                                    <path d="M 72,173 Q 200,192 328,173"
                                        fill="none" stroke="#c8dce8" stroke-width="1.2" stroke-opacity="0.40"
                                        stroke-linecap="round" />
                                    <path d="M 68,178 Q 105,184 145,177 Q 172,172 200,179 Q 230,186 258,176 Q 295,168 332,178"
                                        fill="none" stroke="#4a6878" stroke-width="2.2" stroke-opacity="0.55"
                                        stroke-linecap="round" />


                                    <g filter="url(#tabShadow)" transform="rotate(-22, 200, 148)">

                                        <ellipse cx="200" cy="143" rx="7.5" ry="4.5" fill="#b0c8d8" stroke="#607888" stroke-width="1.5" />
                                        <ellipse cx="200" cy="143" rx="4.5" ry="2.8" fill="#daeef8" />
                                        <ellipse cx="200" cy="143" rx="2" ry="1.2" fill="#8aacbc" opacity="0.6" />


                                        <path d="M 196,140 L 194,108 L 206,108 L 204,140 Z"
                                            fill="url(#tabGrad)" stroke="#507080" stroke-width="1" rx="2" />

                                        <line x1="199" y1="138" x2="198" y2="110" stroke="white" stroke-width="1" stroke-opacity="0.35" />


                                        <ellipse cx="200" cy="96" rx="17" ry="11"
                                            fill="none" stroke="url(#tabGrad)" stroke-width="6.5" />

                                        <ellipse cx="200" cy="96" rx="20" ry="14"
                                            fill="none" stroke="#405e6e" stroke-width="1" />

                                        <ellipse cx="200" cy="96" rx="13" ry="7.5"
                                            fill="none" stroke="#1e3040" stroke-width="0.8" opacity="0.5" />

                                        <path d="M 188,86 Q 200,80 212,86"
                                            fill="none" stroke="white" stroke-width="2" stroke-opacity="0.45"
                                            stroke-linecap="round" />

                                        <path d="M 181,92 Q 180,97 183,102"
                                            fill="none" stroke="white" stroke-width="1.2" stroke-opacity="0.30"
                                            stroke-linecap="round" />
                                    </g>

                                </g>


                                <g filter="url(#canShadow)">


                                    <ellipse cx="200" cy="358" rx="145" ry="28"
                                        fill="url(#bottomGrad)" stroke="#4a5c68" stroke-width="2" />


                                    <rect x="55" y="178" width="290" height="180" fill="url(#canBody)" />


                                    <path d="M 55,178 Q 38,268 55,358" fill="none" stroke="#486070" stroke-width="3.5" />
                                    <path d="M 345,178 Q 362,268 345,358" fill="none" stroke="#7090a0" stroke-width="3.5" />

                                    <rect x="55" y="178" width="24" height="180" fill="black" fill-opacity="0.07" />
                                    <rect x="321" y="178" width="24" height="180" fill="black" fill-opacity="0.05" />
                                    <rect x="178" y="178" width="44" height="180" fill="white" fill-opacity="0.03" />


                                    <rect x="55" y="198" width="290" height="108"
                                        fill="url(#labelGrad)" clip-path="url(#labelClip)" />
                                    <rect x="55" y="198" width="290" height="10" fill="#c8920a" />
                                    <rect x="55" y="296" width="290" height="10" fill="#c8920a" />

                                    <g opacity="0.22" transform="translate(82,232)">
                                        <ellipse cx="0" cy="0" rx="20" ry="8" fill="white" />
                                        <polygon points="20,0 30,-6 30,6" fill="white" />
                                        <circle cx="-10" cy="-2" r="2" fill="#0d2a48" />
                                    </g>
                                    <g opacity="0.18" transform="translate(298,264) scale(-0.8,0.8)">
                                        <ellipse cx="0" cy="0" rx="20" ry="8" fill="white" />
                                        <polygon points="20,0 30,-6 30,6" fill="white" />
                                        <circle cx="-10" cy="-2" r="2" fill="#0d2a48" />
                                    </g>


                                    <path d="M 55,255 Q 82,247 112,255 Q 142,263 172,255 Q 202,247 232,255 Q 262,263 292,255 Q 322,247 345,255"
                                        fill="none" stroke="#c8920a" stroke-width="1.5" opacity="0.55" />


                                    <text x="200" y="250"
                                        font-family="'Arial Black', Impact, sans-serif"
                                        font-size="30" font-weight="900"
                                        fill="white" text-anchor="middle" letter-spacing="2">TUNACAN.LOL</text>
                                    <text x="200" y="273"
                                        font-family="Arial, sans-serif" font-size="9.5"
                                        fill="#f0c050" text-anchor="middle" letter-spacing="4" opacity="0.9">PREMIUM · WILD CAUGHT · IN OIL</text>
                                    <text x="200" y="289"
                                        font-family="Arial, sans-serif" font-size="8"
                                        fill="#aabccc" text-anchor="middle" letter-spacing="1">NET WT 5 OZ (142g)</text>


                                    <line x1="55" y1="222" x2="345" y2="222" stroke="#a0b8c8" stroke-width="0.8" opacity="0.28" />
                                    <line x1="55" y1="323" x2="345" y2="323" stroke="#607888" stroke-width="0.8" opacity="0.28" />


                                    <ellipse cx="200" cy="178" rx="145" ry="28"
                                        fill="url(#rimGrad)" stroke="#4a5c68" stroke-width="2" />
                                    <ellipse cx="200" cy="178" rx="136" ry="24"
                                        fill="#8098a8" opacity="0.55" stroke="#607888" stroke-width="1" />


                                    <ellipse cx="200" cy="178" rx="130" ry="22"
                                        fill="url(#tunaFill)" stroke="#4a3828" stroke-width="1" />
                                    <ellipse cx="200" cy="178" rx="116" ry="18" fill="#d0bc78" opacity="0.55" />

                                    <line x1="148" y1="175" x2="164" y2="181" stroke="#a07840" stroke-width="1.5" opacity="0.65" />
                                    <line x1="168" y1="172" x2="182" y2="179" stroke="#a07840" stroke-width="1.5" opacity="0.65" />
                                    <line x1="188" y1="170" x2="200" y2="176" stroke="#a07840" stroke-width="1.5" opacity="0.65" />
                                    <line x1="208" y1="170" x2="222" y2="177" stroke="#a07840" stroke-width="1.5" opacity="0.65" />
                                    <line x1="228" y1="171" x2="242" y2="178" stroke="#a07840" stroke-width="1.5" opacity="0.65" />
                                    <line x1="248" y1="173" x2="258" y2="179" stroke="#a07840" stroke-width="1.5" opacity="0.65" />

                                    <ellipse cx="188" cy="174" rx="38" ry="7"
                                        fill="white" fill-opacity="0.14" transform="rotate(-4,188,174)" />

                                </g>

                            </svg>
                        </div>
                    </div>
                </section>


                <div class="marquee-wrap">
                    <div class="marquee-track" id="marqueeTrack">

                        <div class="marquee-item">STAND-UP <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">IMPROV NIGHTS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">SKETCH COMEDY <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">OPEN MIC <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">LATE NIGHT SHOWS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">TOURING ACTS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">PRIVATE EVENTS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">STAND-UP <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">IMPROV NIGHTS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">SKETCH COMEDY <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">OPEN MIC <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">LATE NIGHT SHOWS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">TOURING ACTS <span class="marquee-dot">◆</span></div>
                        <div class="marquee-item">PRIVATE EVENTS <span class="marquee-dot">◆</span></div>
                    </div>
                </div>


                <section class="shows" id="shows">
                    <div class="section-header reveal">
                        <div>
                            <p class="section-label">On Stage</p>
                            <h2 class="section-title">Upcoming Shows</h2>
                        </div>
                        <a href="#tickets" class="section-link">View all →</a>
                    </div>
                    <div class="shows-grid reveal">
                        <div class="show-card">
                            <span class="show-price">??</span>
                            <p class="show-date">TBD</p>
                            <h3 class="show-name">The Can Opener</h3>
                            <p class="show-venue">TBD</p>
                            <div class="show-tags">
                                <span class="show-tag">Stand-Up</span>
                                <span class="show-tag">18+</span>
                                <span class="show-tag">Headliner Night</span>
                            </div>
                        </div>
                        <div class="show-card">
                            <span class="show-price">$TBD</span>
                            <p class="show-date">TBD</p>
                            <h3 class="show-name">Fish Out of Water</h3>
                            <p class="show-venue">TBD</p>
                            <div class="show-tags">
                                <span class="show-tag">Improv</span>
                                <span class="show-tag">All Ages</span>
                                <span class="show-tag">Audience Participation</span>
                            </div>
                        </div>
                        <div class="show-card">
                            <span class="show-price">$TBD</span>
                            <p class="show-date">TBD</p>
                            <h3 class="show-name">Saturdays</h3>
                            <p class="show-venue">TBD</p>
                            <div class="show-tags">
                                <span class="show-tag">Sketch</span>
                                <span class="show-tag">21+</span>
                                <span class="show-tag">Late Night</span>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="about" id="about">
                    <div class="about-left">
                        <p class="section-label" style="color: var(--tin); margin-bottom: 1rem;">Our Story</p>
                        <h2 class="about-title reveal">Comedy<em>Tightly</em>Packed.</h2>
                        <p class="about-body reveal">
                            Born from silly sound checks, Tuna Can offers a fresh take on the Comedy Scene.
                        </p>
                        <div class="about-stats reveal">
                            <div>
                                <div class="stat-num" data-target="0">0</div>
                                <div class="stat-label">Shows Produced</div>
                            </div>
                            <div>
                                <div class="stat-num" data-target="0">0</div>
                                <div class="stat-label">Comedians Booked</div>
                            </div>
                            <div>
                                <div class="stat-num" data-target="25">0</div>
                                <div class="stat-label">Laughs Delivered</div>
                            </div>
                        </div>
                    </div>
                    <div class="about-right">
                        <div class="about-pattern"></div>
                        <div class="about-quote">
                            <div class="quote-mark">"</div>
                            <p class="quote-text">The most hilarious comedy nights in the city.</p>
                            <p class="quote-attr">— Some Homeless Dude</p>
                        </div>
                    </div>
                </section>

                <section class="performers" id="performers">
                    <div class="section-header reveal">
                        <div>
                            <p class="section-label">The Talent</p>
                            <h2 class="section-title">Regular Performers</h2>
                        </div>
                        <a href="#" class="section-link">Full roster →</a>
                    </div>
                    <div class="performers-grid reveal">
                        <div class="performer-card">
                            <div class="performer-avatar">
                                <div class="performer-initial">M</div>
                                <div class="performer-emoji">🎤</div>
                                <div class="performer-stripe"></div>
                            </div>
                            <p class="performer-name">Humble Matt</p>
                            <p class="performer-style">Observational · Deadpan</p>
                        </div>
                        <div class="performer-card">
                            <div class="performer-avatar" style="background: #2A1A2E;">
                                <div class="performer-initial">D</div>
                                <div class="performer-emoji">😂</div>
                                <div class="performer-stripe"></div>
                            </div>
                            <p class="performer-name">Dan Druff</p>
                            <p class="performer-style">Wacky · Dark Humor</p>
                        </div>
                        <div class="performer-card">
                            <div class="performer-avatar" style="background: #1A2A1E;">
                                <div class="performer-initial">T</div>
                                <div class="performer-emoji">🦑</div>
                                <div class="performer-stripe"></div>
                            </div>
                            <p class="performer-name">Made Up Name</p>
                            <p class="performer-style">Crowd Work · High Energy</p>
                        </div>
                        <div class="performer-card">
                            <div class="performer-avatar" style="background: #2E1A1A;">
                                <div class="performer-initial">R</div>
                                <div class="performer-emoji">🎭</div>
                                <div class="performer-stripe"></div>
                            </div>
                            <p class="performer-name">Made Up Name 2</p>
                            <p class="performer-style">Character Comedy · Sketch</p>
                        </div>
                    </div>
                </section>


                <section class="ticket-cta" id="tickets">
                    <div>
                        <h2 class="ticket-title reveal">Don't Get Left on the Shelf.</h2>
                        <p class="ticket-sub reveal">Get your tickets now.</p>
                    </div>
                    <a href="#shows" class="btn-cream reveal">Get Tickets</a>
                </section>


                <footer>
                    <div class="footer-brand">
                        <span class="nav-logo" style="font-size:2.2rem; display:block; margin-bottom:0.8rem;">Tuna Can Comedy</span>
                        <p class="footer-tagline">Sorta funny. Live comedy production done pretty good.</p>
                    </div>
                    <div class="footer-col">
                        <h4>Navigate</h4>
                        <ul>
                            <li><a href="#shows">Upcoming Shows</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#performers">Performers</a></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Work With Us</h4>
                        <ul>
                            <li><a href="#">Submit to Open Mic</a></li>
                            <li><a href="#">Book a Performer</a></li>
                            <li><a href="#">Private Events</a></li>
                            <li><a href="#">Contact: matt@tunacan.lol</a></li>
                        </ul>
                    </div>
                    <div class="footer-bottom">
                        <p class="footer-copy">© 2026 Tuna Can Comedy.</p>
                        <div class="socials">
                            <a href="#" class="social-link">Instagram</a>
                            <a href="#" class="social-link">TikTok</a>

                            <a href="#" class="social-link">YouTube</a>
                        </div>
                    </div>
                </footer>
                <script src="/static/js/home.js" defer></script>


            </body>
        </html>
    )
}