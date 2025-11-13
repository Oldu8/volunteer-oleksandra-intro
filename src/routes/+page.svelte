<script>
  import CardsSection from "$lib/components/CardsSection.svelte";
  import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<svelte:head>
  <title>Oleksandra - Talent Acquisition Mentor & HR</title>
  <meta
    name="description"
    content="Volunteer Talent Acquisition Mentor & HR with 7 years of experience. Free resume review, interview preparation, and career guidance."
  />
</svelte:head>

<div class="min-h-screen" style="background-color: #f4f7f9;">
  <!-- Header Section -->
  <section class="container mx-auto px-4 py-10 md:py-12">
    <div
      class="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-14 justify-between"
    >
      <!-- Left: Profile Picture + Name/Title -->
      <div
        class="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 flex-shrink-0"
      >
        <!-- Profile Picture -->
        <div>
          <img
            src="/profile.jpg"
            alt="Oleksandra - Talent Acquisition Mentor"
            class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        <!-- Name and Title -->
        <div>
          <h1
            class="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-700 mb-2"
          >
            Hello,
            <br />
            I'm Oleksandra
          </h1>
          <h2 class="text-md md:text-lg text-gray-600 font-medium">
            Volunteer Talent Acquisition Mentor & HR
          </h2>
        </div>
      </div>

      <!-- Right: Experience Text -->
      <div class="space-y-4 text-gray-700 leading-relaxed max-w-[500px]">
        <p class="text-justify font-normal">
          I have 7 years of experience across diverse industries - from maritime
          to IT. Have successfully hired professionals from junior specialists
          to C-level executives, helping companies attract, engage and retain
          top A-players.
        </p>
        <p class="text-justify font-normal">
          My approach combines strategic thinking, creativity, and a deep
          understanding of both business needs and candidate motivations.
        </p>
      </div>
    </div>
  </section>

  <CardsSection />

  <ContactSection />
</div>
