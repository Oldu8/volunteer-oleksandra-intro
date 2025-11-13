<script lang="ts">
  import TargetIcon from "$lib/icons/TargetIcon.svelte";
  import DocumentIcon from "$lib/icons/DocumentIcon.svelte";
  import DollarIcon from "$lib/icons/DollarIcon.svelte";
</script>

<section class="container mx-auto px-4 py-6 md:py-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    <!-- My Goal Card -->
    <div
      class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-8 shadow-md relative rounded-tl-lg rounded-br-lg"
      style="clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));"
    >
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center"
        >
          <TargetIcon className="w-5 h-5 text-blue-600" />
        </div>
        <h2 class="text-2xl font-bold text-blue-700">My Goal</h2>
      </div>
      <div class="space-y-4 text-gray-700 mb-8">
        <p>
          is to help professionals improve their resumes and interview skills,
          understand their strengths, and identify the areas they can develop
          further.
        </p>
        <p>
          I want to inspire people to see their own potential, feel confident in
          presenting it, and take the next step toward their dream career.
        </p>
      </div>
      <p class="text-sm text-blue-600 absolute bottom-4 right-6">About</p>
    </div>

    <!-- What I Offer Card -->
    <div
      class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-8 shadow-md relative rounded-tl-lg rounded-br-lg"
      style="clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));"
    >
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center"
        >
          <DocumentIcon className="w-5 h-5 text-blue-600" />
        </div>
        <h2 class="text-2xl font-bold text-blue-700">What I Offer</h2>
      </div>
      <ul class="space-y-3 text-gray-700 mb-8 list-disc list-inside">
        <li>Help candidates get ready for interviews with recruiters;</li>
        <li>Resume review to highlight your strengths;</li>
        <li>Career guidance to explore new opportunities.</li>
      </ul>
      <p class="text-sm text-blue-600 absolute bottom-4 right-6">Services</p>
    </div>

    <!-- Price Card - Half Height -->
    <div class="flex flex-col">
      <div
        class="bg-gradient-to-br from-purple-500 to-blue-500 p-6 md:p-8 shadow-md text-white rounded-tl-lg rounded-br-lg"
        style="clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px)); min-height: 180px;"
      >
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
          >
            <DollarIcon className="w-5 h-5 text-white" />
          </div>
          <h2 class="text-2xl font-bold">Price</h2>
        </div>
        <p class="leading-relaxed text-white/90">
          My services are free. I only ask for a voluntary donation beforehand -
          you choose any amount and any organization to support.
        </p>
      </div>
      <div class="text-start p-4">
        <h2 class="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
          Let's Connect!
        </h2>
        <p class="text-md md:text-xl text-gray-600 max-w-[250px]">
          I'm open to collaborating on challenging projects.
        </p>
      </div>
    </div>
  </div>
</section>
