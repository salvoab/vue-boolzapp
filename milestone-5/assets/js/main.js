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
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mario',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Franco',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '15/05/2020 16:30:55',
                            text: 'Ciao! Che hai fatto di bello ieri?',
                            status: 'sent'
                        },
                        {
                            date: '15/05/2020 16:50:00',
                            text: 'Ciao, sono andato al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 15:33:55',
                            text: 'Ciao, avete studiato qualcosa di nuovo ieri?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 15:57:00',
                            text: 'Ciao, abbiamo solo fatto un ripasso generale',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Aldo',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2020 15:32:55',
                            text: 'Sei stato al nuovo museo?',
                            status: 'sent'
                        },
                        {
                            date: '10/02/2020 15:50:00',
                            text: 'No non ancora, spero di andarci presto',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giovanni',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '11/01/2020 8:32:55',
                            text: 'Buona giornata!',
                            status: 'sent'
                        },
                        {
                            date: '11/01/2020 8:50:00',
                            text: 'Grazie anche a te!',
                            status: 'received'
                        }
                    ],
                },
        ],
        selectedContactIndex: 0,
        textToSend: '',
        searchContact: ''
    },
    methods: {
        setSelectedContact(position){
            this.selectedContactIndex = position;
        },
        getActiveDate(){
            const today = dayjs(new Date()).format('DD/MM/YYYY');
            // Prendo tutti i messaggi ricevuti dell'utente selezionato in questo momento
            const receavedMessages = this.contacts[this.selectedContactIndex].messages.filter(message => message.status === 'received');
            // Estraggo l'ultimo messaggio ricevuto
            const lastReceavedMessage = receavedMessages.pop();
            // La data del giorno è separata con uno spazio dall'orario, quindi prendo solo la data del giorno
            const lastReceivedMessageDay = lastReceavedMessage.date.split(' ')[0];
            if (lastReceivedMessageDay == today){
                return `oggi alle ${lastReceavedMessage.date.split(' ')[1]}`; // solo l'orario
            }
            return `il ${lastReceavedMessage.date}`; // data completa con orario
        },
        sendMessage(){
            const chatMessages = this.contacts[this.selectedContactIndex].messages;
            const newMessage = {
                date: dayjs(new Date()).format('DD/MM/YYYY H:mm:ss'),
                text: this.textToSend,
                status: 'sent'
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
            const lastMessageIndex = this.contacts[position].messages.length - 1;
            return this.contacts[position].messages[lastMessageIndex].date;
        },
        getPreviewLastMessage(){
            return '...';
        }
    }
});

/*
//test dayjs metodo format
const data = dayjs(new Date()).format('D/M/YYYY H:m:s');
console.log(data);*/

function autoReply(appObject, contactIndex){
    const replyMessage = {
        date: dayjs(new Date()).format('DD/MM/YYYY H:mm:ss'),
        text: 'ok',
        status: 'received'
    };
    //console.log('Sto lavorando sul contatto con indice: ' + contactIndex);
    appObject.contacts[contactIndex].messages.push(replyMessage);
}