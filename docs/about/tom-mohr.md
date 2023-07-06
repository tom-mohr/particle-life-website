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

I'm a software developer and Computer Science Master's student in Germany.
Feel free to reach out to me on Twitter with any questions or suggestions.

<VPTeamMembers size="small" :members="members" />

I'm also sometimes writing on [<img src="/medium.svg" alt="" style="display: inline; vertical-align: middle;"/>](https://medium.com/@tom-mohr) [Medium](https://medium.com/@tom-mohr).
