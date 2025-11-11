const papers = [

    {
        id: 'NEQMembrane',
        cardImage: 'steeredMD_thumb.jpg',
        category: 'Steered Molecular Dynamics',
        name: 'Far Beyond Equilibrium',
        modalImage: 'steeredMD.jpg',
        modalDescription: 'Wild physics at super-Stokesian speed, and still, you remain in control! Steering particles through complex, highly responsive environments reveals what you need: The coarse-grained nonequilibrium dynamics, everywhere and at all velocities. And the best part? Free of charge and neatly wrapped in a ready-to-use functional friction for Markovian Langevin simulations.',
        modalPaperTitle: 'Nonequilibrium friction and free energy estimates for kinetic coarse-graining &mdash; Driven particles in responsive media  ',
        modalPaperAuthors: 'S. Milster, J. Dzubiella, G. Stock, S. Wolf', // modalPaperAuthors: 'Sebastian Milster, Joachim Dzubiella, Gerhard Stock, Steffen Wolf',
        modalPaperYear: '2025',
        modalPaperJournal: 'The Journal of Chemical Physics',
        modalPaperWebLink: 'https://doi.org/10.1063/5.0261459',
        modalPaperPdf: 'https://pubs.aip.org/aip/jcp/article-pdf/doi/10.1063/5.0261459/20493254/154113_1_5.0261459.pdf'
    }, {
        id: 'xlink',
        cardImage: 'xlink_thumb.jpg',
        category: 'Atomistic Molecular Dynamics',
        name: 'The Cross-Link Effect',
        modalImage: 'xlink.jpg',
        modalDescription: 'Molecules fall in love most likely in high-density regions, yet only the right chemistry enchants their physical romance. Cross-links in responsive polymers weave a heartwarming novel, sweetening rational design with  nanoscale emotions.',
        modalPaperTitle: 'Cross-linker effect on solute adsorption in swollen thermoresponsive polymer networks', // modalPaperAuthors: 'Sebastian Milster, Richard Chudoba, Matej Kanduč, Joachim Dzubiella',
        modalPaperAuthors: 'S. Milster, R. Chudoba, M. Kanduč, J. Dzubiella',
        modalPaperYear: '2019',
        modalPaperJournal: 'Physical Chemistry Chemical Physics',
        modalPaperWebLink: 'https://doi.org/10.1039/C8CP07601D',
        modalPaperPdf: 'https://pubs.rsc.org/en/content/articlepdf/2019/cp/c8cp07601d'
    }, {
        id: 'collNeuron',
        cardImage: 'collNeuron_thumb.jpg',
        category: 'Macrosopic Modeling',
        name: 'Colloidal Neurons',
        modalImage: 'collNeuron.jpg',
        modalDescription: 'Add some sugar and let the bubble tea do your homework. Well, we\'re not quite there yet &mdash; but this work brews self-oscillating catalytic gels into two simple dynamic equations... Surprise! They taste like the good old recipes from neuroscience.',
        modalPaperTitle: 'Synergistic chemomechanical dynamics of feedback-controlled microreactors',
        modalPaperAuthors: 'Sebastian Milster, Abeer Darwish, Nils Göth, Joachim Dzubiella', // modalPaperAuthors: 'S. Milster, A. Darwish, N. Göth, J. Dzubiella',
        modalPaperYear: '2023',
        modalPaperJournal: 'Physical Review E',
        modalPaperWebLink: 'https://doi.org/10.1103/PhysRevE.108.L042601',
        modalPaperPdf: 'https://arxiv.org/pdf/2306.05181'
    }, {
        id: 'EQmemory',
        cardImage: 'EQmemory_thumb.png',
        category: 'Generalized Langevin',
        name: 'Memory In Polymers',
        modalImage: 'EQmemory.png',
        modalDescription: 'Do you remember? Your environment certainly does &mdash; and will shape your future. Discover how the intricate dynamics of a responsive polymer surrounding fold into an insightful memory equation that will boost your simulations by orders of magnitude.',
        modalPaperTitle: 'Tracer dynamics in polymer networks: Generalized Langevin description', // modalPaperAuthors: 'Sebastian Milster, Fabian Koch, Christoph Widder, Tanja Schilling, Joachim Dzubiella',
        modalPaperAuthors: 'S. Milster, F. Koch, C. Widder, T. Schilling, J. Dzubiella',
        modalPaperYear: '2024',
        modalPaperJournal: 'The Journal of Chemical Physics',
        modalPaperWebLink: 'https://doi.org/10.1063/5.0189166',
        modalPaperPdf: 'https://pubs.aip.org/aip/jcp/article-pdf/doi/10.1063/5.0189166/19719344/094901_1_5.0189166.pdf'
    }

    , {
        id: 'diss',
        cardImage: 'diss_thumb.jpg',
        category: 'Dissertation',
        name: 'Membrane Permeability',
        modalImage: 'diss2.jpg',
        modalDescription: '<b>Enjoy my thesis</b> and learn how to control membrane permeability by tuning polymer' + ' composition and structure. This work represents a symbiosis of polymer science, statistical physics, and extensive particle simulations. It provides essential fundamentals, detailed analyses, bottom-up refinements of phenomenological laws, intuitively accessible illustrations, and thorough discussions carefully linked to both significant historical and contemporary literature. ',
        modalPaperTitle: 'Structure-property relations in polymeric membranes for controlled solute transport',
        modalPaperAuthors: 'Sebastian Milster',
        modalPaperYear: '2022',
        modalPaperJournal: 'Albert-Ludwigs-Universität Freiburg',
        modalPaperWebLink: 'https://doi.org/10.6094/UNIFR/231096',
        modalPaperPdf: 'https://freidok.uni-freiburg.de/files/231096/lmarKqqmHQhxaITz/Milster_Dissertation.pdf',
        modalPaperCoverPage: 'https://freidok.uni-freiburg.de/files/231096/qHBwJGDtmRP1piio/Milster_cover.jpg'
    }, {
        id: 'list',
        cardImage: 'list_thumb.jpg',
        category: 'More',
        name: 'Publications',
        modalImage: 'list_thumb.jpg',
        modalDescription: 'Find my list of papers on ' + '<a href="${data.modalPaperWebLink}" rel="external" class="mt-3">Google&nbsp;Scholar</a>.',
        modalPaperTitle: '',
        modalPaperAuthors: '',
        modalPaperYear: '',
        modalPaperJournal: '',
        modalPaperWebLink: 'https://scholar.google.com/citations?hl=en&user=rP3G56AAAAAJ&view_op=list_works&sortby=pubdate',
        modalPaperPdf: 'null'
    }

];
