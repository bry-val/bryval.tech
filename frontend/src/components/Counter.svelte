<script>
  import { onMount } from "svelte";

  let count = ".";
  let isLoading = true;

  let intervalId = setInterval(() => {
    if (count.length < 3) {
      count += ".";
    } else {
      count = ".";
    }
  }, 500);

  function updateDatabase() {
    fetch("https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count", {
      method: "POST",
    }).catch((error) => console.error("Error:", error));
  }

  async function getCount() {
    const response = await fetch(
      "https://qva7ihmm4j.execute-api.us-east-1.amazonaws.com/count"
    );
    isLoading = false;
    clearInterval(intervalId);
    count = await response.json();
  }

  onMount(() => {
    updateDatabase();
    getCount();
  });
</script>

<div class="counter">
  <span id="counter">Site Visits: {isLoading ? count : count}</span>
</div>

<style>
  .counter {
    text-align: center;
    font-size: 1.1em;
  }
</style>
