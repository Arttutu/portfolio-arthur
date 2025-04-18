export default function Titles({ title }) {
  return (
    <>
      <h2 className="text-lg    mb-2 sm:text-2xl text-slate-900 dark:text-white ">
        {title}
      </h2>
      <div className="w-16 h-1 bg-colors-destaque  rounded-xl mb-4"></div>
    </>
  )
}
