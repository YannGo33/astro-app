export interface TrueFieldInput {
  apparentFov: number; // degrés
  magnification: number;
}

export function trueFieldOfView(input: TrueFieldInput): number {
  const { apparentFov, magnification } = input;

  if (magnification <= 0) {
    throw new Error("Magnification must be > 0");
  }

  return apparentFov / magnification;
}