import React, {useEffect, useState} from 'react';
import axios from 'axios';

function TierListe() {
    const [tiere, setTiere] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5005/tiere')
            .then(response => {
                setTiere(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fehler beim Laden der Tiere:', error);
                setLoading(false);
            });
            
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5005/tiere/${id}`)
            .then(() => {
                setTiere(tiere.filter(tier => tier.id !== id));
            })
            .catch(error => {
                console.error('Fehler beim Löschen des Tiers:', error);
            });
    };

    if (loading) {
        return <div>Lade Tiere...</div>;
    }


  return (
    <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Tierverwaltung</h1>
        <ul className="space-y-4">
        {tiere.map(tier => (
            <li key={tier.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{tier.name} ({tier.tierart})</h2>
                <p><strong>Krankheit:</strong> {tier.krankheit}</p>
                <p><strong>Geburtstag:</strong> {tier.geburtstag}</p>
                <p><strong>Gewicht:</strong> {tier.gewicht} Kg</p>
                <div className='mt-2 space-x-2'>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Bearbeiten</button>
                    <button onClick={() => handleDelete(tier.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Löschen</button>
                </div>
                </li>
        ))}
        </ul>      
    </div>
  );

}

export default TierListe;
