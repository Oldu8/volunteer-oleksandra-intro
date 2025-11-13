<script>
	// SEO-friendly page with SSR
</script>

<svelte:head>
	<title>Oleksandra - Talent Acquisition Mentor & HR</title>
	<meta name="description" content="Volunteer Talent Acquisition Mentor & HR with 7 years of experience. Free resume review, interview preparation, and career guidance." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Header Section -->
	<section class="container mx-auto px-4 py-12 md:py-16 lg:py-20">
		<div class="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
			<!-- Profile Picture -->
			<div class="flex-shrink-0">
				<img
					src="/profile.jpg"
					alt="Oleksandra - Talent Acquisition Mentor"
					class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
				/>
			</div>

			<!-- Introduction Text -->
			<div class="flex-1">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 mb-4">
					Hello, I'm Oleksandra
				</h1>
				<p class="text-lg md:text-xl text-gray-600 mb-6">
					Volunteer Talent Acquisition Mentor & HR
				</p>
				<div class="space-y-4 text-gray-700 leading-relaxed">
					<p>
						I have 7 years of experience across diverse industries - from maritime to IT. Have successfully hired professionals from junior specialists to C-level executives, helping companies attract, engage and retain top A-players.
					</p>
					<p>
						My approach combines strategic thinking, creativity, and a deep understanding of both business needs and candidate motivations.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Cards Section -->
	<section class="container mx-auto px-4 py-8 md:py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
			<!-- My Goal Card -->
			<div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8 shadow-md relative">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
						<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-purple-700">My Goal</h2>
				</div>
				<div class="space-y-4 text-gray-700 mb-8">
					<p>
						is to help professionals improve their resumes and interview skills, understand their strengths, and identify the areas they can develop further.
					</p>
					<p>
						I want to inspire people to see their own potential, feel confident in presenting it, and take the next step toward their dream career.
					</p>
				</div>
				<p class="text-sm text-purple-600 absolute bottom-4 right-6">About</p>
			</div>

			<!-- What I Offer Card -->
			<div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8 shadow-md relative">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
						<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-purple-700">What I Offer</h2>
				</div>
				<ul class="space-y-3 text-gray-700 mb-8 list-disc list-inside">
					<li>Help candidates get ready for interviews with recruiters;</li>
					<li>Resume review to highlight your strengths;</li>
					<li>Career guidance to explore new opportunities.</li>
				</ul>
				<p class="text-sm text-purple-600 absolute bottom-4 right-6">Services</p>
			</div>

			<!-- Price Card -->
			<div class="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 md:p-8 shadow-md relative text-white">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold">Price</h2>
				</div>
				<p class="text-white/90 leading-relaxed">
					My services are free. I only ask for a voluntary donation beforehand - you choose any amount and any organization to support.
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="container mx-auto px-4 py-12 md:py-16">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
				Let's Connect!
			</h2>
			<p class="text-lg text-gray-600 mb-8">
				I'm open to collaborating on challenging projects.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="https://t.me/your-telegram"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
					aria-label="Contact on Telegram"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
					</svg>
					Telegram
				</a>
				<a
					href="https://linkedin.com/in/your-profile"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
					aria-label="Contact on LinkedIn"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
					LinkedIn
				</a>
			</div>
		</div>
	</section>
</div>

