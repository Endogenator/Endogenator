export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-semibold text-stone-900">Doctoral Progress</h1>
      <p className="text-stone-700">
        I am on leave from this work for a while, focused elsewhere. The
        theoretical apparatus this project draws on lives at generative.endogenator.com.
        The applied, real world side of the same thinking lives at endogenation.com.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="https://generative.endogenator.com"
          className="rounded-md bg-stone-800 px-4 py-2 text-white hover:bg-stone-900 text-center"
        >
          generative.endogenator.com
        </a>
        <a
          href="https://endogenation.com"
          className="rounded-md border border-stone-300 px-4 py-2 hover:bg-stone-100 text-center"
        >
          endogenation.com
        </a>
      </div>
    </main>
  )
}