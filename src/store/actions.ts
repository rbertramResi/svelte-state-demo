// actions may not be a good name for this

import { get } from 'svelte/store';
import { deriveButtonToggleState } from './derived';
import { isPlaying } from './state';

export function buttonClicked() {
  isPlaying.set(get(deriveButtonToggleState));
}
