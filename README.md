# SearchJunct
<img width="200" alt="image showing the start page with search box, special-action-buttons, and search systems" src="https://github.com/danielsgriffin/searchjunct/assets/6070690/2297381f-b9fc-4a61-8425-049556cb5c42">

## Overview
SearchJunct is a single-page application designed to facilitate multi-engine search selection and routing. This tool serves as a speculative or exploratory design prototype, providing a platform for wondering, particularly around user interaction with multiple search engines and finding & supporting better tools and practices.

## Running Locally

```bash
http-server . -p 8000
```

### with "P(rocess) M(anager) 2" (pm2)

```zsh
searchjunct % pm2 start "http-server . -p 8000" --name searchjunct
[PM2] Starting /bin/bash in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ searchjunct        │ fork     │ 0    │ online    │ 0%       │ 480.0kb  │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

Note: See also: https://www.npmjs.com/package/pm2 for `pm2 list`, `pm2 stop`, `pm2 restart`, and `pm2 delete`.


## Features
- **Multi-Engine Search Selection:** Enables queries through multiple search engines based on user selection.
- **Client-Side Operation:** All functionalities, including search logging (if opted by the user), operate on the client side to support user privacy.
- **(Under Construction) Manual and Automatic Routing:** Users can manually select desired search engines or rely on automatic routing based on weighted preferences.
- **(Under Construction) Search Logging (Optional):** Optional feature allowing users to store their search history locally, within their browser.
- **Default Search Engine Setup:** Supports users to set SearchJunct as their default search engine.

## Roadmap
The following is a high-level roadmap for the development of SearchJunct. Specific features and improvements will be detailed through GitHub issues and milestones.

1. **Phase 1: Initial Development**
   - Setup basic SPA infrastructure.
   - Implement core search routing functionalities.
      - _Not yet started._
   - Integrate initial set of search engines.

2. **Phase 2: Privacy and Storage Features**
   - Develop optional search logging feature, with clear user consent protocols.
      - _Started._
   - Implement user settings page for managing search preferences and data.

3. **Phase 3: Routing Enhancements and Customization**
   - Introduce manual and automatic routing based on user preferences.
   - Expand customization options within the settings page.

4. **Phase 4: Default Search Engine Integration**
   - Develop and document the method for users to set SearchJunct as their default browser search engine.
      - _Supported, need to document._

5. **Phase 5: Feedback and Refinement**
   - Collect user feedback and make necessary adjustments.
   - Enhance UI/UX based on user interactions and suggestions.

6. **Phase 6: ???**

## Contributing
Contributions are welcome. Please see the issues on the [GitHub](#) for areas where you can help. For new features or bug reports, create a new issue so we can track and discuss it.

## Somewhat Similar Projects

- https://github.com/danielsgriffin/qrs
- https://comparethesearchengines.com/
- https://searchaggregate.com/
- https://justsearchportal.com/
    - https://github.com/larspontoppidan/just-search-portal
- https://www.gnod.com/search/
- https://meta.softwarejourney.net/
- https://randsearch.daniel.priv.no/
- https://www.letssearch.org/
- https://searx.github.io/searx/
    - No longer maintained: https://github.com/searx/searx

Note: This is _not_ intended to be a [metasearch engine](https://en.wikipedia.org/wiki/Metasearch_engine) or search aggregator so much as a search router, a guide to exploring new search tools, and a support for diversifying your search sources.




## Contact
For inquiries or collaboration, please contact Daniel Griffin at [danielsgriffin@berkeley.edu](mailto:danielsgriffin@berkeley.edu).