<script>
  export let title = '';
  export let subtitle = '';
</script>

<h1 class="title">{title}</h1>
<p class="subtitle">{subtitle}</p>

<style>
    .title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 2rem;
  text-align: center;
}
</style>