---
layout: homepage
---

<section class="content-section introduction" aria-labelledby="about-me">
  <h2 id="about-me">About</h2>
  <p class="intro-lead">I am a Ph.D. student in Data Science at <a href="https://www.stonybrook.edu/">Stony Brook University</a>, supervised by <a href="https://renaissance.stonybrookmedicine.edu/neurosurgery/mofakham-mikell-lab">Sima Mofakham</a> and <a href="https://sites.google.com/stonybrook.edu/petardjuric/">Petar Djuric</a>. My broad research interests include multimodal large language models (MLLMs), video understanding, agentic AI, motion analysis, and clinical applications of AI.</p>
  <p>My current work focuses on MLLM post-training, MLLM-based agents, LLM safety, and AI for ICU settings.</p>
  <p>Previously, I earned my M.S. in Data Science at the <a href="https://datascience.ucsd.edu/">Halıcıoğlu Data Science Institute, UC San Diego</a>, where I worked with <a href="https://www.tauhidurrahman.com/">Tauhidur Rahman</a> on event-based vision, synthetic event generation, and continuous motion estimation.</p>
  <p class="contact-note">For research inquiries, please <a href="mailto:{{ site.email }}">contact me by email</a>.</p>
</section>

{% include publication-list.html %}

<section class="content-section" aria-labelledby="experience">
  <h2 id="experience">Research experience</h2>
  <div class="timeline">
    {% for experience in site.data.profile.experience %}
    <article class="timeline-entry">
      <p class="entry-date">{{ experience.dates | escape }}</p>
      <div class="entry-detail">
        <h3>{{ experience.organization | escape }}</h3>
        <p class="entry-role">{{ experience.role | escape }} <span class="entry-institution">{{ experience.institution | escape }}</span></p>
        <p>{{ experience.focus | escape }}</p>
        <p class="entry-supervisor">{{ experience.supervisor_label | default: 'Supervisor' | escape }}: {{ experience.supervisor | escape }}</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

{% include gallery.html %}

{% include visitor-map.html %}
