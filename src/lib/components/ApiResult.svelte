<script>
  export let name = '';
  export let age = null;
  export let count = null;
  export let error = false;
</script>

{#if error}
  <p class="result error">❌ Ocorreu um erro ao buscar a idade.</p>
{:else if age !== null}
  <p class="result">
    Nome: <strong>{name}</strong><br />
    Idade estimada: <strong>{age}</strong> anos<br />
    Baseado em <strong>{count}</strong> registros.
  </p>
{/if}

<style>
    .result {
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 6px;
}

.result strong {
  color: #00e676;
}

.result.error {
  color: #ff6b6b;
}
</style>