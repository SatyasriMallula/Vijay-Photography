import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen bg-black">
       <div
      className="absolute top-15 left-10 w-[350px] h-[350px] rounded-full 
                 bg-[radial-gradient(circle_at_center,theme(colors.blue.900),transparent_90%)] 
                 blur-3xl opacity-70"
      />
        <div
      className="absolute right-15 bottom-10 w-[350px] h-[350px] rounded-full 
                 bg-[radial-gradient(circle_at_center,theme(colors.blue.900),transparent_90%)] 
                 blur-3xl opacity-70"
    />
      <div className="flex justify-center items-center min-h-screen px-4">
    <div className="backdrop-blur-lg bg-white/10 p-10 
   text-center max-w-2xl flex flex-col items-center gap-6 rounded-2xl">
          {/* shadow-[0_0_10px_rgba(59,130,246,0.8),0_0_10px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.4)] 
    rounded-3xl */}
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Blue Eye Logo"
          className="w-24 h-24 mx-auto mb-4 animate-bounce-slow"
        />

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl border-2  font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 tracking-wider animate-focus-in">
          Welcome to <br></br>Blue Eye Photography
          
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-gray-300 text-lg md:text-xl font-light opacity-90 animate-fade-in">
          Every picture tells your story — let's capture yours
          </p>
         <Link 
          href="/home"
          className="mt-3 px-6 py-2 rounded-lg bg-blue-500/20 text-blue-300 
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40">
          Explore
        </Link>
      </div>
</div>
   
    </section>

  );
}
