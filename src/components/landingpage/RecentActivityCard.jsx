import './index.css'

export default function RecentActivityCard({ data }) {

  return (
    <div
      className="skew3d group relative mt-6 flex w-56 cursor-pointer flex-col items-center justify-center gap-y-2 transition-all ease-in-out hover:scale-110"
    >
      <div className="absolute top-0 h-72 w-48">
        <div className="opacity-90 absolute bottom-0 left-0 z-10 line-clamp-1 flex h-5 w-48 rounded-b-sm bg-[#00000090] px-1 text-[12px] font-medium tracking-wide backdrop-blur-sm">
          {data?.title}
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
        alt=""
        className="duration-400 z-0 h-72 w-48 animate-fade rounded-sm object-cover transition-all ease-in-out"
      />
    </div>
  )
}
