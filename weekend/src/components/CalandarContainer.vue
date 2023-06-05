<!-- 
    https://vcalendar.io/ 
-->

<template>
      <p>Sélectionnez vos dates d'arrivé et de départ</p>
      <DatePicker v-model.range="dateRange" mode="dateTime" color="teal" />
      <p>Date arrivée : {{ dateRange.start }}</p>
      <p>Date depart : {{ dateRange.end }}</p>
</template>

<script>
/**
 
Créer un formulaire de réservation de chambre d'hôtel.
Avec v-calendar :  sélectionner une date d'arrivée et de départ
Afficher dynamiquement dans des paragraphes à part les dates d'arrivée et de départ
*/
import { DatePicker } from 'v-calendar';
export default {
      components: {
            DatePicker,
      },
      data() {
            return {
                  dateRange: {
                        start: new Date(),
                        end: new Date(),
                  }
            };
      },
}
</script>