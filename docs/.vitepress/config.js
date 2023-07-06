import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/particle-life-website/',
    title: "Particle Life",
    description: "Vivid structures from rudimentary rules.",
    head: [
        ['link', { rel: 'icon', href: '/public/favicon.ico' }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        nav: [
            { text: 'Documentation', link: '/app/installation' },
        ],

        sidebar: [
            {
                text: 'Desktop App',
                items: [
                    { text: 'Installation', link: '/app/installation' },
                    { text: 'GUI Commands', link: '/app/controls' },
                ]
            },
            {
                text: 'Terminal App',
                items: [
                    { text: 'Installation', link: '/cli/installation' },
                    { text: 'GUI Commands', link: '/cli/controls' },
                    { text: 'CLI Options', link: '/cli/options' },
                    { text: 'Modes', link: '/cli/modes' },
                ]
            },
            {
                text: 'Java Framework',
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/java-framework/overview' },
                    { text: 'Getting Started', link: '/java-framework/getting-started' },
                    { text: 'Asynchronous Updating', link: '/java-framework/asynchronous-updating' },
                    { text: 'Accelerators', link: '/java-framework/accelerators' },
                    { text: 'Settings', link: '/java-framework/settings' },
                ]
            },
            {
                text: 'About',
                items: [
                    { text: 'About This Project', link: '/about/project' },
                    { text: 'Other Implementations', link: '/about/implementations' },
                    { text: 'About Me', link: '/about/tom-mohr' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'youtube', link: 'https://www.youtube.com/@tom-mohr' },
            { icon: 'discord', link: 'https://discord.gg/Fd64AhKzMD' },
            { icon: 'github', link: 'https://github.com/tom-mohr/particle-life-app' },
        ],

        editLink: {
            pattern: 'https://github.com/tom-mohr/particle-life-website/edit/main/docs/:path',
            text: 'Edit this page',
        },
    }
})
