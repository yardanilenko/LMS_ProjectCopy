import React from 'react';
import ContactsInfo from '../../components/contactsInfo/ContactsInfo';
import MapMsk from '../../components/mapMsk/MapMsk';
import MapSpb from '../../components/mapSpb/MapSpb';

export default function Contacts() {

  return (
    <>
    <ContactsInfo/>
    <div style={{ display: "flex", flexDirection: "row", alignItems: 'end', alignContent: 'center', margin: 'auto', justifyContent: 'space-between', maxHeight: '600px', }}>
        <MapMsk/>
        <MapSpb/>
    </div>
    </>
  )
}
