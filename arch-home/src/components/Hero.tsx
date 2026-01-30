export function Hero() {
 
  return (
    <section
      className="
        relative
        min-h-[70vh]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/R.jpg')",
      }}
    >
      {/* TOP SHADOW for navbar contrast */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-black/80
          via-black/30
          to-transparent
        "/>
      {/* optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-white">
        {/* pt-20 = header height */}
        <p className="text-xs uppercase tracking-[0.35em] text-white/80">
          Transformative by design
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[0.18em] md:text-6xl">
          Modern architecture & thoughtful spaces
        </h1>
      </div>
    </section>
  );
}

 
