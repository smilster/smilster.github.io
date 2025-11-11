class Modal {


    constructor(data) {

        this.name = data.name;
        this.category = data.category;
        this.modalImgSrc = data.modalImgSrc;
        this.modalDescription = data.modalDescription;

        this.div = document.createElement('div');
        this.div.className = 'modal fade ';
        this.div.id = data.id;

        this.dialog = document.createElement('div');
        this.dialog.className = 'modal-dialog modal-dialog-centered  modal-dialog-scrollable modal-lg';


        this.content = document.createElement('div');
        this.content.className = 'modal-content';


        this.header = this.createHeader();

        this.body = document.createElement('div');
        this.body.className = 'modal-body';


        this.content.appendChild(this.header);
        this.content.appendChild(this.body);

        this.dialog.appendChild(this.content);
        this.div.append(this.dialog);

    }


    createHeader() {
// Modal Header
        const header = document.createElement('div');
        header.className = `modal-header bg-light pb-1`;

        const title = document.createElement('h3');


        const categoryDiv = document.createElement('h5');
        categoryDiv.className = 'modal-title text-muted';
        categoryDiv.textContent = this.category;

        const nameDiv = document.createElement('h3');
        nameDiv.className = 'modal-title text-info';
        nameDiv.textContent = this.name;


        title.append(categoryDiv, nameDiv);

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close  mt-0 mb-auto ';
        closeButton.dataset.bsDismiss = 'modal';

        header.appendChild(title);
        header.appendChild(closeButton);
        return header;
    }

    createImage(imageSource, width = '80%'){
        const image = document.createElement('img');
        image.src = imageSource;
        image.className = 'img-fluid mb-4 rounded-3 d-block mx-auto';
        image.style.width = width;
        image.alt = this.name;

        return image;
    }


    addImage(imageSource, width = '80%') {
       const image = this.createImage(imageSource, width);

        this.body.appendChild(image);
    }

    createVideo(videoSource,width = '80%', autoplay = true, loop = true,controls = false ) {
        const video = document.createElement('video');
        video.src = videoSource;
        video.className = 'mb-4 h-auto d-block rounded-3';
        video.style.width = width;
        video.alt = this.name;
        video.autoplay = autoplay;
        video.controls = controls;
        video.loop = loop;
        return video;
    }

    addVideo(videoSource,width = '80%', autoplay = true, loop = true,controls=false ) {
        const video = this.createVideo(videoSource,  width,autoplay,loop,controls);
        video.classList.add('mx-auto')
        this.div.addEventListener('hidden.bs.modal', (e) => {
            video.pause();
        })
        this.body.appendChild(video);
    }


    addText(text, alignmentClass = 'text-nice') {
        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.className = alignmentClass;
        const description = document.createElement('p');
        description.innerHTML = text;
        descriptionWrapper.appendChild(description);
        this.body.appendChild(descriptionWrapper);
    }


}