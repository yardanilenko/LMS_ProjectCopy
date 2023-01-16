import React from 'react';
import MapMsk from '../../components/mapMsk/MapMsk';
import MapPsb from '../../components/mapPsb/MapPsb';

export default function Contacts() {

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: 'end', alignContent: 'flex-end', margin: 'auto', justifyContent: 'space-between', minHeight: '800px', }}>
        <MapMsk/>
        <MapPsb/>
    </div>
  )
}
