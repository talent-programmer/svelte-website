<script>
    import Section from "../section.svelte";
</script>

<style>
    h2 {
        text-align: center;
    }

    strike {
        color: var(--light-grey);
    }
</style>

<Section>
    <div class="row">
        <h2 class="h2">
            Choose project,
            <br />
            <strike>
                check dependencies, checkout branch, view readme.txt, install
                tools, run build, run test,
            </strike>
            <br />
            start coding.
        </h2>
    </div>
</Section>
