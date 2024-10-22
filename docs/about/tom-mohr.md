---
editLink: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/tom-mohr.png',
    name: 'Tom Mohr',
    title: 'Software Developer',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/tom_mohr_' },
      { icon: 'youtube', link: 'https://www.youtube.com/@tom-mohr' },
      { icon: 'github', link: 'https://github.com/tom-mohr' }
    ]
  }
]
</script>

# About Me

Check out my [homepage](https://tommohr.dev).
Feel free to reach out to me on Twitter or Discord with any questions or suggestions!
You can also send me an email at [tom.g.mohr@gmail.com](mailto:tom.g.mohr@gmail.com).

<VPTeamMembers size="small" :members="members" />

