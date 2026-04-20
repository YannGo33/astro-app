import { useState } from 'react';
import { computeOptics } from '../services/api';

export default function OpticsForm() {
  const [result, setResult] = useState<any>(null);

  const [form, setForm] = useState({
    telescopeFocal: 1000,
    telescopeDiameter: 200,
    eyepieceFocal: 10,
    apparentFov: 68
  });

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <div>
      <h2>Optics Calculator</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={form.telescopeFocal}
          onChange={(e) =>
            setForm({ ...form, telescopeFocal: +e.target.value })
          }
          placeholder="Focale télescope (mm)"
        />

        <input
          type="number"
          value={form.telescopeDiameter}
          onChange={(e) =>
            setForm({ ...form, telescopeDiameter: +e.target.value })
          }
          placeholder="Diamètre (mm)"
        />

        <input
          type="number"
          value={form.eyepieceFocal}
          onChange={(e) =>
            setForm({ ...form, eyepieceFocal: +e.target.value })
          }
          placeholder="Focale oculaire (mm)"
        />

        <input
          type="number"
          value={form.apparentFov}
          onChange={(e) =>
            setForm({ ...form, apparentFov: +e.target.value })
          }
          placeholder="Champ apparent (°)"
        />

        <button type="submit">Calculer</button>
      </form>

      {result && (
        <div>
          <h3>Résultats</h3>
          <p>Grossissement : {result.magnification}</p>
          <p>Pupille de sortie : {result.exitPupil}</p>
          <p>Champ réel : {result.trueFov}°</p>
        </div>
      )}
    </div>
  );
}