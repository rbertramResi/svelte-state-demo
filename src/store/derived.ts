import { derived } from 'svelte/store';
import { isPlaying } from './state';
import { match } from 'ts-pattern';

export const deriveButtonPlayingText = derived(isPlaying, ($isPlaying) => {
  return match($isPlaying)
    .with(true, () => 'Pause')
    .otherwise(() => 'Play');
});

export const deriveStatusText = derived(isPlaying, ($isPlaying) => {
  return match($isPlaying)
    .with(true, () => 'Is playing')
    .otherwise(() => 'Is paused');
});

export const deriveButtonToggleState = derived(
  isPlaying,
  ($isPlaying) => !$isPlaying
);
