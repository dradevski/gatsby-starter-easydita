module.exports = {
    siteMetadata: {
        heroTitle: "This is the hero title",
        heroSubtitle: "and this is a longer subtitle, probably in a smaller font"
    },
    plugins: [
        {
            resolve: "@jorsek/gatsby-theme-easydita-jsk",
            options: {
                CONTENT_RUNTIME_REMOTE: false,
                CONTENT_BUILDTIME_REMOTE: false,
                CONTENT_BUILDTIME_STATIC: true,
                CONTENT_STATIC_DIR: "ezd_content",
                CONTENT_ORG: "",
                CONTENT_ROOTMAP: "",
                CONTENT_TOKEN: "",
                CONTENT_TRANSFORMS: [
                    {
                        transformToPage(input) {
                            return {
                                ...input,
                                breadcrumbs: [
                                    ...(input && input.breadcrumbs && input.breadcrumbs[2]
                                        ? [
                                              {
                                                  href: input.breadcrumbs[2].href,
                                                  title: `${input.breadcrumbs[1].title} (${input.breadcrumbs[2].title})`,
                                              },
                                          ]
                                        : []),
                                    ...input.breadcrumbs.slice(3),
                                ],
                            };
                        },
                    },
                ],
            },
        },
    ],
};
