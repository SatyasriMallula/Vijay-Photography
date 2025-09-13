import Image from 'next/image';
export default function Home() {
  // return (

  //   <section className="text-foreground  min-h-screen flex items-center justify-center">
  //     <div className="text-center" >
  //       <h1 className="font-heading text-6xl mb-4 text-accent">Vijay Photography</h1>
  //       <p className="text-lg max-w-xl mx-auto text-gray-100 drop-shadow">Capturing timeless moments with elegance and style.</p>
  //       <button className="mt-6 px-6 py-3 bg-accent text-background rounded-xl hover:opacity-90 transition shadow-lg">
  //         View Portfolio
  //       </button>
  //     </div>
  //   </section >


  // );
    const images = [
    "/Home1/DSC08778.JPG",
    "/Home1/DSC08756.JPG",
    "/Home1/DSC08119.JPG",
    "/Home1/DSC07897.JPG",
    "/Home1/DSC05894.JPG",
    "/Home1/DSC05840.JPG",
    "/Home1/as.JPG",
  ];
  const ImageRow = () => (
    <div className="flex">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`bg${index + 1}`}
          width={800}
          height={600}
          priority
          className="object-cover h-screen w-auto"
          
        />
      ))}
    </div>
  );
return(
  <section className=" w-full h-screen relative overflow-hidden"> 
    <div className=" absolute inset-0 flex  scroll-animation">
      {/* <div className=" flex ">
<Image src="/Home1/DSC08778.JPG" alt="bg1" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC08756.JPG" alt="bg2" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC08119.JPG"alt="bg3" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC07897.JPG" alt="bg4" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC05894.JPG" alt="bg5" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC05840.JPG" alt="bg6" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/as.JPG" alt="bg7" width={800} height={600} className="object-cover h-screen w-auto" />
      </div>
       <div className=" flex ">
<Image src="/Home1/DSC08778.JPG" alt="bg1" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC08756.JPG" alt="bg2" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC08119.JPG"alt="bg3" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC07897.JPG" alt="bg4" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC05894.JPG" alt="bg5" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/DSC05840.JPG" alt="bg6" width={800} height={600} className="object-cover h-screen w-auto" />
          <Image src="/Home1/as.JPG" alt="bg7" width={800} height={600} className="object-cover h-screen w-auto" />
      </div>
      </div> */}
       <ImageRow />
        <ImageRow />
      </div>
      <div className=' flex flex-col absolute  inset-0 items-center justify-center '>
       <div className="text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-200 drop-shadow-lg leading-tight">
            Blue <span className="   bg-[radial-gradient(circle,_#0a1a2f_10%,_#1e4d8f_35%,_#4fa3d1_65%,_#0b1c33_90%)] bg-clip-text text-transparent">Eye</span> Photography
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Capturing timeless moments with <span className="text-accent font-semibold">elegance </span> 
             and <span className="text-accent font-semibold">style</span>. From weddings to portraits, 
            we turn fleeting instants into lifelong memories.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-accent text-background font-semibold rounded-xl hover:opacity-90 transition shadow-lg">
              View Portfolio
            </button>
            <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition shadow-lg backdrop-blur-sm">
              Book a Shoot
            </button>
          </div>
        </div>
      </div>
     {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            BlueEye Photography
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Capturing timeless moments with <span className="text-accent font-semibold">elegance </span> 
             and <span className="text-accent font-semibold">style</span>. From weddings to portraits, 
            we turn fleeting instants into lifelong memories.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-accent text-background font-semibold rounded-xl hover:opacity-90 transition shadow-lg">
              View Portfolio
            </button>
            <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition shadow-lg backdrop-blur-sm">
              Book a Shoot
            </button>
          </div>
        </div>
      </div> */}
     
    
  </section>
)
}
