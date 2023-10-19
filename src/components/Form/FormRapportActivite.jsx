import React, { useState } from "react";

export function FormRapportActivite() {
  
  const [formData, setFormData] = useState({
    mission: "",
    indicateur: "",
    realisation: "",
    perspective: "",
    donneesFinance: "",
    donneesRH: "",
    indicateurFile: null,
    realisationFile: null,
    perspectiveFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e, fieldName) => {
    //Add fileData in keys of array 
    setFormData({
      ...formData,
      [fieldName]: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div className="container-fluid">
      <h1>Mission Développement Durable et Zéro Déchet</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-row mt-4">
          <div className="mx-4">
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
                onChange={(e) => handleFileChange(e,"indicateurFile")}
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
                onChange={(e) => handleFileChange(e,"realisationFile")}
              />
            </div>
          </div>
          <div className="">
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
                onChange={(e) => handleFileChange(e,"perspectiveFile")}
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
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <button type="submit" className="btn btn-dark btn-lg w-50">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
