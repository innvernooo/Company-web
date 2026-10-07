interface TestimoniCardRequest {
  name: string;
  text: string;
}

export default function TestimoniCard({ name, text }: TestimoniCardRequest) {
  return (
    <>
      <div className="p-4 bg-brand-200 text-white h-fit lg:h-48 rounded-2xl">
        <div className="flex itemscenter gap-3 border-b p-2 -mx-2 -mt-2">
          <div className="avatar">
            <div className="w-12 rounded-xl">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNaRT4DeaWk4avv6n6WaVoL6ai6NpFfG3qzicjpw_NQ&s"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold lg:text-lg">{name}</p>
            <p className="text-sm md:text-base lg:text-lg">Wali murid TK IT Arisya</p>
          </div>
        </div>
        <p className="mt-3 text-sm md:text-base lg:text-lg">{text}</p>
      </div>
    </>
  );
}
