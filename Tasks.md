Space Tourism Website - Tasks

1. Set up project (feature/setup)

- Install create-reacte-app
- Remove unnecessary files and dependencies
- Install dependencies
  - ESlint
  - React Route
  - Styled Components
  - add prettier config file
- Move assets to src folder
  - Organize asset data in assets_data file. Import images to pass to components.
- Create main component folders and files, create basic component for each.
  - Navbar
    - Sidebar as sub-component
  - Home
  - Destination
  - Crew
  - Technology
- Add GlobalStyles to index.js to pass basic styling.
  - Pass margin/padding 0px along with color variables.

2. Setup main router paths

- Resources:
  - https://reactrouter.com/en/main/getting-started/overview
  - https://annysah.hashnode.dev/build-a-sidebar-menu-with-react-typescript-and-styled-components-ckwkykpm80hs7gns112nycvvy
- Create sidebarData.js file to hold name, path, and icons? for paths.
- Map router paths to basic navbar to test route functionality. Be able to access each page (home, destination, crew, technology)

3. Build homepage styling, navbar, and side bar

- Add basic background to homepage
- Style navbar
- Style sidebar. For now, assume it is unhidden, to make working with it easier. Worry about funtionality later.
- Import sidebar component into navbar. Build out hook logic to control sidebar operation.
