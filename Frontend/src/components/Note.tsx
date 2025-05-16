import type { note } from "../types/ObjectTypes";

export default ({ author, content }: note) => (
  <div>
    <div className="size-70 bg-[#3d3c3c] p-5 pb-5 ">
      <h2 className="text-3xl">{author}</h2>

      <div className="overflow-y-auto size-full h-50 overflow-hidden  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <p className= "mt-10 text-wrap break-words">{content}</p>
      </div>
    </div>

  </div>
);
