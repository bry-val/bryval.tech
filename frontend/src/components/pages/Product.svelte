<script>
  import Card from '../../shared/Card.svelte';

  export let product = {
    title: '',
    icon: '',
    description: ''
  };
</script>

<!-- <Card>
    <div class="container">
        <div class="product-title mb-2">
            <i class="mdi mdi-48px {product.icon} mr-1 primary-color"></i>
            <span class="uppercase">{product.title}</span>
        </div>
        <span>{product.description}</span>
    </div>
</Card> -->

<Card>
    <div class="container">
        <i class="mdi mdi-48px {product.icon} primary-color mr-1"></i>
        <div>
            <span class="block primary-color">{product.title} </span>
            <p>{product.description}</p>
        </div>
        
    </div>
</Card>

<style>
    /* .container {
        width: 100%;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    } */

    .container {
        display: flex;
        justify-content: space-between;
    }
    
    .product-title {
        display: flex;
        align-items: center;
    }
</style>

