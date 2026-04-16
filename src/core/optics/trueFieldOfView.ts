export interface TrueFieldInput {
  apparentField: number; // degrés
  magnification: number;
}

export function trueFieldOfView(input: TrueFieldInput): number {
  const { apparentField, magnification } = input;

  if (magnification <= 0) {
    throw new Error("Magnification must be > 0");
  }

  return apparentField / magnification;
}