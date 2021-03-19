<script lang="ts" context="module">
    export type FeatureProps = {
        title: string
        paragraph: string
        moreButton: { text: string; href: string }
        documentationLink: string
        preview: { name: string; alt: string }
    }
</script>

<script lang="ts">
    import Section from "./section.svelte";

    export let title: string = "";
    export let paragraph: string;
    export let moreButton: { text: string; href: string };
    export let documentationLink: string;
    export let preview: { name: string; alt: string };
</script>


<style lang="scss">
    .feature {
        display: flex;
        justify-content: space-between;

        &__text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 0 0 50%;
            margin-top: var(--medium);
            font-size: var(--p-large);
        }

        &__preview {
            flex: 0 0 48%;
            
            img {
                border-radius: 2rem;
            }
        }

        .btn {
            &:not(:last-child) {
                margin-right: var(--micro);
            }
        }
    }
</style>

<div class="row">
    <Section>
        <div class="feature">
            <div class="feature__text">
                <div>
                    <h2 class="h3">{title}</h2>
                    <p>{paragraph}</p>
                </div>
                <div class="feature__buttons">
                    <a href={moreButton.href} class="btn btn--small btn--almost-ripe">
                        {moreButton.text}
                    </a>
                    <a href={documentationLink} class="btn btn--small btn--salmon"> Documentation </a>
                </div>
            </div>
            <div class="feature__preview">
                <img src={`/${preview.name}`} alt={preview.alt} />
            </div>
        </div>
    </Section>
</div>
