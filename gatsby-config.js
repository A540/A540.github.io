module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://a540portfolio.netlify.app/`,
    // Your Name
    name: '박진영',
    // Main Site Title
    title: `박진영 | 신입 백엔드 개발자 포트폴리오`,
    // Description that goes under your name in main bio
    description: `tell. 010-9066-2528 | email. wlsdud2528@naver.com`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/A540`,
    // Optional: LinkedIn account URL
    // linkedin: `https://github.com/RyanFitzgerald/devfolio`,
    // Content of the About Me section
    about: `안녕하십니까. 신입 개발자 박진영입니다. 
<br><br>개발을 공부하는 동안 코드 블럭을 쌓으며 자신도 성장하는 즐거움이 함께 쌓이는 것을 느꼈습니다.
<br>또한 쌓은것들을 무너지지않게 잘 관리 할 수 있는 개발자가 되고자 합니다.`,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Mosoo',
        description:
          '엘리스 트랙 팀 프로젝트 지역, 카테고리 기반 생활 서비스 공유 플랫폼입니다. 원하는 지역과 원하는 여러 서비스를 공유하고 제공받을 수 있습니다.',
        link: 'https://github.com/A540/Elice_Project3_MosooBack',
      },
      {
        name: 'FitInside',
        description:
          '엘리스 트랙 팀 프로젝트 의류 온라인 쇼핑몰 웹사이트입니다. 다양한 카테고리와 상품을 등록하고 여러 회원들이 구매하거나 쿠폰을 사용 할 수 있습니다.',
        link: 'https://github.com/A540/Elice_Project2_Fitinside_Back',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '엘리스 Cloud 트랙 4기',
        description:
          '기간: 24년 06월 ~ 24년 12월\n\nJava 및 Spring framework 전반적인 지식을 배우고 AWS를 활용한 배포 경험을 얻을 수 있었습니다. 또한 팀 프로젝트를 통해 협업과 소통 중심의 개발을 경험 할 수 있었습니다.',
        link: '/',
      },
      {
        name: '인천대학교',
        period: '18년 03 ~ 24년 03월',
        description:
          '기간: 18년 03 ~ 24년 03월 | 학사 졸업 \n\n컴퓨터 공학과를 전공하며 Java, Python, C 등 다양한 언어를 경험하고, 기초적인 알고리즘, 자료구조, 네트워크 개념들을 습득했습니다. 졸업작품 활동 당시 백엔드 개발을 맡으며 해당 진로를 정했습니다.',
        link: '/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Language & Framework',
        description: 'Java | SpringBoot | JPA',
      },
      {
        name: 'DB',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description: 'AWS | Docker | IntelliJ | Git',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
