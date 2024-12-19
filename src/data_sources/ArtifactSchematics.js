const data = [
    {
        id: "gravity-speeder",
        planet_name: "Mercury",
        artifact_name: "Grav-Speeder",
        artifact_gif: "Urrey",
        planet_symbol: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path style="fill:none;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke:currentColor;stroke-opacity:1;stroke-miterlimit:10" d="M80 70c0 11.055-8.945 20-20 20s-20-8.945-20-20 8.945-20 20-20 20 8.945 20 20Zm-40 40c0-11.055 8.945-20 20-20s20 8.945 20 20M60 10v40M40 30h40" transform="matrix(.1 0 0 -.1 0 12)"/></svg>',
        ancient_lore: "The ancient Roman god Mercury, from the ancient Greek Hercules, was known for his incredible speed as the messenger of the Gods. The planet Mercury is also the speediest of its group due to the high gravitational pull from being closest to the Sun.",
        artifact_powers: "The Gravity Speeder uses gravity assists to propel itself through space, greatly reducing its fuel demands. However, be careful when timing your launches or you may find that the shifting astronomical objects put you on the wrong trajectory!"
    },
    {
        "id": "hyno-thesia",
        planet_name: "Venus",
        "artifact_name": "Hypno-Thesia",
        "artifact_gif": "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke:currentColor;stroke-width:.6;stroke-miterlimit:4;stroke-dasharray:none" d="M6 11V7M4 9h4m1-5a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3Z"/></svg>',
        ancient_lore: "The ancient Roman goddess Venus, from the ancient Greek Aphrodite, was known for being so beautiful to the point that her admirers could actually become enchanted. The planet Venus has also enchanted people throughout history as the bright Morning and Evening Star",
        artifact_powers: "Unlike Venus' atmosphere, which is almost entirely carbon dioxide, Hypno-thesia is nitrous oxide, like laughing gas used by doctors and dentists. In the case of hostile extraterrestrials, a quick spray might smooth things over."
    },
    {
        id: "wormhole-compass",
        planet_name: "Earth",
        artifact_name: "Wormhole-Nav",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke:currentColor;stroke-width:.99975002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0zm-5 5V1M1 6h10"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
    {
        id: "ferric-corroder",
        planet_name: "Mars",
        artifact_name: "Fe2-Corroder",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M9 7c0-2.207-1.793-4-4-4S1 4.793 1 7s1.793 4 4 4 4-1.793 4-4ZM7.828 4.172 11 1M9.23 1H11v1.77" style="fill:none;stroke:currentColor;stroke-width:.6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
    {
        id: "stun-blaster",
        planet_name: "Jupiter",
        artifact_name: "Stun-Blaster",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 1a4.33 4.33 0 0 1 0 7.5h7.5M7.25 6v5" style="fill:none;stroke:currentColor;stroke-width:.6;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:1.5;stroke-opacity:1;stroke-dasharray:none"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
    {
        id: "spacetime-warper",
        planet_name: "Saturn",
        artifact_name: "Time-Warper",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke:currentColor;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1" transform="matrix(.1 0 0 -.1 0 12)" d="M30 90h40m-20 20V60c0 11.055 8.945 20 20 20s20-8.945 20-20c0-5.313-2.11-10.39-5.86-14.14C75.079 36.796 70 22.812 70 10"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
    {
        id: "astral-looper",
        planet_name: "Uranus",
        artifact_name: "Astro-Looper",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M6 7.602a.899.899 0 1 0 0 1.797.899.899 0 0 0 0-1.797Z"/><path style="fill:none;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke:currentColor;stroke-opacity:1;stroke-miterlimit:10" transform="matrix(.1 0 0 -.1 0 12)" d="M60 60v50M35 85l25 25 25-25m0-50c0 13.79-11.21 25-25 25S35 48.79 35 35s11.21-25 25-25 25 11.21 25 25Zm0 0"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
    {
        id: "grappling-trident",
        planet_name: "Neptune",
        artifact_name: "Tri-Tether",
        artifact_gif: "Urrey",
        planet_symbol: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path style="fill:none;stroke:currentColor;stroke-width:.6;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" d="M6 11V1M3.5 7.25h5M2.25 1a3.751 3.751 0 0 0 7.5 0"/></svg>',
        ancient_lore: "surrey0@cafepress.com",
        artifact_powers: "surrey0@cafepress.com"
    },
]

export default { data }