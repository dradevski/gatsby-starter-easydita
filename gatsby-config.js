module.exports = {
    plugins: [
        {
            resolve: "@jorsek/gatsby-theme-easydita-og",
            options: {
                CONTENT_RUNTIME_REMOTE: false,
                CONTENT_BUILDTIME_REMOTE: true,
                CONTENT_BUILDTIME_STATIC: false,
                CONTENT_STATIC_DIR: "ezd_content",
                CONTENT_ORG: "viewpoint",
                CONTENT_ROOTMAP: "698054d0-703f-11ea-8573-0242c5886069",
                CONTENT_TOKEN: "f3c5b7a944cf4197b706cf5c43fc5907",
                CONTENT_TRANSFORMS: [
                    {
                        transformToPage(input) {
                            return {
                                ...input,
                                breadcrumbs: [
                                    {
                                        href: input.breadcrumbs[2].href,
                                        title: `${input.breadcrumbs[1].title} (${input.breadcrumbs[2].title})`,
                                    },
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
