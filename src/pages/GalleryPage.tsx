export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-8 px-4">
        <h1 className="text-blue-500  my-3 text-2xl text-center underline tracking-widest">
          GALLERY
        </h1>
        <div className="flex flex-wrap -mx-4">
          {new Array(71).fill(0).map((_, i) => (
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                className="rounded shadow-md my-5"
                src={`images/${i + 10}.jpg`}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
