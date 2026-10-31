// ENLABS: on a touch screen (a tablet or phone, whatever its width) Enter adds a line instead of sending, so the
// composer only submits on Enter where there is a fine pointer (mouse or trackpad).
export function hasCoarsePointer(): boolean {
  return typeof matchMedia !== "undefined" && matchMedia("(pointer: coarse)").matches;
}
