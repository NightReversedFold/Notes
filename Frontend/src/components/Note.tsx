import type { note } from "../types/ObjectTypes";

export default ({ author, content }: note) => (
  <div>
    <div className="size-70 bg-[#3d3c3c] p-5 pb-5">
      <h2 className="text-3xl">{author}</h2>
      <p className="mt-10 text-wrap break-words">{content}</p>
    </div>

  </div>
);
