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
            ]
    }
});