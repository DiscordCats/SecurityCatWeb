<script>
	import { Button, Heading, P } from 'flowbite-svelte';
</script>

<div class="flex h-screen items-center justify-center">
	<div class="space-y-10">
		<Heading tag="h1" class="text-center">
			<span class="text-9xl text-primary-1">Security</span>
			<span class="relative text-9xl text-primary-5">
				<img
					src="/police-hat.png"
					alt="Police Hat on C in cat"
					class="absolute left-7 top-2 z-10 h-14 w-14 rotate-12"
				/>
				Cat
			</span>
		</Heading>
		<Heading tag="h2" customSize="text-3xl" class="text-center text-[#A47373]"
			>The only message blocker you need</Heading
		>
		<div class="flex items-center justify-center">
			<Button class="bg-primary-4 text-black" size="xl">Get Started</Button>
		</div>
        <Heading tag="h3" class="text-center">Work in progress!</Heading>
	</div>
</div>
