<script>
  import Field from './Field.svelte';

  export let fields = [];
</script>

<div class="fields uppercase">
    {#each fields as field, i}
        <div class="field-group mr-1">
            <Field {field}/>
            <br>
        </div>
    {/each}
</div>

<style>
    .fields {
        width: 100%;
        font-size: 0.9em;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .field-group:last-of-type {
        margin-right: 0;
    }

    @media only screen and (max-width: 700px) {
        .field-group {
            width: 100%;
            margin: 0;
        }
    }
</style>
