<script>
	import { Button, Heading, P } from 'flowbite-svelte';
	import StepBox from "$lib/components/home/StepBox.svelte";
	import Box from "$lib/components/home/Box.svelte";
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

<div class="xl:px-48 pb-10 flex gap-12 w-full">
	<StepBox step={1}>
		<img class="rounded-full h-40 w-40 object-cover mt-20" alt="Fake Server Icon" src="/police-cat.jpg">
		<P class="text-3xl">meow!! nya~ :3</P>
		<P class="text-3xl mt-10">Login with Discord and choose your server</P>
	</StepBox>
	<StepBox step={2}>
		<div class="mt-20 w-full">
		<Box>
			<div class="m-5 w-full space-y-10">
				<div class="flex">
					<P class="text-3xl grow">Invites</P>
					<div class="w-28 h-14 rounded-full border border-black mr-10 -my-2 bg-[#CFFFC6]">
						<div class="h-10 w-10 float-right rounded-full bg-white border border-black mt-1.5 mr-2"></div>
					</div>
				</div>
				<div class="flex">
					<P class="text-3xl grow">Scams</P>
					<div class="w-28 h-14 rounded-full border border-black mr-10 -my-2">
						<div class="h-10 w-10 rounded-full bg-white border border-black mt-1.5 ml-2"></div>
					</div>
				</div>
				<div class="flex">
					<P class="text-3xl grow">"Brainrot"</P>
					<div class="w-28 h-14 rounded-full border border-black mr-10 -my-2">
						<div class="h-10 w-10 rounded-full bg-white border border-black mt-1.5 ml-2"></div>
					</div>
				</div>
			</div>
		</Box>
		</div>
		<P class="text-3xl mt-10">Enable your modules</P>
	</StepBox>
	<StepBox step={3}>
		<img alt="Invites Module Test" src="/invites-test.png" class="mt-20">
		<P class="text-3xl mt-10">Test your modules</P>
	</StepBox>
</div>
<div class="flex justify-center items-center mb-10">
	<Button class="bg-primary-4 text-black p-5 text-4xl" size="xl">Get Started</Button>
</div>