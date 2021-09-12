<template>
  <div>
    <h1>BookWorms Catalogue </h1>
    <slot name="image"> <!-- slot for the book cover -->
    <img src=""> <!-- Defualt Image is empty -->
    </slot>
    <p>
      <slot name="title"> <!-- slot for the book title -->
        Title <!-- Defualt title string -->
      </slot>
      </p>
       <p>
      <slot name="author"> <!-- slot for the book author -->
        Author name 
      </slot>
      </p>
       <p>
      <slot name="price"> <!-- slot for the book price -->
       $0.00
      </slot>
      </p>
  </div>
</template>

<style scoped>
img { width: 250px;
      height: 400px;

  }

</style>
<script>

</script>