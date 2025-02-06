import type JSConfetti from 'js-confetti'

export const useConfetti = () => {
  let jsConfetti: JSConfetti | null = null

  const initConfetti = async () => {
    if (import.meta.client && !jsConfetti) {
      const JSConfettiModule = (await import('js-confetti')).default
      jsConfetti = new JSConfettiModule()
    }
    return jsConfetti
  };

  const showConfetti = async (options?: {
    confettiNumber?: number
    confettiColors?: string[]
  }) => {
    const confetti = await initConfetti()
    if (!confetti) return

    await confetti.addConfetti({
      confettiColors: options?.confettiColors ?? [
        '#3B82F6', // blue
        '#10B981', // emerald
        '#6366F1', // indigo
        '#F59E0B', // amber
        '#EC4899', // pink
      ],
      confettiNumber: options?.confettiNumber ?? 100,
    })
  };

  return {
    showConfetti,
  }
};
