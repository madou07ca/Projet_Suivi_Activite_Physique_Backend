 //Requete d'interaction avec le serveur
import Requests from './processActivite';
 //Cette méthode sera appelée lorsque l'utilisateur décidera d'appuyer sur le bouton d'envoi
  // Il va vérifier si tous les champs sont remplis
  checkFields = () => {
    const {sport, douleurAvant, douleurApres} = this.state;
    let message = "";
    if(sport === ''){
    message += "Sport ";
    }
    if(douleurAvant === ''){ 
    message += "Douleur Avant ";
    }
    if(douleurApres === ''){ 
    message += "Douleur Apres ";
    }
    return message;
}

submitActivites = () => {
    // state
    const {id, sport, douleurAvant, douleurApres} = this.state;
    const submittedActivites = {sport, douleurAvant, douleurApres};
    //Vérification
    const error = this.checkFields();
    //S'il y a des champs vides
    if(error !== ''){
      //Envoyé un message d'erreur
      errorMessage = `Veuillez remplir les champs suivant: \n ${error}`;
      //ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      console.log(errorMessage)
      return;
    }
    //Sinon, faites la requete
    let request;
    //Si id est vide, nous ajoutons une nouvelle activité.
      if(id === '' || id === undefined){
      request = Requests.postRequest(submittedActivites);
       alert('Ajouté');
    //Sinon, nous mettons à jour une activité
    } else{
      request = Requests.putRequest(id, submittedActivites);
    }

    //Mettre à jour l'état de l'activité, de l'écran d'accueil, et revenir à l'écran d'accueil
     //this.props.navigation.navigate('Home');
  }