<script>
  import services from '../../resources/subpages/services';
  import Product from '../components/pages/Product.svelte';
  import Card from '../shared/Card.svelte';
</script>


<span class="block bold mb-2">{services.header}</span>
<div class="services-container">
    {#each services.products as product}
        <div class="product">
            <Product {product}/>
        </div>
    {/each}
</div>


    <!-- <div>
        {#each services.products as product}
            <div class="mb-1">
                <Product {product}/>
            </div>
        {/each}
    </div> -->


<style>
    .product {
        display: flex;
        flex-wrap: wrap;
        width: calc(75% - 15px);
        margin: 0 auto; /* Add this line to center the content */
    }

    .services-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }


    @media only screen and (max-width: 850px) {
        .product {
            width: 100%;
        }

        .services-container {
            column-gap: 0;
            row-gap: 10px;
        }
    }
</style>
