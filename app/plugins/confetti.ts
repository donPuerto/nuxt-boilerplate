// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin((nuxtApp) => {
  const { showConfetti } = useConfetti()

  return {
    provide: {
      confetti: showConfetti,
    },
  }
});
