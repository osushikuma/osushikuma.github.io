<template>
  <div class="my-resume gutter gutter-y">
    <section>
      <h3>Experience</h3>
      <ExperienceCard :item="acn" />
      <ExperienceCard :item="ezlife" />
      <ExperienceCard :item="wtw" />
      <ExperienceCard :item="pcm" />
      <ExperienceCard :item="linkage" />
    </section>
    <section>
      <h3>Education</h3>
      <ExperienceCard :item="slu" />
    </section>
    <section>
      <h3>Skills</h3>
      <div class="my-resume__card">
        <PrimarySkills />
        <TechnicalSkills />
      </div>
    </section>
    <section>
      <h3>Language</h3>
      <ExperienceCard :item="language" />
    </section>
  </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";
import PrimarySkills from "./PrimarySkills.vue";
import TechnicalSkills from "./TechnicalSkills.vue";

export default {
  app: "MyResume",
  components: {
    ExperienceCard,
    PrimarySkills,
    TechnicalSkills,
  },
  data() {
    return {
      acn: {
        img: "acn.png",
        date: "Mar 2021 - Present",
        position: "Packaged App Development Senior Analyst",
        company: "Accenture Inc.",
        location:
          "19/F Uptown Tower 3, 11th Avenue, Bonifacio Global City, Taguig City, Metro Manila",
        descriptions: [
          "1st Project:",
          "Took an active role in rebuilding the client's project using Sitecore 10 with Backbone.js, Zurb Foundation and Sass architecture.",
          "Independently spearheaded the creation of comprehensive documentation for the front-end team's reference and future development.",
          "Led knowledge transfer sessions for three front-end developers from the client's team, effectively equipping them with the necessary skills to work with Sitecore.",
          "Assumed a leadership position within the front-end team, guiding and overseeing the team's efforts to achieve project objectives.",
          "2nd Project:",
          "Led the entire front-end team as the sole front-end developer in a successful project to rebuild the application using Sitecore JSS, Next.js, and Tailwind CSS.",
          "Architected and created the foundational front-end structure using Next.js and Tailwind CSS.",
          "Mentored Sitecore developers in understanding and integrating Tailwind CSS into their workflow, fostering a collaborative and efficient development environment.",
          "Collaborated closely with Sitecore developers, providing expertise in front-end development and assisting with complex descriptions. I effectively supported the team in meeting project requirements by verifying deliverables against acceptance criteria, ensuring the high-quality implementation of front-end components within the Sitecore JSS framework.",
          "Developed comprehensive documentation for the front-end aspects of the project, ensuring seamless knowledge transfer and future maintenance.",
          "Collaborated closely with the UI/UX team utilizing Figma, promoting a cohesive design-to-implementation process and delivering a polished user experience.",
          "Training:",
          "Received training in Sitecore JSS, GraphQL, AWS, and SAP, expanding my technical knowledge and versatility.",
        ],
        technology:
          "Backbone.js, Figma, Google Tag Manager, Gulp, JavaScript, jQuery, MS Azure, Next.js, Node.js, NPM, Post CSS, React, Sass, SEO, Sitecore 10, Sitecore JSS, Slick Carousel, Tailwind CSS, Typescript, Zurb Foundation, Yarn",
      },
      ezlife: {
        img: "ezlife.png",
        date: "Nov 2018 - Jan 2021",
        position: "Software Developer",
        company: "EZlife Software Solutions Inc.",
        location:
          "888 Cayetano Ave, C5, Carlos P. Garcia Ave Ext, Taguig City, Metro Manila",
        descriptions: [
          "Developed and supported HR management system software in MVC architecture using ASP.NET, C# Razor, HTML, Bootstrap, SASS, jQuery, DataTables, Dynatable, and Selectize.",
          "Collaborated with BSAs and QAs, utilizing Jira and Confluence to design and develop new features and wireframes.",
          "Acquired back-end support skills with understanding of C# and SQL.",
          "Assisted advertising team in performing product demos for clients.",
          "Introduced React integration to the existing application using webpack and Material-UI.",
        ],
        technology:
          "ASP.NET, Bootstrap, C#, Confluence, DataTables, Dynatable, HTML, JIRA, jQuery, Material UI, MS SQL Node.js, NPM, Razor, React, Sass, Selectize, Webpack",
      },
      language: {
        descriptions: [
          "Tagalog (Native)",
          "Pangasinan (Native)",
          "English (Professional)",
          "Ilocano (Elementary)",
          "Japanese (Elementary)",
        ],
      },
      linkage: {
        img: "linkage.png",
        date: "Apr 2014 - Jul 2014",
        position: "Student Intern",
        company: "Linkage Web Development",
        location: "First Road, Quezon Hill, Baguio City, Benguet",
        descriptions: [
          "Assisted the marketing department in identifying potential clients through targeted keyword searches on social media platforms.",
          "Utilized Adobe Photoshop to analyze design elements, extract photos, and retrieve color schemes provided by the UI/UX designer.",
          "Collaborated closely with the UI/UX designer to address specific requests related to user experience enhancements.",
          "Constructed websites using HTML, CSS, LESS, SCSS, Foundation, WooThemes, JavaScript, and jQuery based on provided web designs.",
          "Employed Bootstrap and various jQuery plugins to create responsive websites.",
          "Imported and transferred codes and structures to WordPress, installed plugins, and optimized websites for optimal performance.",
        ],
        technology:
          "Adobe Photoshop, Bootstrap, HTML, JavaScript, jQuery, LESS SCSS, Zurb Foundation, WooThemes, Wordpress, Wordpress plugins",
      },
      pcm: {
        img: "pcm.png",
        date: "Mar 2016 - Jul 2017",
        position: "Associate Front End Web Developer",
        company: "PCM BPO LLC",
        location:
          "2/F EDSA Central Pavilion Bldg, EDSA corner United Street, Mandaluyong City, Metro Manila",
        descriptions: [
          "Enhanced technical expertise in front-end development and improvements.",
          "Collaborated with business teams to understand requirements, creating web mock-ups and functional HTML models.",
          "Utilized Slack and Trello for scrum and agile management.",
          "Proficient in Adobe Photoshop, HTML, Bootstrap, SASS, jQuery, and other jQuery plugins for web design implementation and eCommerce components.",
          "Provided accurate timing estimates for front-end fixes, enhancements, and projects.",
          "Used Git and Bitbucket for code versioning.",
          "Deployed initial HTML codes using CMS for validation and changes.",
          "Utilized Tooltwist to create widgets and deploy finalized HTML codes.",
          "Maintained brand standards and followed corporate style guide.",
        ],
        technology:
          "Adobe Photoshop, Bitbucket, Bootstrap, DataMaps, D3, Git, HTML, jQuery, Sass, Slack, Tooltwist, Trello",
      },
      slu: {
        img: "slu.png",
        date: "2011 - 2015",
        position: "Bachelor's Degree in Information Technology",
        company: "Saint Louis University",
        location: "A. Bonifacio Street, ABCR, Baguio City, Benguet",
        technology:
          "CSS, Eclipse, HTML, IntelliJ IDEA, Java, JavaScript, MySQL, Apache NetBeans, PHP, SQL, Subversion",
      },
      wtw: {
        img: "wtw.png",
        date: "Jul 2017 - Oct 2018",
        position: "Application Configuration Analyst",
        company: "Wilis Towers Watson",
        location:
          "10/F Bonifacio One Technology Tower, Bonifacio Global City, Taguig City, Metro Manila",
        descriptions: [
          "Reviewed technical specifications to support desired application functionality.",
          "Validated, formatted, and uploaded configuration-related data using Microsoft Excel.",
          "Applied approved look and feel using Confirmit, JavaScript, and plugins as needed.",
          "Conducted basic application testing, identifying and reporting errors promptly.",
          "Launched applications to client distribution lists and generated necessary reports.",
          "Utilized JIRA to analyze and resolve configuration issues and address client concerns.",
          "Collaborated with team members using Microsoft Excel, Access, and case management tools for workflow and documentation.",
        ],
        technology:
          "Confirmit (now Forsta), JavaScript, JIRA, Microsoft Access, Microsoft Excel",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.my-resume {
  align-items: center;
  background-color: var(--color-amethyst);
  display: flex;
  flex-direction: column;
  gap: 30px;
  section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 780px;
    width: 100%;
    h3 {
      color: var(--color-beige);
      font-size: 20px;
      font-weight: 700;
    }
  }
  &__card {
    background-color: var(--color-gray-4);
    border-radius: 6px;
    box-shadow: 0 6px 12px var(--color-amethyst);
    font-size: 14px;
    line-height: 1.5;
    padding: 30px;
  }
}
@media screen and (min-width: 768px) {
  .my-resume {
    gap: 42px;
    section {
      gap: 30px;
      h3 {
        font-size: 28px;
      }
    }
  }
}
</style>
