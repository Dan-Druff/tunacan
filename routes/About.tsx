export function AboutPage() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About — Tuna Can Comedy</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
                {/* <link rel="stylesheet" href="/static/styles/globals.css" /> */}
                <link rel="icon" href="/static/images/favicon.ico" />
                <link rel="stylesheet" href="/static/styles/about.css" />


            </head>
            <body>

                <div class="cursor" id="cursor"></div>
                <div class="cursor-ring" id="cursorRing"></div>


                <nav id="nav">
                    <a href="/" class="nav-logo">Tuna Can Comedy</a>
                    <ul class="nav-links">
                        <li><a href="/#shows">Shows</a></li>
                        <li><a href="/about" class="active">About</a></li>
                        <li><a href="/#performers">Performers</a></li>
                        <li><a href="/#tickets">Tickets</a></li>
                    </ul>
                    <a href="/#tickets" class="nav-cta">Get Tickets</a>
                </nav>


                <section class="page-hero">
                    <div class="hero-bg-grid"></div>
                    <div class="hero-year-track" aria-hidden="true">2018 2019 2020 2021 2022 2023 2024</div>
                    <p class="page-hero-eyebrow">Our Story · Est. 2026</p>
                    <h1 class="page-hero-title">
                        THE <span class="outlined">PEOPLE </span>
                        BEHIND
                        THE <span class="red"> CAN.</span>
                    </h1>
                    <div class="page-hero-sub">
                        <p class="page-hero-desc">
                            Unexpected Comedy Production Company by Two Sound Tech Friends.
                        </p>
                        <div class="hero-stat-row">
                            <div>
                                <div class="hero-stat-num">0+</div>
                                <div class="hero-stat-label">Shows Produced</div>
                            </div>
                            <div>
                                <div class="hero-stat-num">0+</div>
                                <div class="hero-stat-label">Comedians Booked</div>
                            </div>
                            <div>
                                <div class="hero-stat-num">2</div>
                                <div class="hero-stat-label">Years Running</div>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-indicator">
                        <div class="scroll-line"></div>
                        <span class="scroll-text">Scroll</span>
                    </div>
                </section>


                <section class="origin">
                    <div class="origin-left reveal-left">
                        <div class="origin-left-bg"></div>
                        <p class="section-tag">Origin Story</p>
                        <h2 class="origin-title">Two sound guys started by doing silly <em>Sound Checks,</em> With a mysterious Tuna Can on stage left. Wanted to see how long it would stay there during the festival before someone got rid of it. Was 8 days.</h2>
                        <p class="origin-body">
                            Our first time doing comedy was in front of thousands of people to test the mics before bands hit the stage.
                        </p>
                        <p class="origin-body">
                            We never set out to build a "brand." We just wanted to disappoint a room full of strangers again and again.
                        </p>
                    </div>
                    {/* <div class="origin-right reveal-right">
                        <p class="section-tag">Timeline</p>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2018</div>
                                <div class="timeline-event">
                                    <h4>First Show</h4>
                                    <p>23 attendees, one borrowed mic, zero rehearsal. The Rusty Anchor basement becomes our spiritual home.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2019</div>
                                <div class="timeline-event">
                                    <h4>First Sellout</h4>
                                    <p>We fill a 120-seat theatre for the first time. We cry in the parking lot afterward. Not ashamed.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2020</div>
                                <div class="timeline-event">
                                    <h4>The Pivot</h4>
                                    <p>We move online before online was cool. 14 livestreams. 40,000+ viewers. Comedy doesn't stop.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2022</div>
                                <div class="timeline-event">
                                    <h4>First Tour</h4>
                                    <p>Six cities. Twelve shows. One van that smelled like tuna (accidentally thematic). Sold out every night.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2024</div>
                                <div class="timeline-event">
                                    <h4>The Tin Room Opens</h4>
                                    <p>We open our own dedicated venue — 200 seats, a real sound system, and no more borrowed chairs.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>

{/* 
                <section class="philosophy">
                    <div class="philosophy-bg-text" aria-hidden="true">HA</div>
                    <div class="philosophy-inner">
                        <div class="philosophy-sticky reveal-left">
                            <p class="philosophy-label">What We Believe</p>
                            <h2 class="philosophy-title">How We<em>Do It.</em></h2>
                        </div>
                        <div class="pillars reveal-right">
                            <div class="pillar">
                                <div class="pillar-num">01</div>
                                <div class="pillar-content">
                                    <h3>Pack It Tight</h3>
                                    <p>Every show is curated like a tuna can — every inch used, nothing wasted. We pick acts that complement each other, build momentum, and leave the audience wanting more. No filler. No dead air. No awkward transitions that make you check your phone.</p>
                                </div>
                            </div>
                            <div class="pillar">
                                <div class="pillar-num">02</div>
                                <div class="pillar-content">
                                    <h3>Punch Up, Never Down</h3>
                                    <p>The best comedy targets power, absurdity, and shared human weirdness. We book performers who use their platform to say something — even if that something is just "my landlord is feral." We believe comedy has a point of view and an ethical spine.</p>
                                </div>
                            </div>
                            <div class="pillar">
                                <div class="pillar-num">03</div>
                                <div class="pillar-content">
                                    <h3>Pay the Artists</h3>
                                    <p>We pay our comedians properly. Every one of them. This is non-negotiable, non-optional, and frankly embarrassing that it still needs to be said in this industry. Comics work hard. We pay on time, in full, without being asked twice.</p>
                                </div>
                            </div>
                            <div class="pillar">
                                <div class="pillar-num">04</div>
                                <div class="pillar-content">
                                    <h3>Build the Room</h3>
                                    <p>We actively seek out and platform comedians who are underrepresented in traditional comedy spaces. The room should look like the city. The room should sound like all of it. That's not charity — it's just how you make better shows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section class="team">
                    <div class="team-bg"></div>
                    <div class="team-inner">
                        <div class="team-header reveal">
                            <div>
                                <p class="section-tag" style="color: var(--gold);">The Crew</p>
                                <h2 class="team-title">Who Runs The Can</h2>
                            </div>
                            <p class="team-sub">Small team. Big mouths. Obsessed with live comedy.</p>
                        </div>
                        <div class="team-grid reveal">
                            <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">🎙️</span>
                                <h3 class="team-name">Humble Matt</h3>
                                <p class="team-role">Co-Founder · Executive Producer</p>
                                <p class="team-bio">....</p>
                            </div>
                            <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">🔧</span>
                                <h3 class="team-name">Dan Druff</h3>
                                <p class="team-role">Co-Founder · Operations</p>
                                <p class="team-bio">....</p>
                            </div>
                            {/* <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">📣</span>
                                <h3 class="team-name">Priya Nair</h3>
                                <p class="team-role">Head of Marketing & Talent Relations</p>
                                <p class="team-bio">Priya's the reason you heard about us. She handles every campaign, every social post, every outreach to the best new voices in comedy — and she does it all with an energy that frankly should be regulated.</p>
                            </div>
                            <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">🎚️</span>
                                <h3 class="team-name">Sam Kowalczyk</h3>
                                <p class="team-role">Technical Director</p>
                                <p class="team-bio">Sound, lights, streaming, recording — Sam makes the show actually work. Has been blamed for zero technical failures and credited for saving at least four shows that would otherwise have been disasters.</p>
                            </div>
                            <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">🎟️</span>
                                <h3 class="team-name">Tasha Brandt</h3>
                                <p class="team-role">Box Office & Community Lead</p>
                                <p class="team-bio">Tasha runs the front door and knows every regular by name, usual drink, and the punchline they're still laughing at from six months ago. The heart of what makes a Tuna Can show feel like home.</p>
                            </div>
                            <div class="team-card">
                                <div class="team-card-accent"></div>
                                <span class="team-emoji">📷</span>
                                <h3 class="team-name">Leo Okafor</h3>
                                <p class="team-role">Content & Photography</p>
                                <p class="team-bio">Leo captures the moments — the perfectly timed face in the crowd, the look between two comedians mid-set. His work is why our Instagram makes people feel like they were there even when they weren't.</p>
                            </div> */}
                        </div>
                    </div>
                </section>


                <div class="numbers reveal">
                    <div class="number-cell">
                        <div class="number-val">0+</div>
                        <div class="number-desc">Shows Produced</div>
                    </div>
                    <div class="number-cell">
                        <div class="number-val">0+</div>
                        <div class="number-desc">Comics Booked</div>
                    </div>
                    <div class="number-cell">
                        <div class="number-val">1</div>
                        <div class="number-desc">Cities Toured</div>
                    </div>
                    <div class="number-cell">
                        <div class="number-val">22+</div>
                        <div class="number-desc">Laughs Served</div>
                    </div>
                </div>


                {/* <section class="press">
                    <p class="press-label reveal">What They're Saying</p>
                    <div class="press-grid reveal">
                        <div class="press-card">
                            <div class="press-stars">★★★★★</div>
                            <div class="press-quote-mark">"</div>
                            <p class="press-text">The tightest, most dependably hilarious comedy nights in the city. Every single time, without exception.</p>
                            <p class="press-source">The City Weekly</p>
                        </div>
                        <div class="press-card">
                            <div class="press-stars">★★★★★</div>
                            <div class="press-quote-mark">"</div>
                            <p class="press-text">Tuna Can doesn't just produce shows — they cultivate an entire ecosystem for comedy to genuinely thrive.</p>
                            <p class="press-source">Comedy Central Blog</p>
                        </div>
                        <div class="press-card">
                            <div class="press-stars">★★★★☆</div>
                            <div class="press-quote-mark">"</div>
                            <p class="press-text">If you want to see what the comedy landscape looks like in five years, go see a Tuna Can show right now.</p>
                            <p class="press-source">The Spectator Arts</p>
                        </div>
                    </div>
                </section> */}


                <section class="join" id="contact">
                    <div>
                        <p class="section-tag" style="color: var(--gold); margin-bottom: 1.5rem;">Get Involved</p>
                        <h2 class="join-title reveal">Want In <em>On The Can?</em></h2>
                        <p class="join-body reveal">
                            Whether you're a comedian looking to perform, a venue interested in hosting, or just someone who wants to be first in line — there's a spot for you in the Tuna Can universe.
                        </p>
                        <div class="join-actions reveal">
                            <a href="#" class="btn-red">matt@tunacan.lol</a>
                            <a href="#" class="btn-outline-cream">dan@tunacan.lol</a>
                        </div>
                    </div>
                    <div class="join-contact reveal">
                        <div class="contact-item">
                            <span class="contact-icon">📬</span>
                            <div>
                                <p class="contact-label">General Enquiries</p>
                                <p class="contact-val">matt@tunacan.lol</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">🎤</span>
                            <div>
                                <p class="contact-label">Performer Submissions</p>
                                <p class="contact-val">dan@tunacan.lol</p>
                            </div>
                        </div>
                        {/* <div class="contact-item">
                            <span class="contact-icon">🎉</span>
                            <div>
                                <p class="contact-label">Private Events</p>
                                <p class="contact-val">events@tunacancomedy.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📰</span>
                            <div>
                                <p class="contact-label">Press & Media</p>
                                <p class="contact-val">press@tunacancomedy.com</p>
                            </div>
                        </div> */}
                    </div>
                </section>


                <footer>
                    <a href="/" class="footer-logo">Tuna Can Comedy</a>
                    <p class="footer-copy">© 2026 Tuna Can Comedy.</p>
                    <div class="footer-socials">
                        <a href="#">Instagram</a>
                        <a href="#">TikTok</a>
                        <a href="#">Twitter</a>
                        <a href="#">YouTube</a>
                    </div>
                </footer>
                <script src="/static/js/about.js" defer></script>

            </body>
        </html>
    )
}