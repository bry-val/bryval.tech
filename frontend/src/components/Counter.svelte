<script>
    import { onMount } from 'svelte';

    let count = 0;

    function updateView() {
        fetch('https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count', { method: 'POST' })
            .catch(error => console.error('Error:', error));
    }

    async function getCount() {
        const response = await fetch("https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count");
        count = await response.json();
    }

    onMount(() => {
        updateView(); 
        getCount();
    });
</script>

<div class="counter">
    <h1 id="counter">Count: {count}</h1>
</div>

