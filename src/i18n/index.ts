import textsJson from './texts.json';
import type { Texts } from '../types/texts';

// Strongly typed access to UI text
const texts = textsJson as unknown as Texts;
export default texts;
export type { Texts };