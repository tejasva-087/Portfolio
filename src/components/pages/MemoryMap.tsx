import logo from "../../assets/Memorymap.svg";

function MemoryMap() {
  return (
    <>
      <main className="grid grid-cols-2 gap-4 items-center mt-6">
        <div className="">
          <img src={logo} alt="Memorymap logo" className="w-32 sm:w-48" />
          <h1 className=" text-4xl sm:text-5xl md:text-6xl mb-4">
            A digital travel journal.
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary">
            Memory Map is a map-centric digital journal that allows users to
            record, organize, and visualize personal memories dynamically tied
            to geographic locations.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary mb-8">
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-primary-light) 60%)",
                padding: "0 2px",
              }}
            >
              Interactive,
            </span>
            ,{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-secondary) 60%)",
                padding: "0 2px",
              }}
            >
              Location-based
            </span>
            , and{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-tertiary) 60%)",
                padding: "0 2px",
              }}
            >
              Journaling
            </span>
          </p>
          <a
            className="p-4 bg-memorymap rounded-md text-white-primary"
            href="https://memorymap.space"
            target="_blank"
          >
            Beta version
          </a>
        </div>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%" }}
          height="640"
          src="https://embed.figma.com/design/qjDEcl5JmZWnj2dpMrfnzA/MemoryMap?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </main>
    </>
  );
}

export default MemoryMap;
