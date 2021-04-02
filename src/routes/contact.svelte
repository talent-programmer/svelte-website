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
      <!-- add class="error" to the li when the content of that li are not valid -->
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
        <label for="message">Your message*</label>
        <textarea
          id="message"
          bind:value={formData.message}
          cols="30"
          rows="10"
          required
        />
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
        <button type="submit" class="btn-conversion" disabled
          >Send message</button
        >
      </li>
    </ul>
  </form>
</section>
