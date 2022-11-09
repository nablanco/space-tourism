Space Tourism Website - Tasks

- Outstandng Issues:
  - (Done) Set /home path as default
  - (Fix for next version) Background image is not properly selected for Destination page when arriving from the 'Explore' button on the Home page.
    - Tried using 'useOutletContext' hook as defined by React Router, but can get it to work. Consider shifting to global context.
  - (Done) Style pages for Desktop
    - (Done) Add navbar styled line
    - (Done) Technology images need to change to portrait on desktop version
  - (Done) Set desktop max width to 1440px so that the app doesnt spread to the edges on larger screens

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

2. Setup main router paths (feature/basic-architecture)

- Resources:
  - https://reactrouter.com/en/main/getting-started/overview
  - https://annysah.hashnode.dev/build-a-sidebar-menu-with-react-typescript-and-styled-components-ckwkykpm80hs7gns112nycvvy
- Create sidebarData.js file to hold name, path, and icons? for paths.
- Map router paths to basic navbar to test route functionality. Be able to access each page (home, destination, crew, technology)

3. Build homepage styling, navbar, and side bar (feature/basic-architecture)

- Add basic background to homepage
- Style navbar
- Style sidebar. For now, assume it is unhidden, to make working with it easier. Worry about funtionality later.
- Import sidebar component into navbar. Build out hook logic to control sidebar operation.
  - (done) Finished building Sidebar styling, but having issues with passing state from parent Navbar to child Sidebar to control opening and closing. Needs review.
- Add homepage styling and link 'Explore' button to '/destination'.

4. Add mobile pages

- Start with Destinations page.
  - Top two text boxes are standard throughout.
  - Image is dependent on selected destination. Use 'useState' to control state of image, as well as text below related to destination.
  - For the destination selection buttons, map through the destinations object in the asset_data array. Clicking on any single button will update the desination index, making it easier to select the specific destination object needed to pass information to the page.
- Background: ove background image from app file to the individual pages. This way they can change when selected and adapt more easily to different screen sizes.
  - This does not work because of <Outlet>. Will have to work out a state system in the App component to set the background and size.
  - New idea for background image in app comp. Import all background images (and sizes) into app, then organize the images into arrays by sizing (ie one array for mobile backgrounds). Then create state which records the selected page. Then, based on the media size, return the appropriate image.
    -Having issues with it, will work on this issue next time. Continue to focus on build out pages styling.
  - Crew
    - Most of Crew mobile styling is complete, excluding the crew selector icons.
      - (DONE)The reason these icons are active is bc the Navlinks sets any Navlink to the activated path to active. Since these Navlinks remain on page, but just change the data on the page, they all stay active. Need to figure out how to pass props to Styled Components with a normal a tag or something.
  - Technologies
    - Technologies mobile styling complete.
