export default function () {
  return (
    <header>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-primary mb-4 font-bold md:text-6xl md:leading-tight">
              Image Gen by GPT Image 1,Chatgpt's powerful image.
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              gpt-image-1 is OpenAI’s latest and greatest image generation
              model. It’s natively multimodal, meaning it can handle both text
              and image inputs, and it excels at creating images from text
              prompts.
            </p>

            <a
              href="https://tally.so/r/3xgQYE"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-auto cursor-pointer rounded-md bg-black px-6 py-2 text-center font-semibold text-white"
            >
              Join the Waitlist
            </a>

            <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4"></div>
          </div>

          <img
            src="https://aifigure.s3.us-east-1.amazonaws.com/gptimage/gpt-image-1_01.png"
            alt="GPT Image 1"
            className="rounded-md inline-block max-h-3xl w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </header>
  );
}
