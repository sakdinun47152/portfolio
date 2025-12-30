export default function VideoBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/90 -z-10"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {children}
      </div>

    </div>
  )
}