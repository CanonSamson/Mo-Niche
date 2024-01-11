import Icon from './Icon'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div
      className={` ${
        search ? 'flex' : 'hidden'
      } fixed z-[55] flex-col min-w-full top-0 right-0 h-screen bg-white p-4`}
    >
      <div className=" pb-4">
        <button onClick={() => setSearch(false)}>
          <Icon name="close" size={24} />
          <span>Cancel</span>
        </button>
      </div>
      <form action="">
        <div className=" px-2 flex items-center gap-2 border border-gray-400">
          <input
            type="text"
            className=" focus:outline-none h-[40px] flex-1"
            placeholder="Search "
          />
          <Icon name="search" size={24} />
        </div>
      </form>

      <div className=" border-red-500">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

const Empty = () => {
  return (
    <div>
      <span>0 results for “ holiday ”</span>
      <span>
        Try again with different words or find inspiration among our
        recommendations.
      </span>
    </div>
  )
}


export default SearchBar
