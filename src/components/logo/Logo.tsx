import './Logo.css'

function Logo({name, title}: {name: string; title: string}) {
  return (
    <>
    <div className="flex flex-col justify-center items-end">
      <div className="skew-x-[25deg] bg-[#6F6BF2] p-8 lg:hover:-translate-x-10 duration-1000 mb-1 w-[18em] md:w-[25em] lg:w-auto">
          <h1 className="name text-bold uppercase text-3xl text-center lg:text-5xl -skew-x-[25deg]">{name}</h1>
      </div>
      <div className="-skew-x-[25deg] skew-y-4 bg-[#474747] p-5 text-center lg:hover:translate-x-10 duration-1000 w-[15em] lg:w-auto">
          <h1 className="title text-bold uppercase text-xl lg:text-3xl skew-x-[25deg]">{title}</h1>
      </div>
    </div>
    </>
  );
}

export default Logo;
