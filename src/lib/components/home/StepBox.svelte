<script lang="ts">
    import { P } from 'flowbite-svelte';
    import Box from "$lib/components/home/Box.svelte";
    export let step: number;
</script>

<Box>
    <div class="h-auto m-5 flex justify-center items-center flex-col">
        <P class="text-3xl mb-10 absolute top-5 left-1/2 transform -translate-x-1/2">Step {step}</P>
        <slot />
    </div>
</Box>