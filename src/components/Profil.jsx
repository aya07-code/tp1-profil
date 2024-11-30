import React from 'react';
import image from'./profile1.jpg';
const Profil = () => {
  const Nom = 'Ziad';
  const Prenom = 'Aya';
  const id = 123456789;
  const Filière = 'Développement Digital';
  return (
    <div className="profil">
      <div className='profile-infos-note'>
      <div className="profile-info">
        <img src={image}alt="Étudiant" className="profile-img"/>
        <div>
          <p><strong>Nom :</strong> {Nom}</p>
          <p><strong>Prénom :</strong> {Prenom}</p>
          <p><strong>ID :</strong> {id}</p>
          <p><strong>Filière :</strong> {Filière}</p>
        </div>
        </div>
        <div className='profil-note'>
          <h3>Modules et Notes</h3>
          <table className="profile-table">
            <thead>
              <tr>
                <th>Module</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Développement front-end</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Développement back-end</td>
                <td>19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="absence-table">
        <h3>Table des Absences</h3>
        <table className="profile-table">
          <thead>
            <tr>
              <th>Séance</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lundi 9h-11h</td>
              <td>Présente</td>
            </tr>
            <tr>
              <td>Mardi 11h-13h</td>
              <td>Absente</td>
            </tr>
            <tr>
              <td>Jeudi 14h-16h</td>
              <td>Présente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Profil;
 