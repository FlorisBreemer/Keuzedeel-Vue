<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold my-4">Home</h1>
    <section>
      <About />
    </section>
    
    <!-- Introduction Section -->
    <section>
      <h2 class="text-xl font-bold my-2">Introduction</h2>
      <p>
        Welcome to my website. I'm a software engineer with a passion for solving complex problems
        and building innovative solutions. I specialize in frontend development, but I'm also
        experienced in backend technologies.
      </p>
    </section>

    <!-- Featured Section -->
    <section>
      <h2 class="text-xl font-bold my-2">Featured</h2>
      <p>
        Check out my latest project made for my internship at Global VAT Compliance, a full-stack
        application built using Vue.js, PHP and Laravel. It's a tool that takes input from a shop
        API ( e.g Shopify, WooCommerce ) and outputs it in a standardized format that is used by
        internal applications at the company.
      </p>
    </section>

    <!-- Call to Action Section -->
    <section>
      <h2 class="text-xl font-bold my-2">Get Started</h2>
      <p>
        If you're interested in working with me or learning more about my work, feel free to reach
        out. You can contact me via my email: florisbreemer@outlook.com or through my
        <a
          class="hover:underline text-blue-500"
          href="https://www.linkedin.com/in/floris-breemer-847a35276/"
          >LinkedIn</a
        >
        profile. I'm always open to new opportunities and collaborations.
      </p>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import About from '@/components/About.vue'

export default defineComponent({
  components: {
    About
  }
})
</script>
