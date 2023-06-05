<template>
  <main>
    <videoComponents />
    <WelcomeComponent />
    <DoubleColumnsContent title="Titre du premier composant" image="../assets/fire_1.jpg" LinkUrl="/restaurant"
      LinkText="Savourer">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
    </DoubleColumnsContent>
    <DoubleColumnsContent title="Titre du premier composant" image="../assets/fire-2.jpg" :reversed="true"
      LinkUrl="/hotel" LinkText="resrever">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
    </DoubleColumnsContent>
    <DoubleColumnsContent title="Titre du 2e composant" image="../assets/fire-3.jpg" LinkUrl="/bien-etre"
      LinkText="Resrever">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo asperiores accusamus, eligendi modi explicabo sit!
      </p>
    </DoubleColumnsContent>
    <section class="service">
      <div class="component ">
        <ServiceComponent title="service" icon="../assets/logo_2.png"
          content="Une petite phrase pour d'écrite un des services présent a la ferme" />
        <ServiceComponent title="service" icon="../assets/logo_2.png"
          content="Une petite phrase pour d'écrite un des services présent a la ferme" />
        <ServiceComponent title="service" icon="../assets/logo_2.png"
          content="Une petite phrase pour d'écrite un des services présent a la ferme" />
      </div>
    </section>


  </main>
</template>
<script >
import videoComponents from '../components/VideoComponents.vue'
import WelcomeComponent from '../components/WelcomeComponents.vue'
import DoubleColumnsContent from '../components/DoubleColumnsContent.vue'
import ServiceComponent from '../components/ServiceComponent.vue'
// Créer un component ServiceComponent.vue
// Props: -icon: lien vers une icône
//        -title: titre
//        -content: contenu
// En afficher 3 côte à côte sur la HomeView comme sur la maquette
export default {
  components: { videoComponents, WelcomeComponent, DoubleColumnsContent, ServiceComponent }
}
</script>
<style>
.component {
  justify-content: center;
  display: flex;
  margin: 1rem auto;
  width: 90%;

}

.service {
  background-color: beige;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 4rem auto;
}
</style>
