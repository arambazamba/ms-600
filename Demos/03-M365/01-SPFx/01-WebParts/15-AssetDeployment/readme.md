# Asset Deployment

[SharePoint solution packaging](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/notes-on-solution-packaging)

[Introduction to Collaborative Application Markup Language](https://docs.microsoft.com/en-us/sharepoint/dev/schema/introduction-to-collaborative-application-markup-language-caml)

## Demos

- Show Asset Deployment
- Explain Web Pack Bundle Analyzer
- Explain Packaging Metadata

  ```
  "includeClientSideAssets": true,
      "skipFeatureDeployment": false,
      "features": [
      {
          "title": "Asset Deployment Demo",
          "description": "Asset Deployment Demo",
          "id": "d46cd9d6-87fc-473b-a4c0-db9ad9162b64",
          "version": "1.1.0.1",
          "assets": {
          "elementManifests": ["elements.xml"],
          "elementFiles": ["schema.xml"]
          }
      }
      ],
  ```

- Explain Updating