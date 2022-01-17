module.exports = {
  title: `computasha.com`,
  description: `하고 싶은 게 많은 개발자`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://computasha.github.io`,
  ogImage: `/og_image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      src: "https://utteranc.es/client.js",
      repo: `compuTasha/blog-comments`, // `zoomkoding/zoomkoding-gatsby-blog`,
      'issue-term': "pathname",
      label: "utterances",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    },
  },
  ga: 'G-4V4NWVS40W', // Google Analytics Tracking ID
  author: {
    name: `김미주`,
    bio: {
      role: `개발자`,
      description: ['기록을 좋아하는', '하고 싶은 게 많은', '이로운 것을 만드는'],
      thumbnail: 'profile.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/compuTasha`,
      linkedIn: `https://www.linkedin.com/in/mijoo-kim-58b099167/`,
      email: `mijookim.tasha@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01 ~',
        activity: '블로그 시작',
      },
      {
        date: '2022.01 ~',
        activity: 'AWS Cloud Bootcamp 참여',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
