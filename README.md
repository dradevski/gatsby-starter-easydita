# Deploying
[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/Jorsek/portal/gatsby-starter-easydita)

# Configuring

The portal framework's starter can be configured two different ways: via the `portal_config.json` file, and via `PORTAL_`-prefixed environment variables. The possible config options are as follows.

---

## Hero Title 
> `heroTitle`, or ` PORTAL_HERO_TITLE`

The string that will be used for the hero title.

## Hero Subtitle
> `heroSubtitle`, or ` PORTAL_HERO_SUBTITLE`

The string that will be used for the hero subtitle.

## Theme
> `theme`, or `PORTAL_THEME`, default: `@jorsek/gatsby-theme-easydita-jsk`

The theme package to use. Currently only `@jorsek/gatysby-theme-easydita-jsk` is available, but more will come.

## Runtime Remote Mode 
> `contentRuntimeRemote`, or ` PORTAL_CONTENT_RUNTIME_REMOTE`

Runtime remote mode enables dynamic content fetching at runtime. This has the effect of the portal being dynamic, where each page loads its content upon load, as opposed to static mode where content is loaded at buildtime and baked into each page.

The content API will, by default, use the [Content Org](#content-org), [Content Rootmap](#content-rootmap), [Content Token](#content-token), and [Content Client Opts](#content-cilent-opts) config, but with some extra code, features like auth can be implemented that dynamically choose values for token/client opts based on the logged in user.

## Buildtime Remote Mode 
> `contentBuildtimeRemote`, or `PORTAL_CONTENT_BUILDTIME_REMOTE`

Buildtime remote mode is one of the two ways to source static content at buildtime. In this mode, [Content Org](#content-org), [Content Rootmap](#content-rootmap), and [Content Token](#content-token) are required. Content is fetched from the API including sections, groups, pages, and binary assets. Each corresponding page is generated from the content API's response, and the site acts as a statically built site.

### Content Org 
> `contentOrg`, or `PORTAL_CONTENT_ORG`

The org ID to use when fetching dynamic content

### Content Rootmap 
> `contentRootmap`, or `PORTAL_CONTENT_ROOTMAP`

The root map ID to use when fetching dynamic content

### Content Token 
> `contentToken`, or `PORTAL_CONTENT_TOKEN`

The token to use when fetching dynamic content

## Buildtime Bundle Mode 
> `contentBuildtimeStatic`, or `PORTAL_CONTENT_BUILDTIME_STATIC`

Buildtime bundle mode works much the same way as buildtime remote mode, except instead of sourcing content from the API, content is sourced from the content bundle that has been unzipped into [Content Static Dir](#content-static-dir).

### Content Static Dir
> `contentStaticDir`, or `PORTAL_CONTENT_STATIC_DIR`, default: `ezd_content`

The root directory of the unzipped content bundle, when in [Buildtime Bundle Mode](#buildtime-bundle-mode)

## Client Options
> `contentClientOpts` or `PORTAL_CONTENT_CLIENT_OPTS`, default: 
> ```
> {
>     "scheme": "https://",
>     "loginRequired": false,
>     "hostName": "content.easydita.com",
>     "rateLimit": {
>         "maxRPS": 10,
>         "maxRequests": 2
>     }
> }
> ```

Options passed to the EasyDITA client. When setting values via environment variables, use `__` to signify object keys. 

For example, to set `contentClientOpts.hostName = "content-trial.easydita.com"`, you would set `PORTAL_CONTENT_CLIENT_OPTS__HOSTNAME="content-trial.easydita.com"`

## Content Transforms

The portal framework supports transforming the three kinds of content it consumes before that content reaches the frontend. Given that these transforms are defined as javascript functions, they can only be defined in javascript. Since the portal supports both [Build](#buildtime-bundle-mode)[time](#buildtime-remote-mode) and [Runtime](#runtime-remote-mode) modes, the transforms need to be available both at buildtime during content sourcing, and at runtime. 

In order to support this, the content transforms will be defined in the `src/transforms/index.ts` file. For example, to combine the first two breadcrumbs into one:

```typescript
// Interface pasted here for context
interface IContentTransformer {
    transformToGroup?(input: any): ISection;
    transformToSection?(input: any): ISection;
    transformToPage?(input: any, section: ISection): IPageContent;
}

export default [
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
]
```

## Gated Features
Some features truly deserve first-class support in the framework, while at the same time need to be disabled for some customers. Those features shall live behind gates, as described here

### Redirect to first content-ful child
> `redirectToFirstContentfulChild`, or `PORTAL_REDIRECT_TO_FIRST_CONTENTFUL_CHILD`, default: `true`

Frequently, sections will exist purely to organize their content pages into a meaningful order, without themselves having any content. This feature causes specific types of content pages to search for, and redirect to the first child that does not meet the redirect conditions in a depth-first manner. These conditions are:

* Page's `type` is `topichead`
* Page's content is an empty string

This feature should be **disabled** for portals that define dynamic intermediate content pages, such as to render the child pages as cards or a list of links.