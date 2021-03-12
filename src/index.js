const modal = $.modal({
    title: 'Andriy Modal',
    closable: true,
    content: `
        <h3>Modal is working</h3>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        { text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
        }},
        { text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');
        }}
    ]
});
