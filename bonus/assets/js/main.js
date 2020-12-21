/*
Bonus 1: Ricerca in chat. Cliccando sulla lente di ingrandimento compare un input in cui inserire il testo da ricercare in chat
Bonus 2: Registrare messaggi vocali
*/
let app = new Vue({
    el: '#app',
    data: {
        contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '10/01/2020 16:15:22'
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visible: true
                        }
                    ],
                    lastAccess: '20/03/2020 16:30:55'
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '28/03/2020 16:15:22'
                },
                {
                    name: 'Mario',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '10/01/2020 15:50:00'
                },
                {
                    name: 'Franco',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '15/05/2020 16:30:55',
                            text: 'Ciao! Che hai fatto di bello ieri?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '15/05/2020 16:50:00',
                            text: 'Ciao, sono andato al cinema',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '15/05/2020 16:50:00'
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '20/03/2020 15:33:55',
                            text: 'Ciao, avete studiato qualcosa di nuovo ieri?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '20/03/2020 15:57:00',
                            text: 'Ciao, abbiamo solo fatto un ripasso generale',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '20/03/2020 15:57:00'
                },
                {
                    name: 'Aldo',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '10/02/2020 15:32:55',
                            text: 'Sei stato al nuovo museo?',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '10/02/2020 15:50:00',
                            text: 'No non ancora, spero di andarci presto',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '10/02/2020 15:50:00'
                },
                {
                    name: 'Giovanni',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            isTextMessage: true,
                            date: '11/01/2020 8:32:55',
                            text: 'Buona giornata!',
                            status: 'sent',
                            visible: true
                        },
                        {
                            isTextMessage: true,
                            date: '11/01/2020 8:50:00',
                            text: 'Grazie anche a te!',
                            status: 'received',
                            visible: true
                        }
                    ],
                    lastAccess: '11/01/2020 8:50:00'
                },
        ],
        prevSelectedContact: 0,
        selectedContactIndex: 0,
        textToSend: '',
        searchContact: '',
        searchInput: '',
        searchInputVisible: false,
        mediaRecorder: null,
        audioChunks: [],
        audioUrl: null
    },
    methods: {
        setSelectedContact(position){
            this.selectedContactIndex = position;
            this.resetMessagesVisibility();
        },
        resetMessagesVisibility(){
            // Azzero l'eventuale ricerca nella chat precedente
            this.searchInputVisible = false;
            this.searchInput = '';
            // Rendo visibili tutti i messaggi della chat precedente
            this.contacts[this.prevSelectedContact].messages.forEach(message => message.visible = true);
            // Rendo uguali precedente e attuale, così che al prossimo cambio di chat il precedente contatto sia quello attuale
            this.prevSelectedContact = this.selectedContactIndex;
        },
        getActiveDate(){
            const today = dayjs(new Date()).format('DD/MM/YYYY');
            // Prendo tutti i messaggi ricevuti dell'utente selezionato in questo momento
            const receavedMessages = this.contacts[this.selectedContactIndex].messages.filter(message => message.status === 'received');
            // Aggiorno lastAccess solo se ci sono nuovi messaggi ricevuti
            if(receavedMessages.length > 0){
                // Estraggo l'ultimo messaggio ricevuto
                const lastReceavedMessage = receavedMessages.pop();
                // Confronto il precedente lastAccess con la data dell'ultimo messaggio ricevuto
                const dataIniziale = scambioGiornoConMese(this.contacts[this.selectedContactIndex].lastAccess);
                const oldLastAccess = dayjs(dataIniziale);
                const dataNuova = scambioGiornoConMese(lastReceavedMessage.date)
                const newLastAccess = dayjs(dataNuova);
                // Controllo necessario perché potrei aver cancellato l'ultimo messaggio ricevuto e non voglio modificare il lastAccess
                if(newLastAccess.isAfter(oldLastAccess)){
                    //Aggiorno il lastAccess del contatto
                    this.contacts[this.selectedContactIndex].lastAccess = lastReceavedMessage.date;
                }
            }
            
            const ultimoAccesso = this.contacts[this.selectedContactIndex].lastAccess;
            const lastReceivedMessageDay = ultimoAccesso.split(' ')[0]; //solo la data senza orario
            if (lastReceivedMessageDay == today){
                return `oggi alle ${ultimoAccesso.split(' ')[1]}`; // solo l'orario
            }
            return `il ${ultimoAccesso}`; // data completa con orario
        },
        sendMessage(){
            const chatMessages = this.contacts[this.selectedContactIndex].messages;
            const newMessage = {
                isTextMessage: true,
                date: dayjs(new Date()).format('DD/MM/YYYY H:mm:ss'),
                text: this.textToSend,
                status: 'sent',
                visible: true
            };
            this.textToSend = '';
            chatMessages.push(newMessage);

            // Salvo l'attuale contatto selezionato
            const actualContact = this.selectedContactIndex;
            // Risposta ok dopo 1 secondo
            setTimeout(autoReply.bind(null, this, actualContact), 1000);
        },
        search(){
            if(this.searchContact === ''){
                this.contacts.forEach(contact => contact.visible = true);
            } else {
                const stringToFind = this.searchContact.toLowerCase();
                this.contacts.forEach(contact => {
                    if(contact.name.toLowerCase().includes(stringToFind)){
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            }
        },
        getLastDate(position){
            if(this.contacts[position].messages.length > 0){
                const lastMessageIndex = this.contacts[position].messages.length - 1;
                return this.contacts[position].messages[lastMessageIndex].date;
            }
            return '';
        },
        getPreviewLastMessage(position){
            if(this.contacts[position].messages.length > 0){
                const lastMessageIndex = this.contacts[position].messages.length - 1;
                if(this.contacts[position].messages[lastMessageIndex].isTextMessage){
                    const lastTextMessage = this.contacts[position].messages[lastMessageIndex].text;
                    // Restituisco al massimo i primi 30 caratteri eventualmente seguiti da '...'
                    if(lastTextMessage.length > 30){
                        return lastTextMessage.substr(0,30) + '...';
                    }
                    return lastTextMessage;
                } else {
                    return 'Messaggio Audio';
                }
            }
            return '';
        },
        deleteMessage(position){
            // Versione con cancellazione totale del messaggio
            // Con questa versione devo aggiungere la proprietà lastAccess al contatto
            this.contacts[this.selectedContactIndex].messages.splice(position,1);
        },
        showSearch(){
            if(!this.searchInputVisible){
                this.searchInputVisible = true;
            } else {
                this.searchInputVisible = false;
            }
        },
        searchInChat(){
            if(this.searchInput === ''){
                this.contacts[this.selectedContactIndex].messages.forEach(message => message.visible = true);
            } else {
                const stringToFind = this.searchInput.toLowerCase();
                this.contacts[this.selectedContactIndex].messages.forEach(message => {
                    if(message.text.toLowerCase().includes(stringToFind)){
                        message.visible = true;
                    } else {
                        message.visible = false;
                    }
                });
            }
        },
        recordAudio(){
            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.start();
            
                this.mediaRecorder.addEventListener("dataavailable", event => {
                    this.audioChunks.push(event.data);
                });
            
                this.mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(this.audioChunks);
                    this.audioUrl = URL.createObjectURL(audioBlob);
                
                    const audioMessage = {
                        isTextMessage: false,
                        date: dayjs(new Date()).format('DD/MM/YYYY H:mm:ss'),
                        audio: this.audioUrl,
                        status: 'sent',
                        visible: true
                    };
                    this.contacts[this.selectedContactIndex].messages.push(audioMessage);
                    // Risposta ok dopo 5 second1
                    const actualContact = this.selectedContactIndex;
                    setTimeout(autoReply.bind(null, this, actualContact), 5000);
                });
            
                setTimeout(() => {
                  this.mediaRecorder.stop();
                  URL.revokeObjectURL(this.audioUrl);
                  this.audioChunks.splice(0, this.audioChunks.length);
                }, 3000);
            });
        }
    }
});


function autoReply(appObject, contactIndex){
    const replyMessage = {
        isTextMessage: true,
        date: dayjs(new Date()).format('DD/MM/YYYY H:mm:ss'),
        text: 'ok',
        status: 'received',
        visible: true
    };
    //console.log('Sto lavorando sul contatto con indice: ' + contactIndex);
    appObject.contacts[contactIndex].messages.push(replyMessage);
}

function scambioGiornoConMese(data){
    let dataSeparata = data.split('/');
    const giorno = dataSeparata[0];
    const mese = dataSeparata[1];
    dataSeparata[0] = mese;
    dataSeparata[1] = giorno;
    data = dataSeparata.join('/');
    return data;
}