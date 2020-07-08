# Deploying
[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/Jorsek/portal/gatsby-starter-easydita)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://gitlab.com/Jorsek/portal/gatsby-starter-easydita)

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

