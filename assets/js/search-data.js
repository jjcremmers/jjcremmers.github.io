// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-themes",
              title: "Themes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-supervised-phd-theses",
              title: "Supervised PhD theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-courses",
              title: "Courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-bsc-theses",
              title: "BSc Theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-msc-theses",
              title: "MSc Theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-ai-in-education",
          title: "AI in education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai_in_education/";
          },
        },{id: "dropdown-dawn",
              title: "Dawn",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-pyfem",
              title: "PyFEM",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-other-codes",
              title: "Other codes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-people",
              title: "People",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-food-festival",
              title: "Food Festival",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "courses-principles-of-design-and-programming",
          title: 'Principles of Design and Programming',
          description: "2023-",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4ca10/";
            },},{id: "courses-circular-electronics",
          title: 'Circular Electronics',
          description: "2024-",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4cblw00-11/";
            },},{id: "courses-multi-disciplinary-cbl",
          title: 'Multi-Disciplinary CBL',
          description: "2025-",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4cblw00/";
            },},{id: "courses-programming-project",
          title: 'Programming Project',
          description: "Bachelor, Year 3",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4ee12/";
            },},{id: "courses-scientific-computing",
          title: 'Scientific Computing',
          description: "2015-",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4em30/";
            },},{id: "courses-experimental-and-numerical-skills",
          title: 'Experimental and Numerical Skills',
          description: "2015-2025",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4mc00/";
            },},{id: "courses-composite-and-light-weight-materials",
          title: 'Composite and Light Weight Materials',
          description: "Design and Analysis",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4mm00/";
            },},{id: "courses-advanced-and-additive-manufacturing",
          title: 'Advanced and Additive Manufacturing',
          description: "2022-",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4mm60/";
            },},{id: "courses-mechanics",
          title: 'Mechanics',
          description: "2008-2023",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4ra00/";
            },},{id: "courses-engineering-design",
          title: 'Engineering Design',
          description: "2015-2023",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4wbb0/";
            },},{id: "courses-dynamics",
          title: 'Dynamics',
          description: "Bachelor, Year 1, Delft University of Technology",
          section: "Courses",handler: () => {
              window.location.href = "/courses/dynamics/";
            },},{id: "courses-the-partition-of-unitvy-method",
          title: 'The Partition of unitvy Method',
          description: "A series of lectures part of the ENgineering Mechanics Graduate School",
          section: "Courses",handler: () => {
              window.location.href = "/courses/po1/";
            },},{id: "courses-statics",
          title: 'Statics',
          description: "Bachelor, Year 1, Delft University of Technology",
          section: "Courses",handler: () => {
              window.location.href = "/courses/statics/";
            },},{id: "courses-truss-structure-cbl-course",
          title: 'Truss Structure CBL course',
          description: "2008-2015",
          section: "Courses",handler: () => {
              window.location.href = "/courses/truss/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-new-paper-out",
          title: 'New paper out!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/paper_semicon/";
            },},{id: "news-start-of-new-md-cbl-course",
          title: 'Start of new MD-CBL course',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/mdcbl_start/";
            },},{id: "news-does-chatgpt-make-you-smarter-or-lazier-and-more-dependent-interview-with-cursor",
          title: 'Does ChatGPT make you smarter? Or lazier and more dependent? Interview with Cursor...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/cursor_chatgpt/";
            },},{id: "news-phd-defence-britt-cordewener",
          title: 'PhD Defence Britt Cordewener',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/defence_britt/";
            },},{id: "news-britt-cordwener-successfully-defended-her-phd-thesis",
          title: 'Britt Cordwener successfully defended her PhD Thesis.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/phd_britt/";
            },},{id: "news-ai-connector",
          title: 'AI Connector',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ai_connector/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-2f2s",
          title: '2F2S',
          description: "Numerical modelling of Hydraulic Fracturing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2f2s/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-admire",
          title: 'ADMIRE',
          description: "Adaptive Delamination Modelling with Isogeometric Analysis Representation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/admire/";
            },},{id: "projects-amazing",
          title: 'AMAZING',
          description: "Computational models for sintered ceramics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amazing/";
            },},{id: "projects-ampere",
          title: 'AMPERE',
          description: "Fast simulation of photo-polymerisation processes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ampere/";
            },},{id: "projects-fracture-network-formation",
          title: 'Fracture Network Formation',
          description: "Numerical modeling and validation of fracture network formation in anisotropic media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anistropic_cracks/";
            },},{id: "projects-pressure-vessels",
          title: 'Pressure Vessels',
          description: "Impact behavior of thick-walled composite-overwrapped pressure vessels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bmw/";
            },},{id: "projects-carbfrac",
          title: 'CARBFRAC',
          description: "Multiscale model for crack growth in saturated porous media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/carbfrac/";
            },},{id: "projects-extreme-composites",
          title: 'Extreme composites',
          description: "Muliscale modelling of the long term behaviour of composites in harsh conditions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/composite_PVDF/";
            },},{id: "projects-ctrl-p",
          title: 'Ctrl-P',
          description: "Machine learning to optimise 3D print processes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ctrlp/";
            },},{id: "projects-ctrl-p2",
          title: 'Ctrl-P2',
          description: "Machine learning to optimise 3D print processes 2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ctrlp2/";
            },},{id: "projects-dipmet",
          title: 'DIPMET',
          description: "Deposition of metal powder for 3D printing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dipmet/";
            },},{id: "projects-finite-strain-discrete-dislocation-plasticity",
          title: 'Finite Strain Discrete Dislocation Plasticity',
          description: "Applications and New Developments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dislocations/";
            },},{id: "projects-edsgr",
          title: 'EDSGR',
          description: "a dedicated tool to tutor students in programming exercises",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edsgr/";
            },},{id: "projects-eires",
          title: 'EIRES',
          description: "Numerical and Experimental Analysis of the Sintering Behaviour of Ceramic Bilayer Membranes for Hydrogen Separation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eires/";
            },},{id: "projects-development-of-a-g-code-reader-for-finite-element-simulations-of-additive-manufacturing-processes",
          title: 'Development of a G-Code reader for Finite Element Simulations of Additive Manufacturing processes...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gcodereader/";
            },},{id: "projects-hybman",
          title: 'HYBMAN',
          description: "Numerical simulation of FFF printing processes for structural electronics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hybman/";
            },},{id: "projects-jubart",
          title: 'JuBART',
          description: "Reporting tool for students in higher education",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jubart/";
            },},{id: "projects-lee-bed",
          title: 'LEE-BED',
          description: "Multi-physics simulations for faiure in conductive materials",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lee-bed/";
            },},{id: "projects-multiscale-composites",
          title: 'MultiScale Composites',
          description: "Multiscale modelling of failure in thin-ply textile composites using Isogeometric Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lighter/";
            },},{id: "projects-maaximus",
          title: 'MAAXIMUS',
          description: "Isogeometric models for thin walled structures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/maaximus/";
            },},{id: "projects-metamat",
          title: 'METAMAT',
          description: "Reduced Order Modelling using Wavelet discretisation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metamat/";
            },},{id: "projects-metpam",
          title: 'METPAM',
          description: "Production of Metal Powder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metpam/";
            },},{id: "projects-mm3d",
          title: 'MM3D',
          description: "Computational model for metal powderbed fusion printing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mm3d/";
            },},{id: "projects-protechtion",
          title: 'ProTechTion',
          description: "Multiscale modulling of woven composites",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multiscale_composites/";
            },},{id: "projects-poromult",
          title: 'POROMult',
          description: "Multiscale computational poromechanics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/must/";
            },},{id: "projects-natural-fibre-composites",
          title: 'Natural fibre composites',
          description: "Study on the effecto of moisture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/natural_composites/";
            },},{id: "projects-failure-in-textile-composites",
          title: 'Failure in textile composites',
          description: "A physics based modelling approach",
          section: "Projects",handler: () => {
              window.location.href = "/projects/physicsbasedcomposites/";
            },},{id: "projects-protechtion",
          title: 'ProTechTion',
          description: "Multiscale modulling of woven composites",
          section: "Projects",handler: () => {
              window.location.href = "/projects/protechtion/";
            },},{id: "projects-semicon05",
          title: 'Semicon05',
          description: "Accurate, multi-physics simulations of VAT Photopolymerisation processes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semicon05/";
            },},{id: "projects-shawave",
          title: 'SHAWave',
          description: "Efficient analysis of wave propgation in shallow subsurfaces",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shawave/";
            },},{id: "projects-tasti",
          title: 'TASTI',
          description: "Efficient simulation of contact for biomedical applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tasti/";
            },},{id: "projects-tesco",
          title: 'TESCO',
          description: "Numerical simulation of FFF printing processes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tesco/";
            },},{id: "projects-upsim",
          title: 'UPSIM',
          description: "Reduced Order Models for Contact simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/upsim/";
            },},{id: "projects-materials-and-processes-for-additive-manufacturing",
          title: 'Materials and Processes for Additive Manufacturing',
          description: "Accurate Simulation of the VAT Photopolymerisation process for ceramics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vat/";
            },},{id: "studentprojects-ctrl-p2",
          title: 'Ctrl-P2',
          description: "Machine learning to optimise 3D print processes 2",
          section: "Studentprojects",handler: () => {
              window.location.href = "/studentprojects/ctrlp2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A.%6A.%63.%72%65%6D%6D%65%72%73@%74%75%65.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jjcremmers", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5823-2558", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Joris-Remmers/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=C5l2Pb8AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.tue.nl/en/research/researchers/joris-remmers", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
