<script>
    import { onMount } from 'svelte';

    let count = 0;

    function updateView() {
        fetch('arn:aws:apigateway:us-east-1::/apis/qva7ihmm4j/routes/f3zlwuk', { method: 'POST' })
            .catch(error => console.error('Error:', error));
    }

    function getCount() {
        fetch('arn:aws:apigateway:us-east-1::/apis/qva7ihmm4j/routes/uyr5ud2')
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