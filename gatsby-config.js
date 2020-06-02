module.exports = {
    siteMetadata: {
        heroTitle: "This is the hero title",
        heroSubtitle: "and this is a longer subtitle, probably in a smaller font",
    },
    plugins: [
        {
            resolve: "@jorsek/gatsby-theme-easydita-og",
            options: {
                CONTENT_RUNTIME_REMOTE: false,
                CONTENT_BUILDTIME_REMOTE: false,
                CONTENT_BUILDTIME_STATIC: true,
                CONTENT_STATIC_DIR: "ezd_content",
                CONTENT_ORG: "",
                CONTENT_ROOTMAP: "",
                CONTENT_TOKEN: "",
            },
        },
    ],
};
