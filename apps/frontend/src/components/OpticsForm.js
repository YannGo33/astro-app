import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { computeOptics } from '../services/api';
export default function OpticsForm() {
    const [result, setResult] = useState(null);
    const [form, setForm] = useState({
        telescopeFocal: 1000,
        telescopeDiameter: 200,
        eyepieceFocal: 10,
        apparentFov: 68
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            telescopeFocal: { value: form.telescopeFocal, unit: 'mm' },
            telescopeDiameter: { value: form.telescopeDiameter, unit: 'mm' },
            eyepieceFocal: { value: form.eyepieceFocal, unit: 'mm' },
            apparentFov: form.apparentFov
        };
        const res = await computeOptics(payload);
        setResult(res);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Optics Calculator" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "number", value: form.telescopeFocal, onChange: (e) => setForm({ ...form, telescopeFocal: +e.target.value }), placeholder: "Focale t\u00E9lescope (mm)" }), _jsx("input", { type: "number", value: form.telescopeDiameter, onChange: (e) => setForm({ ...form, telescopeDiameter: +e.target.value }), placeholder: "Diam\u00E8tre (mm)" }), _jsx("input", { type: "number", value: form.eyepieceFocal, onChange: (e) => setForm({ ...form, eyepieceFocal: +e.target.value }), placeholder: "Focale oculaire (mm)" }), _jsx("input", { type: "number", value: form.apparentFov, onChange: (e) => setForm({ ...form, apparentFov: +e.target.value }), placeholder: "Champ apparent (\u00B0)" }), _jsx("button", { type: "submit", children: "Calculer" })] }), result && (_jsxs("div", { children: [_jsx("h3", { children: "R\u00E9sultats" }), _jsxs("p", { children: ["Grossissement : ", result.magnification] }), _jsxs("p", { children: ["Pupille de sortie : ", result.exitPupil] }), _jsxs("p", { children: ["Champ r\u00E9el : ", result.trueFov, "\u00B0"] })] }))] }));
}
//# sourceMappingURL=OpticsForm.js.map