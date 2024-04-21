<script>
    import { onMount } from 'svelte';

    let count = 0;

    function updateView() {
        fetch('https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count', { method: 'POST' })
            .catch(error => console.error('Error:', error));
    }

    function getCount() {
        fetch('https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count')
            .then(response => response.json())
            .then(data => {
                count = data.newCount;
            })
            .catch(error => console.error('Error:', error));
    }

    onMount(() => {
        updateView();
        getCount();
    });
</script>

<div class="counter">
    <h1 id="counter">Count: {count}</h1>
</div>