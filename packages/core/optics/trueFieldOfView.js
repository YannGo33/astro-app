export function trueFieldOfView(input) {
    const { apparentFov, magnification } = input;
    if (magnification <= 0) {
        throw new Error("Magnification must be > 0");
    }
    console.log(input);
    return input.apparentFov / input.magnification;
}
//# sourceMappingURL=trueFieldOfView.js.map