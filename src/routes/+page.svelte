<script>
  import '$lib/styles/background.css';
  import Box from '$lib/components/Box.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import NameInput from '$lib/components/NameInput.svelte';
  import ApiResult from '$lib/components/ApiResult.svelte';
  import WhatsappButton from '$lib/components/WhatsappButton.svelte';

  export let data;
</script>

<main>
  <Box>
    <PageHeader
      title="Bem-vindo à Voltera"
      subtitle="Descubra a idade estimada de um nome"
    />

    <NameInput value={data.name} />

    <ApiResult
      name={data.name}
      age={data.age}
      count={data.count}
      error={data.error}
    />
  </Box>

  <WhatsappButton />
</main>