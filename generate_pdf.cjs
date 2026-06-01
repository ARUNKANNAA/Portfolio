const { mdToPdf } = require('md-to-pdf');

(async () => {
    try {
        await mdToPdf(
            { path: 'public/Arunkannaa_S_Resume.md' },
            { 
                dest: 'public/Arunkannaa_S_Resume.pdf',
                launch_options: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
            }
        ).catch(console.error);
        console.log('PDF generated successfully!');
    } catch (err) {
        console.error('Failed to generate PDF:', err);
    }
})();
