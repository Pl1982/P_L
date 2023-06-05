const useCounterStore = defineStore("counter", {
      //Donnee stockee dans le store:
      state:() => ({
            count:1,// les donnes sont protoger -> on ette obliger de passer par actions pour modidier state
      }),
            
            //fonction qui modidie le state
            //Equivalent de passer par 'actions' pour modifier 'state

            
      actions: {
      increment: function(){
            // on accede au state avec this
            this.count++
      },
},
//lire des donne dans le store et eventuellemeent les transformer
getters: {
      doubleCount: function() {
            return this.count * 2
      },
},
}
)
