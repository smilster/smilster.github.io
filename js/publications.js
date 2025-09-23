
document.addEventListener('DOMContentLoaded', function () {
    const portfolioData = [

        {
            id: 'NEQmembrane',
            imgSrc: 'figures/steeredMD_thumb.jpg',
            category: 'Steered Molecular Dynamics',
            projectName: 'Far Beyond Equilibrium',
            modalImgSrc: 'figures/steeredMD.jpg',
            modalP1: 'Wild physics at super-Stokesian speed, and still, you remain in control! Steering particles through complex, highly responsive environments reveals what you need: The coarse-grained nonequilibrium dynamics, everywhere and at all velocities. And the best part? Free of charge and neatly wrapped in a ready-to-use functional friction for Markovian Langevin simulations.',
            modalP2Title: 'Nonequilibrium friction and free energy estimates for kinetic coarse-graining &mdash; Driven particles in responsive media  ',
            modalP2Authors: 'Sebastian Milster, Joachim Dzubiella, Gerhard Stock, Steffen Wolf',
            modalP2Year: '2025',
            modalP2Journal: 'The Journal of Chemical Physics',
            modalP2Link: 'https://doi.org/10.1063/5.0261459',
            modalP2Pdf: 'https://pubs.aip.org/aip/jcp/article-pdf/doi/10.1063/5.0261459/20493254/154113_1_5.0261459.pdf'
        }
        ,
        {
            id: 'xlink',
            imgSrc: 'figures/xlink_thumb.jpg',
            category: 'Atomistic Molecular Dynamics',
            projectName: 'The Cross-Link Effect',
            modalImgSrc: 'figures/xlink.jpg',
            modalP1: 'Molecules fall in love most likely in high-density regions, yet only the right chemistry enchants their physical romance. Cross-links in responsive polymers weave a heartwarming novel, sweetening rational design with  nanoscale emotions.',
            modalP2Title: 'Cross-linker effect on solute adsorption in swollen thermoresponsive polymer networks',
            modalP2Authors: 'Sebastian Milster, Richard Chudoba, Matej Kanduč, Joachim Dzubiella',
            modalP2Year: '2019',
            modalP2Journal: 'Physical Chemistry Chemical Physics',
            modalP2Link: 'https://doi.org/10.1039/C8CP07601D',
            modalP2Pdf: 'https://pubs.rsc.org/en/content/articlepdf/2019/cp/c8cp07601d'
        }
        ,
        {
            id: 'collNeuron',
            imgSrc: 'figures/collNeuron_thumb.jpg',
            category: 'Macrosopic Modeling',
            projectName: 'Colloidal Neurons',
            modalImgSrc: 'figures/collNeuron.jpg',
            modalP1: 'Add some sugar and let the bubble tea do your homework. Well, we\'re not quite there yet &mdash; but this work brews self-oscillating catalytic gels into two simple dynamic equations... Surprise! They taste like the good old recipes from neuroscience.',
            modalP2Title: 'Synergistic chemomechanical dynamics of feedback-controlled microreactors',
            modalP2Authors: 'Sebastian Milster, Abeer Darwish, Nils Göth, Joachim Dzubiella',
            modalP2Year: '2023',
            modalP2Journal: 'Physical Review E',
            modalP2Link: 'https://doi.org/10.1103/PhysRevE.108.L042601',
            modalP2Pdf: 'https://arxiv.org/pdf/2306.05181'
        }
        ,
        {
            id: 'EQmemory',
            imgSrc: 'figures/EQmemory_thumb.png',
            category: 'Generalized Langevin',
            projectName: 'Memory In Polymers',
            modalImgSrc: 'figures/EQmemory.png',
            modalP1: 'Do you remember? Your environment certainly does &mdash; and will shape your future. Discover how the intricate dynamics of a responsive polymer surrounding fold into an insightful memory equation that will boost your simulations by orders of magnitude.',
            modalP2Title: 'Tracer dynamics in polymer networks: Generalized Langevin description',
            modalP2Authors: 'Sebastian Milster, Fabian Koch, Christoph Widder, Tanja Schilling, Joachim Dzubiella',
            modalP2Year: '2024',
            modalP2Journal: 'The Journal of Chemical Physics',
            modalP2Link: 'https://doi.org/10.1063/5.0189166',
            modalP2Pdf: 'https://pubs.aip.org/aip/jcp/article-pdf/doi/10.1063/5.0189166/19719344/094901_1_5.0189166.pdf'
        }

        ,
        {
            id: 'diss',
            imgSrc: 'figures/diss_thumb.jpg',
            category: 'Dissertation',
            projectName: 'Membrane Permeability',
            modalImgSrc: 'figures/diss2.jpg',
            modalP1: 'Enjoy my thesis and learn how to control membrane permeability by tuning polymer composition and structure. This work represents a symbiosis of polymer science, statistical physics, and extensive particle simulations. It provides essential fundamentals, detailed analyses, bottom-up refinements of phenomenological laws, intuitively accessible illustrations, and thorough discussions carefully linked to both significant historical and contemporary literature. ',
            modalP2Title: 'Structure-property relations in polymeric membranes for controlled solute transport',
            modalP2Authors: 'Sebastian Milster',
            modalP2Year: '2022',
            modalP2Journal: 'Albert-Ludwigs-Universität Freiburg',
            modalP2Link: 'https://doi.org/10.6094/UNIFR/231096',
            modalP2Pdf: 'https://freidok.uni-freiburg.de/files/231096/lmarKqqmHQhxaITz/Milster_Dissertation.pdf',
            modalP2CoverPage: 'https://freidok.uni-freiburg.de/files/231096/qHBwJGDtmRP1piio/Milster_cover.jpg'
        }
        ,
        {
            id: 'list',
            imgSrc: 'figures/list_thumb.jpg',
            category: 'More',
            projectName: 'Pulications',
            modalImgSrc: 'figures/list_thumb.jpg',
            modalP1: '',
            modalP2Title: '',
            modalP2Authors: '',
            modalP2Year: '',
            modalP2Journal: '',
            modalP2Link: 'https://scholar.google.com/citations?hl=en&user=rP3G56AAAAAJ&view_op=list_works&sortby=pubdate',
            modalP2Pdf: 'null'
        }

    ];

  
    function createPortfolioItem(data) {
        // cards
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-6 col-lg-4 ';
        // colDiv.style = 'height: 260px; ';
        // colDiv.style = "min-width: 500px; min-height: 300px"

        const cardDiv = document.createElement('div');
        cardDiv.className = 'portfolio-box card w-100 shadow d-flex justify-content-center align-items-center';
        cardDiv.style = "aspect-ratio: 16/9"

        cardDiv.href = '#';
        cardDiv.setAttribute('data-bs-toggle', 'modal');
        cardDiv.setAttribute('data-bs-target', `#${data.id}`);


        // image
        const imgDiv = document.createElement('img');
        imgDiv.className = 'img-fluid object-fit-contain rounded-5';
        imgDiv.src = data.imgSrc;
        if (data.id == "list") { 
            imgDiv.style = "filter: saturate(60%); opacity: 0.8;"
        }


        // caption

        const captionDiv = document.createElement('div');
        captionDiv.className = 'portfolio-box-caption rounded-5';

        const captionContentDiv = document.createElement('div');
        captionContentDiv.className = 'portfolio-box-caption-content';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'project-category text-secondary';
        categoryDiv.textContent = data.category;

        const projectNameDiv = document.createElement('div');
        projectNameDiv.className = 'project-name';
        projectNameDiv.textContent = data.projectName;

        // stack them

        captionContentDiv.appendChild(categoryDiv);
        captionContentDiv.appendChild(projectNameDiv);
        captionDiv.appendChild(captionContentDiv);


        colDiv.appendChild(cardDiv);
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(captionDiv);
        return colDiv;
    }

    function createModal(data) {
        // (The same function as before)
        const modalDiv = document.createElement('div');
        modalDiv.className = 'modal fade ';
        modalDiv.id = data.id;
        modalDiv.setAttribute('tabindex', '-1');
        modalDiv.setAttribute('aria-hidden', 'true');
        modalDiv.setAttribute('aria-labelledby', `${data.id}Label`);

        modalDiv.innerHTML = `
                    <div class="modal-dialog modal-lg modal-dialog-centered overflow-auto">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="${data.id}Label">${data.projectName}</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="${data.modalImgSrc}" class="img-fluid mb-4 card" style="border:none; width: 100%" alt="${data.projectName}" >
                                <div id="${data.id}Text" class="text-start">
                                    <p class="mb-4">${data.modalP1}</p>

                                    <p class="mb-1"><strong>${data.modalP2Title}</strong></p>

                                    <p class="fst-italic text-muted">${data.modalP2Authors}   <br>
                                     ${data.modalP2Journal} &mdash; ${data.modalP2Year}</p>
                                                                    
                                    <a href="${data.modalP2Link}" rel="external" class=" mt-3">${data.modalP2Link}</a><br>
                                     <a id="${data.id}Pdf" href="${data.modalP2Pdf}" rel="external" class="mt-3">Download PDF</a>

                            </div>
                        </div>
                    </div>
                `;
        if (data.id == 'list') {
            modalDiv.innerHTML = `
                    <div class="modal-dialog modal-lg modal-dialog-centered overflow-auto">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="${data.id}Label">${data.projectName}</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="${data.modalImgSrc}" class="img-fluid mb-4 card" style="border:none; width: 100%" alt="${data.projectName}" >
                                <div class="text-start">
                                    <p class="mb-4">Find my full list of publications on 
                                    <a href="${data.modalP2Link}" rel="external" class=" mt-3">Google Scholar</a>.</p>

                            </div>
                        </div>
                    </div>
                `;
        }

        return modalDiv;
    }

    // Get the containers
    const portfolioContainer = document.getElementById('portfolio-container');
    const modalsContainer = document.getElementById('modals-container');

    portfolioData.forEach(item => {
        portfolioContainer.appendChild(createPortfolioItem(item));
        modalsContainer.appendChild(createModal(item));
    });

    const dissTextDiv = document.getElementById("dissText");
    dissTextDiv.innerHTML = dissTextDiv.innerHTML + `<br><a href="https://freidok.uni-freiburg.de/files/231096/qHBwJGDtmRP1piio/Milster_cover.jpg" rel="external" class="mt-3">Download Book Cover (37 MB)</a> `;
    const dissPdfDiv = document.getElementById("dissPdf")
    dissPdfDiv.innerHTML = dissPdfDiv.innerHTML + "(23 MB)"


});

