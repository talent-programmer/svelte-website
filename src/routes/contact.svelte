<script lang="ts">
  import type { ContactCard } from "../types/contact-card.type";
  import Card from "../components/contact/card.svelte";
  import OpenGraph from "../components/open-graph.svelte";

  const contactCards: ContactCard[] = [
    {
      btnHref: "https://community.gitpod.io",
      btnText: "Open community",
      description:
        "If you are looking for help for common requests pease visit our community.",
      title: "Ask the community",
      image: "contact-1.png",
      imgHeight: "130",
      imgWidth: "142",
    },
    {
      btnHref: "/docs",
      btnText: "Open documentation",
      description:
        "If you want to find out if you are elegible for our professional open source programm you can check out our docs.",
      title: "Professional Open Source",
      image: "contact-2.png",
      imgHeight: "130",
      imgWidth: "142",
    },
  ];

  const subjects = [
    "Question about Gitpod Self-Hosted",
    "Question about Gitpod's Paid Plans",
    "Applying for Professional Open Source",
    "Applying for the Custom IDE Beta",
    "Student Unlimited: Get Verified as a Student",
  ];

  let formData: {
    consent: string;
    email: string;
    message: string;
    name: string;
    selectedSubject: string;
  } = {
    consent: "",
    email: "",
    message: "",
    name: "",
    selectedSubject: "",
  };

  const handleSubmit = () => {
    console.log(formData);
    // TODO: Implement form validation
    // TODO: Submit Netlify form. See https://github.com/gitpod-io/website/blob/master/src/pages/contact.tsx#L148
  };
</script>

<style>
  form {
    max-width: 45rem;
    margin: auto;
  }
  input,
  textarea {
    all: unset;
    font: inherit;
    color: var(--dark-grey);
  }
  [type="radio"],
  [type="checkbox"] {
    position: absolute;
  }
  label,
  legend,
  [type="email"],
  [type="text"] {
    display: block;
    color: var(--dark-grey);
    margin-bottom: 0.5rem;
  }
  [type="email"],
  [type="text"],
  textarea {
    width: 100%;
  }
  li {
    margin-bottom: 2rem;
  }
  fieldset,
  [type="checkbox"] + label {
    display: flex;
    gap: 1rem;
  }
  fieldset {
    flex-flow: row wrap;
  }
  legend {
    flex: 100%;
  }
  [type="email"],
  [type="text"],
  [type="radio"] + label,
  textarea {
    border: 1px solid var(--divider);
    padding: 0.5rem 1rem;
    border-radius: 0.5em;
  }

  [type="checkbox"] + label::before {
    content: "";
    border: 1px solid var(--divider);
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;
    border-radius: 0.5em;
    background-clip: content-box;
    display: inline-block;
  }
  [type="checkbox"]:checked + label::before {
    background-color: currentColor;
    border-color: currentColor;
  }
  [type="radio"]:hover + label,
  [type="radio"]:focus + label,
  [type="radio"]:checked + label {
    border-color: currentColor;
  }
  [type="radio"]:checked + label {
    background-color: var(--sand-light);
  }
</style>

<OpenGraph
  data={{
    description: "Reach out if you have any questions regarding Gitpod.",
    title: "Contact us",
    type: "website",
  }}
/>
<header>
  <h1>Contact us</h1>
  <p>Please reach out if you have any questions regarding Gitpod.</p>
</header>

<div class="cards double">
  {#each contactCards as contactCard}
    <Card {contactCard} />
  {/each}
</div>

<section class="card">
  <form on:submit|preventDefault={handleSubmit}>
    <ul>
      <li>
        <label for="name">Name*</label>
        <input
          id="name"
          bind:value={formData.name}
          type="text"
          autocomplete="name"
          required
        />
      </li>
      <li>
        <label for="email">E-Mail*</label>
        <input
          id="email"
          bind:value={formData.email}
          type="email"
          required
          autocomplete="email"
        />
      </li>
      <li>
        <fieldset>
          <legend>Please choose a subject</legend>
          {#each subjects as subject, index}
            <input
              id="subject-{index}"
              type="radio"
              bind:group={formData.selectedSubject}
              value={subject}
              name="subject"
            />
            <label for="subject-{index}">{subject}</label>
          {/each}
        </fieldset>
      </li>
      <li>
        <div>
          <label for="message">Your message*</label>
          <textarea
            id="message"
            bind:value={formData.message}
            cols="30"
            rows="10"
            required
          />
        </div>
      </li>
      <li>
        <input
          id="consent"
          bind:value={formData.consent}
          type="checkbox"
          required
        />
        <label for="consent"
          >I consent to having this website store my submitted information so
          that a support staff can respond to my inquiry.</label
        >
      </li>
      <li>
        <button class="btn-conversion">Send message</button>
      </li>
    </ul>
  </form>
</section>
