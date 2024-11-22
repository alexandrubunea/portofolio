import './Logo.css'

function Logo({name, title}: {name: string; title: string}) {
  return (
    <>
    <div className="skew-x-[25deg] bg-[#6F6BF2] p-8 bounce-animation">
        <h1 className="name text-bold uppercase text-6xl -skew-x-[25deg]">{name}</h1>
    </div>
    <div className="-skew-x-[25deg] skew-y-4 bg-[#474747] p-5 text-center hover:translate-x-10 duration-1000">
        <h1 className="title text-bold uppercase text-4xl skew-x-[25deg]">{title}</h1>
    </div>
    </>
  );
}

export default Logo;
