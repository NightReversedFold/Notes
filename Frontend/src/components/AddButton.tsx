import type {handlerSet} from '../types/StateSetters'


export default ({
  hideState,
  toggleHideState
}: handlerSet) => (
  <button
    onClick={() => {
      toggleHideState(!hideState);
    }}
    className={`lg:absolute lg:right-16 lg:p-5 ${
      hideState ? "bg-red-400" : "bg-[#45926a]"
    } rounded-2xl p-1  hover:cursor-pointer`}
  >
    {hideState ? "Cancel" : "Add"}
  </button>
);
