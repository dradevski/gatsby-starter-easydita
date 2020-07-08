/* eslint-disable @typescript-eslint/no-var-requires */
const provider = require("nconf");

provider
    .file("./portal_config.json")
    .env({
        transform({ key, value }) {
            if (!key.toLowerCase().startsWith("portal")) {
                return false;
            }
            const k = key
                .split("_")
                .map((segment, idx) => (idx > 0 ? `${segment.toUpperCase()}${segment.slice(1)}` : segment))
                .join("");

            console.log(key, value);
            return { key: k, value };
        },
        parseValues: true,
        separator: ".",
    })
    .defaults({ contentClientOpts: {} });

module.exports = {
    siteMetadata: {
        heroTitle: provider.get("heroTitle"),
        heroSubtitle: provider.get("heroSubtitle"),
    },
    plugins: [
        {
            resolve: provider.get("theme"),
            options: {
                CONTENT_RUNTIME_REMOTE: provider.get("contentRuntimeRemote"),
                CONTENT_BUILDTIME_REMOTE: provider.get("contentBuildtimeRemote"),
                CONTENT_BUILDTIME_STATIC: provider.get("contentBuildtimeStatic"),
                CONTENT_STATIC_DIR: provider.get("contentStaticDir"),
                CONTENT_ORG: provider.get("contentOrg"),
                CONTENT_ROOTMAP: provider.get("contentRootmap"),
                CONTENT_TOKEN: provider.get("contentToken"),
                CONTENT_CLIENT_OPTS: provider.get("contentClientOpts"),
            },
        },
    ],
};
