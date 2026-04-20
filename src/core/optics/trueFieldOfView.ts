export interface TrueFieldOfViewInput {
  apparentFov: number; // degrés
  magnification: number;
}

export function trueFieldOfView(input: TrueFieldOfViewInput): number {
  const { apparentFov, magnification } = input;

  if (magnification <= 0) {
    throw new Error("Magnification must be > 0");
  }
  console.log(input);
  return input.apparentFov / input.magnification;
}
