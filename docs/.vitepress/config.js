import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Particle Life Simulator",
    description: "Thousands of particles form life-like structures from rudimentary rules.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        nav: [
            { text: 'Documentation', link: '/app/installation' },
        ],

        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Installation', link: '/app/installation' },
                    { text: 'GUI Commands', link: '/app/controls' },
                ]
            },
            {
                text: 'Backend',
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
                collapsed: true,
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
            text: 'edit this page on GitHub',
        },
    }
})
