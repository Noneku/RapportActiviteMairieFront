import React, { useState } from "react";

export function FormRapportActivite() {
  
  const [formData, setFormData] = useState({
    mission: "",
    indicateur: "",
    realisation: "",
    perspective: "",
    donneesFinance:"",
    donneesRH:"",
    indicateurFile: null,
    realisationFile: null,
    perspectiveFile: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      fichier: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici l'action souhaitée avec les données du formulaire, y compris les fichiers.
    console.log(formData);
  };
  return (
    <div className="">
      <h1>Rapport d'activite</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="mission" className="form-label">
            Mission principales :
          </label>
          <textarea
            type="text"
            className="form-control"
            id="mission"
            name="mission"
            onChange={handleChange}
            value={formData.mission}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="indicateur" className="form-label">
            Indicateurs (quantitatifs/qualitatifs)
          </label>
          <textarea
            type="text"
            className="form-control"
            id="indicateur"
            name="indicateur"
            onChange={handleChange}
            value={formData.indicateur}
          />
          <input
            type="file"
            className="form-control mt-2"
            id="indicateurFile"
            name="indicateurFile"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="realisation" className="form-label">
            Réalisations/Projets 2023
          </label>
          <textarea
            type="realisation"
            className="form-control"
            id="realisation"
            name="realisation"
            onChange={handleChange}
            value={formData.realisation}
          />
          <input
            type="file"
            className="form-control mt-2"
            id="realisationFile"
            name="realisationFile"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="perspective" className="form-label">
            Perspectives (2024)
          </label>
          <textarea
            className="form-control"
            id="perspective"
            name="perspective"
            rows="2"
            onChange={handleChange}
            value={formData.perspective}
          ></textarea>
          <input
            type="file"
            className="form-control mt-2"
            id="perspectiveFile"
            name="perspectiveFile"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="perspective" className="form-label">
            Données financières
          </label>
          <textarea
            className="form-control"
            id="donneesFinance"
            name="donneesFinance"
            rows="2"
            onChange={handleChange}
            value={formData.perspective}
            placeholder="A compléter par la Direction des Finances"
            disabled
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="perspective" className="form-label">
            Données resosurces humaines
          </label>
          <textarea
            className="form-control"
            id="donneesRH"
            name="donneesRH"
            rows="2"
            onChange={handleChange}
            value={formData.perspective}
            placeholder="A compléter par la Direction des ressources humaines"
            disabled
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </form>
    </div>
  );
}
