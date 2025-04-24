export default function () {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How to create your own GPT Image
        </h2>

        <div className="grid items-center  md:grid-cols-2 md:gap-12">
          <div className="flex h-full flex-col [grid-area:2/1/3/2] md:[grid-area:1/2/2/3]">
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-0"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold"> Upload your photo</h5>
                <p className="text-sm text-gray-500">
                  Choose a clear, front-facing photo of yourself. The better the
                  quality, the more detailed your action figure will be.
                </p>
              </div>
            </a>

            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-1"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  Type your GPT Image Gen prompt
                </h5>
                <p className="text-sm text-gray-500">
                  Describe your image. (Ex: “A children's book drawing of a
                  veterinarian using a stethoscope to listen to the heartbeat of
                  a baby otter.”)
                </p>
              </div>
            </a>

            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-2"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold"> Generate your GPT Image</h5>
                <p className="text-sm text-gray-500">
                  Click “GPT Image Generator” and let our AI work its magic.
                  Your unique GPT image will be ready in seconds!
                </p>
              </div>
            </a>
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-2"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">4</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold"> Download or share</h5>
                <p className="text-sm text-gray-500">
                  Save your custom figure or post it to socials—perfect for
                  avatars, profile pics, or just flexing your toy-self!
                </p>
              </div>
            </a>
          </div>

          <img
            alt="GPT Image Generator"
            src="https://aifigure.s3.us-east-1.amazonaws.com/gptimage/gpt-image-1_05.png"
          />
        </div>
      </div>
    </section>
  );
}
