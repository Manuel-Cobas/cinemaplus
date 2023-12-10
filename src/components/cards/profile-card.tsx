import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";

export function ProfileCard() {
  return (
    <div className="absolute right-0 left-0 bottom-0 flex items-center justify-between px-4 py-3 bg-blue-500">
      <button type="button" className="flex items-center gap-2">
        <FaUserCircle className="text-3xl text-white" />
        <span className="text-white text-lg font-bold italic">
          Manuel Cobas
        </span>
      </button>

      <button type="button" className="">
        <AiTwotoneSetting className="text-2xl cursor-pointer transition-transform duration-100 hover:rotate-180 text-white" />
      </button>
    </div>
  );
}

/** TODO: Mejorar Semantica */
