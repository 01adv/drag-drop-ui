# Drag-and-Drop UI with React Flow

## Project Overview

This project is a basic drag-and-drop user interface built using React.js and the React Flow library. The canvas allows users to add cards, connect them with arrows, and resize the cards. Additionally, the canvas is scrollable, and users can drag and drop the cards anywhere on the canvas.

### Key Features
- **Add Cards:** Users can add cards with titles and descriptions from a sidebar onto the canvas.
- **Connect Cards:** Cards can be connected using arrows to represent relationships or flow between them.
- **Resizable Cards:** Cards can be resized directly on the canvas, allowing for dynamic adjustment of content.
- **Draggable Cards:** Cards can be freely dragged and dropped anywhere on the canvas, providing flexibility in positioning.
- **Scrollability:** The canvas is scrollable, accommodating a large number of cards and connections.

## User Experience
- **Adding Cards:** Users can add new cards from the sidebar by dragging them onto the canvas. Cards can also be edited directly on the canvas, with the ability to update titles and descriptions.
- **Connecting Cards:** By hovering over the card outline, users can click the connection point (dot) and drag an arrow to connect it to another card.
- **Resizing:** After selecting a card, resize handles appear, allowing users to adjust the size of the card as needed.
- **Minimap:** A minimap is available to provide an overview of all the cards on the canvas, helping users navigate large projects.

## Technologies Used
- **React.js:** The project is built with React.js, a popular JavaScript library for building user interfaces.
- **React Flow:** React Flow is used for handling the drag-and-drop functionality, card connections, and other flow-based interactions.

## Setup and Installation
To run this project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/01adv/drag-drop-ui.git
    ```
   
2. **Navigate to the project directory:**
    ```bash
    cd drag-drop-ui
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

5. **Open your browser and go to:**
    ```
    http://localhost:5173
    ```

## Future Improvements
- **Show More Button:** Implement a 'Show More' button to expand the card and display the full text.
- **Popup Functionality:** Add a detailed popup view for cards when 'Show More' is clicked.

## Contributions
Contributions, issues, and feature requests are welcome!

## Acknowledgments
- **React Flow Documentation:** For providing comprehensive examples and documentation that helped in building this project.
- **ChatGPT:** For assisting and providing guidance on various aspects of the project.
