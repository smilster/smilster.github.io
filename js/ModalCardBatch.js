class ModalCardBatch {

    constructor(divId, name, data) {
        this.cardContainer = document.getElementById(divId);
        // this.modalsContainer = document.createElement("div");
        // // this.modalsContainer.style.height = "0%";
        // this.modalsContainer.id = name + '-modals';
        this.modalsContainer = document.getElementById('modal-container');

        if (name === 'papers') {
            this.createPaperModalCards(data, name);
        }

        if (name === 'projects') {
            this.createProjectModalCards(data, name);
        }


    }

    static generate(divId, name, data) {
        new ModalCardBatch(divId, name, data)
    }


    // P R O J E C T S

    createProjectModalCards(data, name) {
        data.forEach(item => {
            const card = Card.create(item, name);
            // card.classList.add('col-11','col-sm-9','col-md-5','col-lg-3','mx-auto');
            this.cardContainer.appendChild(card);
            const modal = this.createProjectModal(item)


            this.modalsContainer.appendChild(modal);
        })
    }


    createSchiggi(modal, item) {
        modal.dialog.classList.remove('modal-lg');
        modal.dialog.classList.add('modal-xl');
        const mediaWrapper = document.createElement('div');
        mediaWrapper.className = 'row row-cols-1 row-cols-lg-2';

        const videoCol = document.createElement('div');
        videoCol.classList.add('col');

        const video = modal.createVideo(item.modalVideo, '100%',true,true,true);
        videoCol.appendChild(video);

        const imageCol = document.createElement('div');
        imageCol.classList.add('col');
        const image = modal.createImage(item.modalImage, '100%');
        imageCol.appendChild(image);


        mediaWrapper.append(videoCol, imageCol);
        modal.body.appendChild(mediaWrapper);

        modal.addText(item.modalDescription);
    }

    createChoirJava(modal, item) {

        modal.addVideo(item.modalVideo, "60%", true, true, true);
        modal.addText(item.modalDescription);

    }


    createProjectModal(item, name) {
        const modal = new Modal(item);

        if (item.id === 'schiggi') {
            this.createSchiggi(modal, item);
        } else if (item.id === 'choirJava') {
            this.createChoirJava(modal, item);
        } else {
            modal.addImage(`img/projects/${item.modalImage}`, '70%')
            modal.addText(item.modalDescription);
        }


        modal.content.appendChild(this.createProjectModalFooter(item));

        return modal.div;
    }

    createProjectHashtags(item) {
        const hashTagContainer = document.createElement('div');
        hashTagContainer.className = 'd-flex flex-wrap me-auto align-items-center';
        hashTagContainer.style.fontSize = '12px';
        item.hashTags.forEach(hastTag => {
            const hashTagWrapper = document.createElement('div');
            hashTagWrapper.className = 'fw-bold me-2 border border-1 bg-white rounded-2 p-1 my-1';

            const hashTag = document.createElement('a');


            hashTag.href = hastTag.href;
            hashTag.rel = "external"
            hashTag.textContent = '#' + hastTag.label;

            hashTagWrapper.append(hashTag);
            hashTagContainer.appendChild(hashTagWrapper);
        })

        return hashTagContainer;


    }

    createIconLink(link, text, imageSrc) {


        const wrapper = document.createElement('a');
        wrapper.className = 'icon-link d-flex flex-column align-items-center  p-0 mb-0 mt-auto';
        wrapper.href = link;


        const label = document.createElement('a');
        label.textContent = text
        label.rel = 'external';


        const image = document.createElement('img');
        image.src = imageSrc;
        image.height = 38;

        wrapper.appendChild(image);
        wrapper.appendChild(label);

        return wrapper;
    }

    createProjectModalFooter(item) {


        const modalFooter = document.createElement('div');
        modalFooter.className = `modal-footer bg-light row`;


        const hashTags = this.createProjectHashtags(item);
        modalFooter.appendChild(hashTags);

        let iconCount = 0;

        if (item.githubLink !== '') {
            const github = this.createIconLink(item.githubLink, 'Code', 'img/icons/github-mark.svg')
            github.classList.add('col-2', 'col-lg-1')
            modalFooter.appendChild(github);
            iconCount = iconCount + 1;

        }

        if (item.demoLink !== '') {
            const play = this.createIconLink(item.demoLink, 'Run', 'img/icons/play.svg')

            if (item.id === 'webPage') {
                play.addEventListener("click",()=>{
                    const modalDiv = document.getElementById(item.id);
                    bootstrap.Modal.getInstance(modalDiv).hide();
                })
            }

            play.classList.add('col-2', 'col-lg-1')
            modalFooter.appendChild(play);
            iconCount = iconCount + 1;
        }

        hashTags.classList.add('col-' + (11 - 2 * iconCount), 'col-lg-' + (11 - iconCount));


        return modalFooter;
    }


    //  P A P E R S

    createPaperModalCards(data, name) {
        data.forEach(item => {
            const card = Card.create(item, name);
            // card.classList.add('col-9','col-sm-5','col-md-4','col-lg-3');
            this.cardContainer.appendChild(card);
            const modal = this.createPaperModal(item)

            this.modalsContainer.appendChild(modal);
        })
    }

    createPaperModal(item) {

        const modal = new Modal(item);

        modal.addImage(`img/papers/${item.modalImage}`)


        if (item.id !== 'list') {
            modal.addText(item.modalDescription);
            modal.body.appendChild(this.createPaperDetails(item));
            modal.content.appendChild(this.createPaperModalFooter(item));
        } else {
            modal.dialog.classList.remove('modal-lg');
            // modal.dialog.classList.add('modal-sm');
            modal.addText(item.modalDescription, 'text-center');

        }


        return modal.div;
    }


    createPaperDetails(item) {
        const paperDetailsWrapper = document.createElement('div');
        paperDetailsWrapper.className = 'text-start';


        const title = document.createElement('div');
        title.className = 'fw-bold';
        title.innerHTML = item.modalPaperTitle;

        const authors = document.createElement('div');
        authors.className = 'text-dark small';
        authors.innerHTML = item.modalPaperAuthors;

        const journal = document.createElement('div');
        journal.className = 'fst-italic text-muted  small';
        journal.innerHTML = item.modalPaperJournal + ' (' + item.modalPaperYear + ')';

        const doi = document.createElement('div');
        const link = document.createElement('a');
        link.className = 'small';
        link.href = item.modalPaperWebLink;
        link.rel = 'external';
        link.innerHTML += item.modalPaperWebLink.replace('https://', '');
        doi.appendChild(link);


        paperDetailsWrapper.append(title, authors, journal, doi);
        return paperDetailsWrapper;
    }


    createPaperModalFooter(item) {
        const modalFooter = document.createElement('div');
        modalFooter.id = `${item.id}Links`;
        modalFooter.className = `text-end modal-footer bg-light`;


        const webLink = document.createElement('a');
        webLink.type = 'button';
        webLink.className = 'btn btn-outline-secondary align-middle';
        webLink.href = item.modalPaperWebLink;
        webLink.rel = 'external';
        webLink.textContent = 'Web';

        modalFooter.appendChild(webLink);


        if (item.id === 'diss') {
            const coverLink = document.createElement('a');
            coverLink.type = 'button';
            coverLink.className = 'btn btn-outline-success align-middle';
            coverLink.href = item.modalPaperCoverPage;
            coverLink.rel = 'external';
            coverLink.textContent = 'Cover';

            modalFooter.appendChild(coverLink);
        }

        const pdfLink = document.createElement('a');
        pdfLink.type = 'button';
        pdfLink.className = 'btn btn-outline-danger align-middle';
        pdfLink.id = `${item.id}Pdf`;
        pdfLink.href = item.modalPaperPdf;
        pdfLink.rel = 'external';
        pdfLink.textContent = 'PDF';

        modalFooter.appendChild(pdfLink);
        return modalFooter;
    }


}

// Get the containers


