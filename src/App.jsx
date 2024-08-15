import { DragMain } from "./components/Draggable/DragMain";

export default function App() {
  return (
    <div className="">
      <div className="pt-10 pb-5">
        <h1 className="text-3xl font-bold underline text-center">
          React Drag-and-Drop UI with Resizable and Interactive Cards
        </h1>
        <p className="text-center px-8 text-balance">
          The cards are fully resizable and can be connected using arrows,
          providing a dynamic and customizable interface. The project supports
          smooth drag-and-drop functionality, allowing users to easily organize
          and manage their cards on the canvas
        </p>
      </div>

      <div className="h-[80vh] max-w-7xl mx-auto w-full mb-20 px-8 sm:px-12 lg:px-0">
        <DragMain />
      </div>
    </div>
  );
}
