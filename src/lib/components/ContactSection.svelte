<script lang="ts">
  import TelegramIcon from "$lib/icons/TelegramIcon.svelte";
  import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
</script>

<section class="container mx-auto px-4 py-8 md:py-10">
  <div class="max-w-2xl mx-auto text-center">
    <!-- <h2 class="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
      Let's Connect!
    </h2>
    <p class="text-lg text-gray-600 mb-8">
      I'm open to collaborating on challenging projects.
    </p> -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://t.me/Saniddk"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
        aria-label="Contact on Telegram"
      >
        <TelegramIcon className="w-5 h-5" />
        Telegram
      </a>
      <a
        href="https://www.linkedin.com/in/alexandra7784/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
        aria-label="Contact on LinkedIn"
      >
        <LinkedInIcon className="w-5 h-5" />
        LinkedIn
      </a>
    </div>
  </div>
</section>
